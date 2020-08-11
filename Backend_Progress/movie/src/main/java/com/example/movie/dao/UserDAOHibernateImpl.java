package com.example.movie.dao;
import com.example.movie.entity.User;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class UserDAOHibernateImpl implements UserDAO{

    //define field for entity manager
    private EntityManager entityManager;

    //setup constructor injection
    //Automatically created by Spring Boot
    @Autowired
    public UserDAOHibernateImpl(EntityManager theEntityManager){
        entityManager = theEntityManager;
    }

    @Override
    public List<User> findAll() {

        //get the current hibernate session
        Session currentSession = entityManager.unwrap(Session.class);

        //create a query
        Query<User> theQuery= currentSession.createQuery("from User",User.class);

        //execute query and get result List
        List<User> users = theQuery.getResultList();

        //return the results
        return users;
    }

    @Override
    public User findById(int theId) {

        //get the current hibernate session
        Session currentSession = entityManager.unwrap(Session.class);

        //get the user
        User theUser = currentSession.get(User.class, theId);

        //return the employee
        return theUser;
    }

    @Override
    public void save(User user) {
        //get the current hibernate session
        Session currentSession = entityManager.unwrap(Session.class);

        //save employee
        currentSession.saveOrUpdate(user);
    }

    @Override
    public String checkLogin(User theUser) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<User> theQuery = currentSession.createQuery("from User where email=:email and " +
                "password=:password");
        theQuery.setParameter("email",theUser.getEmail());
        theQuery.setParameter("password",theUser.getPassword());
        //User theuser = theQuery.getSingleResult();
        List<User> theuser = theQuery.getResultList();
        if(theuser.size()==0)
        {
            return "failure";
        }
        return "Success";
    }

    @Override
    public void deleteById(int theId) {

        //get the current hibernate session
        Session currentSession = entityManager.unwrap(Session.class);

        //delete object with primary key
        Query theQuery = currentSession.createQuery(
                "delete from User where id=:userId");
        theQuery.setParameter("userId", theId);
        theQuery.executeUpdate();
    }
}