import React, {Component} from 'react';
import { API_URL, API_KEY } from '../../config';
import MovieInfo from '../../shared/movieInfo/MovieInfo';
import MovieInfoBar from '../../shared/movieInfoBar/MovieInfoBar';
import Spinner from '../../shared/spinner/Spinner';
import CommentBox from '../../shared/commentBox/CommentBox';
import './Movie.css';
// import FourColGrid from '../elements/FourColGrid/FourColGrid';
// import Navigation from '../elements/Navigation/Navigation';

export const MovieView = ({state})=>{
    // console.log(state);
    return (
        <div className="rmdb-movie">
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