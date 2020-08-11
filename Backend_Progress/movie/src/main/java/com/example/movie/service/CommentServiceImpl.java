package com.example.movie.service;
import com.example.movie.dao.CommentDAO;
import com.example.movie.entity.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class CommentServiceImpl implements CommentService{

    private CommentDAO commentDAO;

    @Autowired
    public void CommentServiceImpl(CommentDAO theCommentDAO) {
        commentDAO = theCommentDAO;
    }

    @Override
    @Transactional
    public List<Comment> findAll() {
        return commentDAO.findAll();
    }

//    @Override
//    @Transactional
//    public Comment findById(int theId) {
//        return commentDAO.findById(theId);
//    }

    @Override
    @Transactional
    public List<Comment> findByMovieId(int movieId) {
        return commentDAO.findByMovieId(movieId);
    }

    @Override
    @Transactional
    public void save(Comment theComment) {
        commentDAO.save(theComment);
    }

    @Override
    @Transactional
    public void deleteById(int theId) { commentDAO.deleteById(theId);
    }
}