package com.example.movie.controller;
import com.example.movie.dao.WatchlistDAO;
import com.example.movie.entity.WatchListRequest;
import com.example.movie.entity.Watchlist;
import com.example.movie.service.WatchlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class WatchlistRestController {

    private WatchlistService watchlistService;

    @Autowired
    public WatchlistRestController(WatchlistService theWatchlistService){
        watchlistService = (WatchlistService) theWatchlistService;
    }

    @GetMapping("/watchlists")
    public List<Watchlist> findAll(){

        List<Watchlist> watchlist = watchlistService.findAll();
        return watchlist;
    }

    @GetMapping("/watchlists/{watchlistId}")
    public Watchlist getWatchlist(@PathVariable int watchlistId){
        Watchlist theWatchlist = watchlistService.findById(watchlistId);
        if(theWatchlist == null){
            throw new RuntimeException("Employee id not found - " + watchlistId);
        }
        return theWatchlist;
    }

    @PostMapping("/watchlists")
    public Watchlist addWatchlist(@RequestBody WatchListRequest watchListRequest){
        return watchlistService.save(watchListRequest);
    }
}