package com.ciccase.authentication;

import org.springframework.stereotype.Service;

@Service
public record AuthenticationService() {

    // TODO-Future: Create connection to database and validate user credentials
    public boolean authenticate(AuthenticationRequest authRequest) {

        // For now, we just "mimic" data validation
        return authRequest.username().equals("admin")
                && authRequest.password().equals("admin");
    }
}
