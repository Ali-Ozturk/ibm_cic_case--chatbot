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

}
