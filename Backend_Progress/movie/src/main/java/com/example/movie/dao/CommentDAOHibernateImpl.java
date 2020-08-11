package com.example.movie.dao;
import com.example.movie.entity.Comment;
import com.example.movie.entity.User;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class CommentDAOHibernateImpl implements CommentDAO{

    private EntityManager entityManager;

    @Autowired
    public CommentDAOHibernateImpl(EntityManager theEntityManager){
        entityManager = theEntityManager;
    }

    @Override
    public List<Comment> findAll() {

        Session currentSession = entityManager.unwrap(Session.class);
        Query<Comment> theQuery= currentSession.createQuery("from Comment",Comment.class);
        List<Comment> comments = theQuery.getResultList();
        return comments;
    }

//    @Override
//    public Comment findById(int theId) {
//
//        //get the current hibernate session
//        Session currentSession = entityManager.unwrap(Session.class);
//
//        //get the employee
//        Comment theComment = currentSession.get(Comment.class, theId);
//
//        //return the employee
//        return theComment;
//    }

    @Override
    public List<Comment> findByMovieId(int movieId) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Comment> theQuery= currentSession.createQuery("from Comment where movieId=:movieId",Comment.class);
        theQuery.setParameter("movieId",movieId);
        List<Comment>  comments = theQuery.getResultList();
        return comments;
    }

    @Override
    public void save(Comment comment) {

        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(comment);
    }

    @Override
    public void deleteById(int theId) {

        Session currentSession = entityManager.unwrap(Session.class);
        Query theQuery = currentSession.createQuery(
                "delete from Comment where id=:commentId");
        theQuery.setParameter("commentId", theId);
        theQuery.executeUpdate();
    }
}