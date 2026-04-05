package com.example.househelp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.househelp.services.UserService;
import com.example.househelp.dto.SignupRequest;
import com.example.househelp.entity.User;


@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5783")
public class AuthController {
    private final UserService service;

    public AuthController(UserService service) {
        this.service = service;
    }
    @RequestMapping("/signup")
    public User signup(@RequestBody SignupRequest request) {
       return service.register(request);
    }
}
