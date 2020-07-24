import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import FontAwesome from 'react-fontawesome';
import ActorThumb from '../actorThumb/ActorThumb';
import { calcTime, convertMoney } from '../../helpers.js';
import './ActorInfo.css';

const ActorInfo = (props) => {
    return (
    <div className="rmdb-movieinfo"
      style={{
        background: props.person.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.person.backdrop_path}')` : '#000'
      }}
      >
        <div className="rmdb-movieinfo-content">
          <div className="rmdb-movieinfo-thumb">
            <ActorThumb
            image={props.person.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.person.poster_path}` : './images/no_image.jpg'}
            clickable={false}
            />
          </div>
          <div className="rmdb-movieinfo-text">
            <h1>{props.person.title}</h1>
            <h3>Plot</h3>
            <p>{props.person.overview}</p>
            <h3>IMDB Rating</h3>
            <p>{props.person.rating}</p>
          <div className="rmdb-rating">
            <meter min="0" max="100" optimum="100" low="40" high="70" value={props.person.vote_average * 10}></meter>
            <p className="rmdb-score">{props.person.vote_average}</p>
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

export default ActorInfo;