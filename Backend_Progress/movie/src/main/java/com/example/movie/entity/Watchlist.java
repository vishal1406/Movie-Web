package com.example.movie.entity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import java.util.Date;
import java.util.Set;
@Entity
@Table(name = "watchlist")
public class Watchlist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name="movie_id")
    private int movieId;

    @Column(name="movie_name")
    private String movieName;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    public Watchlist(){

    }

    public Watchlist(int id, int movieId, String movieName, User user) {
        this.id = id;
        this.movieId = movieId;
        this.movieName = movieName;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getMovieId() {
        return movieId;
    }

    public void setMovieId(int movieId) {
        this.movieId = movieId;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Watchlist{" +
                "id=" + id +
                ", movieId=" + movieId +
                ", movieName='" + movieName + '\'' +
                ", user=" + user +
                '}';
    }
}