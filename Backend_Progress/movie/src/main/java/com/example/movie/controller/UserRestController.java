package com.example.movie.controller;
import com.example.movie.dao.UserDAO;
import com.example.movie.entity.User;
import com.example.movie.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserRestController {

    private UserService userService;

    @Autowired
    public UserRestController(UserService theUserService){
        userService = (UserService) theUserService;
    }

    @GetMapping("/users")
    public List<User> findAll(){
        return userService.findAll();
    }

    @GetMapping("/users/{userId}")
    public User getUser(@PathVariable int userId){
        User theUser = userService.findById(userId);
        if(theUser == null){
            throw new RuntimeException("User id not found - " + userId);
        }
        return theUser;
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User theUser){
        theUser.setId(0);
        userService.save(theUser);
        return theUser;
    }

    @PostMapping("/login")
    public String login(@RequestBody User theUser){
        return userService.loginDetails(theUser);
    }
}