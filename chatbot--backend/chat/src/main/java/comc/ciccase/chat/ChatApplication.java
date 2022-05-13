package comc.ciccase.chat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.kafka.config.TopicBuilder;

@SpringBootApplication
public class ChatApplication {
    public static void main(String[] args) {
        SpringApplication.run(ChatApplication.class, args);
    }

    // TODO: Kafka package? service?

    @Bean
    public NewTopic topic() {
        return TopicBuilder.name("chat")
                .partitions(10)
                .replicas(1)
                .build();
    }
}
