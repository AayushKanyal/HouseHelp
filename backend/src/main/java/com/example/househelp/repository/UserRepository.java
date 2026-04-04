package com.example.househelp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.househelp.entity.User;


public interface UserRepository extends JpaRepository<User, Long> {
    
}
