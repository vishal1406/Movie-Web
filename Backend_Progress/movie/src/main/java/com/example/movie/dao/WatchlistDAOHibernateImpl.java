package com.example.movie.dao;
import com.example.movie.entity.Watchlist;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class WatchlistDAOHibernateImpl implements WatchlistDAO{

    //define field for entity manager
    private EntityManager entityManager;

    //setup constructor injection
    //Automatically created by Spring Boot
    @Autowired
    public WatchlistDAOHibernateImpl(EntityManager theEntityManager){
        entityManager = theEntityManager;
    }

    @Override
    //@Transactional(Removing this as we include service)

    public List<Watchlist> findAll() {

        //get the current hibernate session
        Session currentSession = entityManager.unwrap(Session.class);

        //create a query
        Query<Watchlist> theQuery= currentSession.createQuery("from Watchlist",Watchlist.class);

        //execute query and get result List
        List<Watchlist> watchlists = theQuery.getResultList();

        //return the results
        return watchlists;
    }

    @Override
    public Watchlist findById(int theId) {

        //get the current hibernate session
        Session currentSession = entityManager.unwrap(Session.class);

        //get the employee
        Watchlist theWatchlist = currentSession.get(Watchlist.class, theId);

        //return the employee
        return theWatchlist;
    }

    @Override
    public void save(Watchlist watchlist) {
        //get the current hibernate session
        Session currentSession = entityManager.unwrap(Session.class);

        //save employee
        currentSession.saveOrUpdate(watchlist);
    }

    @Override
    public void deleteById(int theId) {

        //get the current hibernate session
        Session currentSession = entityManager.unwrap(Session.class);

        //delete object with primary key
        Query theQuery = currentSession.createQuery(
                "delete from Watchlist where id=:watchlistId");
        theQuery.setParameter("watchlistId", theId);
        theQuery.executeUpdate();
    }
}