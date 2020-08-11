package com.example.movie.controller;
import com.example.movie.dao.RatingDAO;
import com.example.movie.entity.Comment;
import com.example.movie.entity.Rating;
import com.example.movie.entity.RatingRequest;
import com.example.movie.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class RatingRestController {

    private RatingService ratingService;

    @Autowired
    public RatingRestController(RatingService theRatingService){
        ratingService = (RatingService) theRatingService;
    }

    @GetMapping("/ratings")
    public List<Rating> findAll(){
        return ratingService.findAll();
    }

    @GetMapping("/ratings/{ratingId}")
    public Rating getRating(@PathVariable int ratingId){
        Rating theRating = ratingService.findById(ratingId);
        if(theRating == null){
            throw new RuntimeException("Employee id not found - " + ratingId);
        }
        return theRating;
    }

    @GetMapping("/ratingByMovie/{movieId}")
    public int getRatingAverage(@PathVariable Integer movieId){
        return ratingService.findByMovieId(movieId);
    }

    @PostMapping("/ratings")
    public Rating addRating(@RequestBody RatingRequest ratingRequest){
        return ratingService.save(ratingRequest);
    }
}