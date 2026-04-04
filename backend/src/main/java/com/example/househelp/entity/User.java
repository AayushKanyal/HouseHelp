package com.example.househelp.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    private Long id;

    private String Name;
    private String Email;
    private String Password;
}
