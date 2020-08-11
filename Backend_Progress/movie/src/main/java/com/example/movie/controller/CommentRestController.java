package com.example.movie.controller;
import com.example.movie.dao.CommentDAO;
import com.example.movie.entity.Comment;
import com.example.movie.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CommentRestController {

    private CommentService commentService;

    @Autowired
    public CommentRestController(CommentService theCommentService){
        commentService = (CommentService) theCommentService;
    }

    @GetMapping("/comments")
    public List<Comment> findAll(){
        return commentService.findAll();
    }

//    @GetMapping("/comments/{commentId}")
//    public Comment getComment(@PathVariable int commentId){
//        Comment theComment = commentService.findById(commentId);
//        if(theComment == null){
//            throw new RuntimeException("Employee id not found - " + commentId);
//        }
//        return theComment;
//    }

    @GetMapping("/comments/{movieId}")
    public List<Comment> getMovieComment(@PathVariable Integer movieId){
         return commentService.findByMovieId(movieId);
    }

    @PostMapping("/comments")
    public Comment addComment(@RequestBody Comment theComment){
        theComment.setId(0);
        commentService.save(theComment);
        return theComment;
    }
}