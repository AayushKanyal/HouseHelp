package com.example.househelp.services;
import org.springframework.stereotype.Service;

import com.example.househelp.dto.SignupRequest;
import com.example.househelp.entity.User;
import com.example.househelp.repository.UserRepository;

@Service
public class UserService {
   private final UserRepository repo; 

   public UserService(UserRepository repo) {
    this.repo = repo;
   }

   public User register(SignupRequest request) {

    if (repo.findByEmail(request.getEmail()).isPresent()) {
        throw new RuntimeException("Email already registered");
    }

    User user = new User();
    user.setName(request.getName());
    user.setEmail(request.getEmail());
    user.setPassword(request.getPassword());
    user.setPhoneNumber(request.getPhone());

    return repo.save(user);
}
  
   
}
