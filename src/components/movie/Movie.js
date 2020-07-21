import React, {Component} from 'react';
import { API_URL, API_KEY } from '../../config';
// import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css';
import CommentBox from '../elements/CommentBox/CommentBox';
class Movie extends Component {
    state = {
        movie: null,
        actors: null,
        directors: [],
        loading: false
    }

    componentDidMount(){
        if (localStorage.getItem(`${this.props.match.params.movieId}`)){
            const state = JSON.parse(localStorage.getItem(`${this.props.match.params.movieId}`));
            this.setState({ ...state});
        } else {
        this.setState({ loading: true })
        const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
        this.fetchItems(endpoint);
        }
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
            <div className="rmdb-movie">
                {this.state.movie ?
                    <div>
                        <MovieInfo movie={this.state.movie} directors={this.state.directors} />
                        <MovieInfoBar time={this.state.movie.runtime} budget={this.state.movie.budget} revenue={this.state.movie.revenue} /> 
                    </div>
                : null}
                {this.state.loading ? <Spinner /> : null}
                <CommentBox/>
            </div>
            
                )
                           
         }
    }
export default Movie;