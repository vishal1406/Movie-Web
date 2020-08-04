import React, {Component} from 'react';
import MovieInfo from '../../shared/movieInfo/MovieInfo';
import MovieInfoBar from '../../shared/movieInfoBar/MovieInfoBar';
import Spinner from '../../shared/spinner/Spinner';
import CommentBox from '../../shared/commentBox/CommentBox';
import './Movie.css';

export const MovieView = ({state})=>{
    return (
        <div className="movie">
            {state.movie ?
                <div>
                    <MovieInfo movie={state.movie} directors={state.directors} />
                    <MovieInfoBar time={state.movie.runtime} budget={state.movie.budget} revenue={state.movie.revenue} /> 
                </div>
            : null}
            {state.loading ? <Spinner /> : null}
            <CommentBox/>
        </div>
        );
    }