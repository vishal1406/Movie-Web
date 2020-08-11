package com.example.movie.dao;
import com.example.movie.entity.User;
import java.util.List;

public interface UserDAO {
    public List<User> findAll();
    public User findById(int theId);
    public void save(User theUser);
    public String checkLogin(User theUser);
    public void deleteById(int theId);
}