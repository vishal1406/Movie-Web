package com.example.movie.service;

import com.example.movie.entity.WatchListRequest;
import com.example.movie.entity.Watchlist;

import java.util.List;

public interface WatchlistService {
    public List<Watchlist> findAll();
    public Watchlist findById(int theId);
    public Watchlist save(WatchListRequest watchListRequest);
    public void deleteById(int theid);
}