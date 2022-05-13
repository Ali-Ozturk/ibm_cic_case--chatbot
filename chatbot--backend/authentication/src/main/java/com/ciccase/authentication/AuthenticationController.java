package com.ciccase.authentication;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("api/v1/auth")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping
    public ResponseEntity<String> authenticateUser(@RequestBody AuthenticationRequest authRequest) {
        log.info("Authenticating user {}", authRequest);

        boolean isValid = authenticationService.authenticate(authRequest);

        if (isValid) {
            return new ResponseEntity<String>("User is valid", HttpStatus.OK);
        } else {
            return new ResponseEntity<String>("User is not valid", HttpStatus.UNAUTHORIZED);
        }

    }

}
