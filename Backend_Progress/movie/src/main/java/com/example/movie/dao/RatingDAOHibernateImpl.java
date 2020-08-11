package com.example.movie.dao;
import com.example.movie.entity.Rating;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class RatingDAOHibernateImpl implements RatingDAO{

    private EntityManager entityManager;

    @Autowired
    public RatingDAOHibernateImpl(EntityManager theEntityManager){
        entityManager = theEntityManager;
    }

    @Override
    public List<Rating> findAll() {

        Session currentSession = entityManager.unwrap(Session.class);
        Query<Rating> theQuery= currentSession.createQuery("from Rating",Rating.class);
        List<Rating> ratings = theQuery.getResultList();
        return ratings;
    }

    @Override
    public Rating findById(int theId) {

        Session currentSession = entityManager.unwrap(Session.class);
        Rating theRating = currentSession.get(Rating.class, theId);
        return theRating;
    }

    @Override
    public int findByMovieId(int movieId) {
        Session currentSession = entityManager.unwrap(Session.class);

        Query<Double> theQuery =currentSession.createQuery("Select AVG(rating) from Rating where movieId=:movieId",Double.class);
        theQuery.setParameter("movieId",movieId);
        int ans = (int) theQuery.getSingleResult().doubleValue();
        return ans;
    }

    @Override
    public void save(Rating rating) {

        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(rating);
    }

    @Override
    public void deleteById(int theId) {

        Session currentSession = entityManager.unwrap(Session.class);
        Query theQuery = currentSession.createQuery(
                "delete from Rating where id=:ratingId");
        theQuery.setParameter("ratingId", theId);
        theQuery.executeUpdate();
    }
}