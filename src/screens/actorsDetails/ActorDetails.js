import React, {Component} from 'react';
import { API_URL, API_KEY } from '../../config';
import {ActorDetailsView} from './ActorDetailsView';
import './ActorDetails.css';

class ActorDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            person: null,
            actors: null,
            directors: [],
            loading: false
        }
    }
   
    componentDidMount(){
        
        this.setState({ loading: true })
        const endpoint = `${API_URL}person/${this.props.match.params.personId}?api_key=${API_KEY}&language=en-US`;
        this.fetchItems(endpoint);
        
    }

    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            if (result.status_code){
                this.setState({ loading: false });
            } else {
                this.setState({ person: result }, () => {
                const endpoint = `${API_URL}person/${this.props.match.params.personId}/credits?api_key=${API_KEY}`;
               fetch(endpoint)
               .then(result => result.json())
               .then(result => {
                   const directors = result.crew.filter( (member) => member.job === "Director");
              
                this.setState({
                 actors: result.cast,
                 directors,
                 loading: false
              }, () => {
                  localStorage.setItem(`${this.props.match.params.personId}`, JSON.stringify(this.state));
              })
             })
            })
          }
        })
        .catch(error => console.error('Error:', error))
    }
    render() {
        return (
            <ActorDetailsView state={this.state}/>
        );
                           
         }
    }
export default ActorDetails;