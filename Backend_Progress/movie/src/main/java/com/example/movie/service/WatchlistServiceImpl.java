package com.example.movie.service;
import com.example.movie.dao.WatchlistDAO;
import com.example.movie.entity.User;
import com.example.movie.entity.WatchListRequest;
import com.example.movie.entity.Watchlist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class WatchlistServiceImpl implements WatchlistService{

    private WatchlistDAO watchlistDAO;
    @Autowired
    private UserService userService;

    @Autowired
    public void WatchlistServiceImpl(WatchlistDAO theWatchlistDAO) {
        watchlistDAO = theWatchlistDAO;
    }

    @Override
    @Transactional
    public List<Watchlist> findAll() {
        return watchlistDAO.findAll();
    }

    @Override
    @Transactional
    public Watchlist findById(int theId) {
        return watchlistDAO.findById(theId);
    }
    @Override
    @Transactional
    public Watchlist save(WatchListRequest watchListRequest) {
//        System.out.println(watchListRequest.getUserId());
        User user = userService.findById(watchListRequest.getUserId());
        Watchlist watchlist = new Watchlist();
        watchlist.setMovieId(watchListRequest.getMovieId());
        watchlist.setMovieName(watchListRequest.getMovieName());
//        Set<User> userSet = new HashSet<>();
//        userSet.add(user);
//        watchlist.setUser(userSet);
        watchlist.setUser((user));
        watchlistDAO.save(watchlist);
        return watchlist;
    }

    @Override
    @Transactional
    public void deleteById(int theId) { watchlistDAO.deleteById(theId);
    }
}