package com.example.movie.dao;
import com.example.movie.entity.Rating;
import java.util.List;

public interface RatingDAO {
    public List<Rating> findAll();
    public Rating findById(int theId);
    public int findByMovieId(int movieId);
    public void save(Rating theRating);
    public void deleteById(int theId);
}