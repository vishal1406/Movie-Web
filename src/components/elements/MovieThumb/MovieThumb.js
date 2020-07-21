import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieThumb.css';

const MovieThumb = (props) => {
    return (
     <div className="rmdb-moviethumb">
     {props.clickable ?
     <Link to={{pathname: `/${props.movieId}`, movieName: `${props.movieName}`}}>
     <div class="flip-card">
       <div class="flip-card-inner">
          <div class="flip-card-front">
           <img src={props.image} alt="moviethumb" />
          </div>
        <div class="flip-card-back">
        <h1>Movie Name</h1> 
        <p>Director</p>
        <p>Click for more Info</p>
      </div>
      </div>
      </div>
         </Link>
         :
         <img src={props.image} alt="moviethumb" />  
     }
     </div>
    )
}

MovieThumb.propTypes = {
image:  PropTypes.string,
movieId: PropTypes.number,
movieName: PropTypes.string
}

export default MovieThumb;

// <img src={props.image} alt="moviethumb" />