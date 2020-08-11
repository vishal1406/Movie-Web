package com.example.movie.service;

import com.example.movie.entity.Comment;
import com.example.movie.entity.Rating;
import com.example.movie.entity.RatingRequest;

import java.util.List;

public interface RatingService {
    public List<Rating> findAll();
    public Rating findById(int theId);
    public int findByMovieId(int movieId);
    public Rating save(RatingRequest ratingRequest);
    public void deleteById(int theid);
}
