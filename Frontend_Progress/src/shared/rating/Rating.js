import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class Rating extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating:null
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    console.log(this.state)
    //const proxyurl ="https://cors-anywhere.herokuapp.com/";
      const url ="http://localhost:7070/api/ratings"
      const response =fetch(url, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({rating:nextValue})
     })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(() => console.log("Can’t access " + url + " response. Blocked by browser"));
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <h3>OnGrid Rating: {rating}</h3>
        <StarRatingComponent
          name="rate1" 
          starCount={10}
          value={rating}
          emptyStarColor={`#fff`}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
export default Rating;