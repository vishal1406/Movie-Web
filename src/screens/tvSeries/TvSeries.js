import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL,POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import SearchBar from '../../shared/searchBar/SearchBar';
import FourColGrid from '../../shared/fourColGrid/FourColGrid';
import MovieThumb from '../../shared/tvThumb/TvThumb';
import LoadMoreBtn from '../../shared/loadMoreBtn/LoadMoreBtn';
import Spinner from '../../shared/spinner/Spinner';
import './TvSeries.css';
// import {HomeView} from './HomeView';

class TvSeries extends Component {
constructor(props){
        super(props)
        this.state = {
            movies: [],
            loading: false,
            currentPage: 0,
            totalPages: 0,
            searchTerm: ''}
    }


componentDidMount(){
  
    this.setState({ loading: true });
    const endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
    this.fetchItems(endpoint);

}

searchItems = (searchTerm) => {
let endpoint = '';
this.setState({
    movies: [],
    loading: true,
    searchTerm
})

    if(searchTerm  === ''){
        endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
        endpoint = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    this.fetchItems(endpoint);
}

loadMoreItems = () => {
    let endpoint = '';
    this.setState({ loading: true });

    if(this.state.searchTerm === ''){
        endpoint = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
    } else {
        endpoint = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
}

fetchItems = (endpoint) => {
    fetch(endpoint)
    .then(result => result.json())
    .then(result => {
        this.setState({
            movies: [...this.state.movies, ...result.results],
            loading: false,
            currentPage: result.page,
            totalPages: result.total_pages
        }, ()=> {
            if(this.state.searchTerm === ""){
            localStorage.setItem('HomeState', JSON.stringify(this.state));
            }
        })
    })
    .catch(error => console.error('Error:', error))
}

    render() {
         return (
            <div className="rmdb-home">
                <SearchBar callback={this.searchItems} />
                    <div className="rmdb-home-grid">
                      <FourColGrid
                      header={this.state.searchTerm ? 'Search Result' : 'Popular TvSeries'}
                      loading={this.state.loading}
                      >
                      {this.state.movies.map ( (element, i) => {
                          return <MovieThumb
                                  key={i}
                                  clickable={true}
                                  image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : '../../assets/no_image.jpg'}
                                  tvId={element.id}
                                  tvName={element.original_title}
                                  />
                                })}           
                      </FourColGrid>
                      {this.state.loading ? <Spinner /> : null}
                      {(this.state.currentPage <= this.state.totalPages && !this.state.loading) ?
                      <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} />
                      : null }
                    </div>
            </div>
        )
    }
}

export default TvSeries;