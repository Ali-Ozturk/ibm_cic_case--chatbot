# ChatBot - IBM CIC Case

**My role**: Full-Stack Developer



### Project Prerequisites

> Java SDK 18+
>
> Maven 3+
>
> Node



## System Architecture

For this project, I wanted to challenge myself by implementing new technologies or frameworks that I haven't worked with before, to show that I am not afraid of jumping into new territory. Unfortunately, with limited time it turned out to be more difficult than I first anticipated. Nevertheless, I have included a list of the technologies I "chose" and why I chose them, followed by a list of the actual technologies that has been used in the uploaded project. 

### Expected architectural design

![image-20220513073942852](C:\Users\Ali\AppData\Roaming\Typora\typora-user-images\image-20220513073942852.png)

### Technologoies planned for project

**ReactJS** for the client.

**Apache Maven** for dependency management and multi-module implementation. 

**Spring boot** for the primary backend framework and for all microservices (e.g. RESTFul services).

**Kafka** topics for storing user events such as; 

* User messages that the agent did not recognize
* All user messages for real-time analytical purposes

**Cassandra database** to store all messages for persistence (Idea was that we might want to look at how we can improve the agent in the future)

**Google Dialogflow** for agent behaviour and answers. This was chosen to utilize some of the features that google cloud can offer, such as matching user messages to configured intents. Furthermore, the service was chosen because it offers an API that allows us to integrate it to my own application. 

All microservices was planned to be **docker** containers and be inside a **kubernetes** cluster for scalability purposes.

Finally, **Eureka** would act as the service registry to help with load balancing and coupling services together.



### Actual technologies used

These are the technologies that I managed to implement during the limited time

* Maven multi-module implementation
* Spring boot microservices
* ReactJS *(js libraries used can be found within the package.json file)*
* Very basic kafka implementation



## System Design

I quickly had a good idea of how I wanted the application to look like and started on a very basic mockup for the system after determining the architecture. Unfortunately, I did not have time to polish and showcase the various components that I wanted to include in the web application. The main ideas was that I wanted two pages; one that would show a basic frontpage for a user and a page for administrators in which the chat agent could be configured and tested.  

![image-20220513080115121](C:\Users\Ali\AppData\Roaming\Typora\typora-user-images\image-20220513080115121.png)



### Installation and Setup

#### Frontend

#### Backend



