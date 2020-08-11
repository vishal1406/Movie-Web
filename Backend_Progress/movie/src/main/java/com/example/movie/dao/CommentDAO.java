package com.example.movie.dao;
import com.example.movie.entity.Comment;
import java.util.List;

public interface CommentDAO {
    public List<Comment> findAll();
//    public Comment findById(int theId);
    public List<Comment> findByMovieId(int movieId);
    public void save(Comment theComment);
    public void deleteById(int theId);
}