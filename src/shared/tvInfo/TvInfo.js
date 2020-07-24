import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import FontAwesome from 'react-fontawesome';
import TvThumb from '../tvThumb/TvThumb';
import { calcTime, convertMoney } from '../../helpers.js';
import './TvInfo.css';

const TvInfo = (props) => {
    return (
    <div className="rmdb-movieinfo"
      style={{
        background: props.tv.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.tv.backdrop_path}')` : '#000'
      }}
      >
        <div className="rmdb-movieinfo-content">
          <div className="rmdb-movieinfo-thumb">
            <TvThumb
            image={props.tv.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.tv.poster_path}` : './images/no_image.jpg'}
            clickable={false}
            />
          </div>
          <div className="rmdb-movieinfo-text">
            <h1>{props.tv.title}</h1>
            <h3>Plot</h3>
            <p>{props.tv.overview}</p>
            <h3>IMDB Rating</h3>
            <p>{props.tv.rating}</p>
          <div className="rmdb-rating">
            <meter min="0" max="100" optimum="100" low="40" high="70" value={props.tv.vote_average * 10}></meter>
            <p className="rmdb-score">{props.tv.vote_average}</p>
          </div>
          {props.directors.length > 1 ? <h3>Directors</h3> : <h3>Director</h3> }
          {props.directors.map( (element, i) => {
          return <p  key={i} className="rmdb-director">{element.name}</p>
      })}
        </div>
          <FontAwesome className="fa-film" name="film" size="5x" />
        </div>
    </div>)
}

export default TvInfo;