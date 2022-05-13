package comc.ciccase.chat;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

@RestController
@RequestMapping("api/v1/chat")
public class ChatController {

    private final ChatService chatService;

    public ChatController(ChatService chatService) {
        this.chatService = chatService;
    }

    @PostMapping
    public void createChatRequest(@RequestBody ChatRequest chatRequest) {
        ArrayList<String> texts = new ArrayList<String>(Arrays.asList("Hello", "Test"));



        try {
            chatService.detectIntentTexts("ibmcaseagent-pttf", texts, "123456789", "en-US");
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }

        // chatService.forwardMessage(chatRequest);
    }
}
