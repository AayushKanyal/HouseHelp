package com.example.househelp.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.househelp.entity.User;


public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
