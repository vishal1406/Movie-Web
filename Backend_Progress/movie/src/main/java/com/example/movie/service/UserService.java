package com.example.movie.service;

import com.example.movie.entity.User;

import java.util.List;

public interface UserService {
    public List<User> findAll();
    public User findById(int theId);
    public void save(User theUser);
    public String loginDetails(User theuser);
    public void deleteById(int theid);
}