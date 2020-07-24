import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TvThumb.css';

const TvThumb = (props) => {
    return (
    <div className="rmdb-tvthumb">
      {props.clickable ?
      <Link to={{pathname: `/${props.tvId}`, tvName: `${props.tvName}`}}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={props.image} alt="tvthumb" />
          </div>
          <div className="flip-card-back">
            <h1>TvSeries Name</h1> 
            <p>Director</p>
            <p>Click for more Info</p>
          </div>
        </div>
      </div>
      </Link>
        :
        <img src={props.image} alt="tvthumb" />
      }
      </div>
    )
}

TvThumb.propTypes = {
image:  PropTypes.string,
tvId: PropTypes.number,
tvName: PropTypes.string
}

export default TvThumb;

// <img src={props.image} alt="moviethumb" />