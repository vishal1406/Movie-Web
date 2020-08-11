package com.example.movie.service;
import com.example.movie.dao.UserDAO;
import com.example.movie.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private UserDAO userDAO;

    @Autowired
    public void UserServiceImpl(UserDAO theUserDAO) {
        userDAO = theUserDAO;
    }

    @Override
    @Transactional
    public List<User> findAll() {
        return userDAO.findAll();
    }

    @Override
    @Transactional
    public User findById(int theId) {
        return userDAO.findById(theId);
    }

    @Override
    @Transactional
    public void save(User theUser) {
        userDAO.save(theUser);
    }

    @Override
    public String loginDetails(User theuser) {
        return userDAO.checkLogin(theuser);
    }

    @Override
    @Transactional
    public void deleteById(int theId) { userDAO.deleteById(theId);
    }
}