package com.example.movie.dao;
import com.example.movie.entity.Watchlist;
import java.util.List;

public interface WatchlistDAO {
    public List<Watchlist> findAll();
    public Watchlist findById(int theId);
    public void save(Watchlist theWatchlist);
    public void deleteById(int theId);
}