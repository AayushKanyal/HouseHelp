package com.example.househelp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.househelp.dto.SignupRequest;
import com.example.househelp.entity.User;
import com.example.househelp.services.UserService;


@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5783", "http://localhost:3000"}, allowCredentials = "true")
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
