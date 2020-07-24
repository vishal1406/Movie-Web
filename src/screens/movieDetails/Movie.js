import React, {Component} from 'react';
import { API_URL, API_KEY } from '../../config';
import {MovieView} from './MovieView';
import './Movie.css';
// import Navigation from '../elements/Navigation/Navigation';
// import MovieInfo from '../elements/MovieInfo/MovieInfo';
// import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
// import FourColGrid from '../elements/FourColGrid/FourColGrid';
// import Spinner from '../elements/Spinner/Spinner';
// import CommentBox from '../elements/CommentBox/CommentBox';

class Movie extends Component {
    constructor(props){
        super(props)
        this.state = {
            movie: null,
            actors: null,
            directors: [],
            loading: false
        }
    }
   
    componentDidMount(){
        this.setState({ loading: true })
        const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            if (result.status_code){
                this.setState({ loading: false });
            } else {
                this.setState({ movie: result }, () => {
                const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
               fetch(endpoint)
               .then(result => result.json())
               .then(result => {
                   const directors = result.crew.filter( (member) => member.job === "Director");
              
                this.setState({
                 actors: result.cast,
                 directors,
                 loading: false
              }, () => {
                  localStorage.setItem(`${this.props.match.params.movieId}`, JSON.stringify(this.state));
              })
             })
            })
          }
        })
        .catch(error => console.error('Error:', error))
    }
    render() {
        return (
            <MovieView state={this.state}/>
        );
                           
         }
    }
export default Movie;

// {
//     state: {
//        movies: {}
//       .....
//      }
//  }