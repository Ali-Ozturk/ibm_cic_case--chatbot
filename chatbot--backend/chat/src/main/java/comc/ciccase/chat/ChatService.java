package comc.ciccase.chat;

import com.google.api.client.util.Maps;
import com.google.api.gax.rpc.ApiException;
import com.google.cloud.dialogflow.v2.*;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class ChatService {
    private final KafkaTemplate<String, String> kafkaTemplate;

    public ChatService(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void forwardMessage(ChatRequest request) {
        // TODO: Integrate Dialogflow here
        kafkaTemplate.send("chat", request.toString());
    }

    public Map<String, QueryResult> detectIntentTexts(
            String projectId, List<String> texts, String sessionId, String languageCode)
            throws IOException, ApiException {
        Map<String, QueryResult> queryResults = Maps.newHashMap();
        // Instantiates a client
        try (SessionsClient sessionsClient = SessionsClient.create()) {
            // Set the session name using the sessionId (UUID) and projectID (my-project-id)
            SessionName session = SessionName.of(projectId, sessionId);
            System.out.println("Session Path: " + session.toString());

            // Detect intents for each text input
            for (String text : texts) {
                // Set the text (hello) and language code (en-US) for the query
                TextInput.Builder textInput =
                        TextInput.newBuilder().setText(text).setLanguageCode(languageCode);

                // Build the query with the TextInput
                QueryInput queryInput = QueryInput.newBuilder().setText(textInput).build();

                // Performs the detect intent request
                DetectIntentResponse response = sessionsClient.detectIntent(session, queryInput);

                // Display the query result
                QueryResult queryResult = response.getQueryResult();

                System.out.println("====================");
                System.out.format("Query Text: '%s'\n", queryResult.getQueryText());
                System.out.format(
                        "Detected Intent: %s (confidence: %f)\n",
                        queryResult.getIntent().getDisplayName(), queryResult.getIntentDetectionConfidence());
                System.out.format(
                        "Fulfillment Text: '%s'\n",
                        queryResult.getFulfillmentMessagesCount() > 0
                                ? queryResult.getFulfillmentMessages(0).getText()
                                : "Triggered Default Fallback Intent");

                queryResults.put(text, queryResult);
            }
        }
        return queryResults;
    }

}
