package com.example.movie.entity;
import org.hibernate.annotations.CreationTimestamp;
import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name="movie_id")
    private int movieId;

    @Column(name="user_name")
    private String userName;

    @Column(name="add_comment")
    private String addComment;

    @Basic(optional = false)
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at")
    private Date createdDate;

    private Comment(){

    }

    public Comment(int id, int movieId, String userName, String addComment, Date createdDate) {
        this.id = id;
        this.movieId = movieId;
        this.userName = userName;
        this.addComment = addComment;
        this.createdDate = createdDate;
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getAddComment() {
        return addComment;
    }

    public void setAddComment(String addComment) {
        this.addComment = addComment;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", movieId=" + movieId +
                ", userName='" + userName + '\'' +
                ", addComment='" + addComment + '\'' +
                ", createdDate=" + createdDate +
                '}';
    }
}