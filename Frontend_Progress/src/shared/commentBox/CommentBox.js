import React, {Component} from 'react';
import './CommentBox.css';

class CommentBox extends Component {
    constructor(props) {
      super(props);
      console.log(props.tvId)
      this.state = {
        showComments: false,
        comments: [
        //   {id: 1, author: "Vishal", body: "It might be awkward, but please don't scroll past this. This Wednesday, for the 1st time recently, we humbly ask you to defend Wikipedia's independence. 98% of our readers don't give; they simply look the other way. If you are an exceptional reader who has already donated, we sincerely thank you. If you donate just ₹ 150, Wikipedia could keep thriving for years. Most people donate because Wikipedia is useful. If Wikipedia has given you ₹ 150 worth of knowledge this year, take a minute to donate. Show the volunteers who bring you reliable, neutral information that their work matters. Thank you."},
        //   {id: 2, author: "Rahul", body: "It might be awkward, but please don't scroll past this. This Wednesday, for the 1st time recently, we humbly ask you to defend Wikipedia's independence. 98% of our readers don't give; they simply look the other way. If you are an exceptional reader who has already donated, we sincerely thank you. If you donate just ₹ 150, Wikipedia could keep thriving for years. Most people donate because Wikipedia is useful. If Wikipedia has given you ₹ 150 worth of knowledge this year, take a minute to donate. Show the volunteers who bring you reliable, neutral information that their work matters. Thank you."},
        //   {id: 3, author: "Bittu", body: "It might be awkward, but please don't scroll past this. This Wednesday, for the 1st time recently, we humbly ask you to defend Wikipedia's independence. 98% of our readers don't give; they simply look the other way. If you are an exceptional reader who has already donated, we sincerely thank you. If you donate just ₹ 150, Wikipedia could keep thriving for years. Most people donate because Wikipedia is useful. If Wikipedia has given you ₹ 150 worth of knowledge this year, take a minute to donate. Show the volunteers who bring you reliable, neutral information that their work matters. Thank you."}
      ]
      };
    }
    render () {
      const comments = this.getComments();
      let commentNodes;
      let buttonText = 'Show Comments';
      
      if (this.state.showComments) {
        buttonText = 'Hide Comments';
        commentNodes = <div className="comment-list">{comments}</div>;
      }
      
      return(
        <div className="comment-box">
          <h2>Join the Discussion!</h2>
          <CommentForm addComment={this.addComment.bind(this)}/>
          
          <div>
          <button id="comment-reveal" onClick={this.handleClick.bind(this)}>
            {buttonText}
          </button>
          </div>
          
          
          <h4 className="comment-count">
            {this.getCommentsTitle(comments.length)}
          </h4>
          {commentNodes}
        </div>  
      );
    } // end render
    
    addComment(author, body) {
      const comment = {
        id: this.state.comments.length + 1,
        author:author,
        body:body
      };
    this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
      
    console.log(this.state.comments);
  }
    
    handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
    
    getComments() {    
      return this.state.comments.map((comment) => { 
        return (
          <Comment 
            author={comment.author} 
            body={comment.body} 
            key={comment.id} />
        ); 
      });
    }
    
    getCommentsTitle(commentCount) {
      if (commentCount === 0) {
        return 'No comments yet';
      } else if (commentCount === 1) {
        return "1 comment";
      } else {
        return `${commentCount} comments`;
      }
    }
  } // end CommentBox component
  
  class CommentForm extends React.Component {
    render() {
      return (
        <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="comment-form-fields">
            <input placeholder="Name" required ref={(input) => this._author = input}></input><br />
            <textarea placeholder="Comment" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
          </div>
          <div className="comment-form-actions">
            <button type="submit">Post Comment</button>
          </div>
        </form>
      );
    } // end render
    
    handleSubmit(event) { 
      event.preventDefault();   // prevents page from reloading on submit
      let author = this._author;
      let body = this._body;
      this.props.addComment(author.value, body.value);
    }
  } // end CommentForm component
  
  class Comment extends React.Component {
    render () {
      return(
        <div className="comment">
          <p className="comment-header">{this.props.author}</p>
          <p className="comment-body">- {this.props.body}</p>
        </div>
      );
    }
  }
export default CommentBox;