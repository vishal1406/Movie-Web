package com.example.movie.service;
import com.example.movie.dao.RatingDAO;
import com.example.movie.entity.Rating;
import com.example.movie.entity.RatingRequest;
import com.example.movie.entity.User;
import com.example.movie.entity.Watchlist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class RatingServiceImpl implements RatingService{

    private RatingDAO ratingDAO;

    @Autowired
    private UserService userService;

    @Autowired
    public void RatingServiceImpl(RatingDAO theRatingDAO) {
        ratingDAO = theRatingDAO;
    }

    @Override
    @Transactional
    public List<Rating> findAll() {
        return ratingDAO.findAll();
    }

    @Override
    @Transactional
    public Rating findById(int theId) {
        return ratingDAO.findById(theId);
    }

    @Override
    @Transactional
    public int findByMovieId(int movieId) {
        return ratingDAO.findByMovieId(movieId);
    }

    @Override
    @Transactional
    public Rating save(RatingRequest ratingRequest) {
        User user = userService.findById(ratingRequest.getUserId());
        Rating rating = new Rating();
        rating.setMovieId(ratingRequest.getMovieId());
        rating.setRating(ratingRequest.getRating());
        rating.setUser((user));
        ratingDAO.save(rating);
        return rating;
    }

    @Override
    @Transactional
    public void deleteById(int theId) { ratingDAO.deleteById(theId);
    }

}