package com.example.movie.service;

import com.example.movie.entity.Comment;

import java.util.List;

public interface CommentService {
    public List<Comment> findAll();
//    public Comment findById(int theId);
    public List<Comment> findByMovieId(int movieId);
    public void save(Comment theComment);
    public void deleteById(int theid);
}
