import React from "react";
import ReactDOM from "react-dom";
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import LoadMoreBtn from '../loadMoreBtn/LoadMoreBtn';
import "./CommentBox.css";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

function CommentBox() {
  return (
    <div style={{ padding: 14 }} className="App">
    <h1>Add your Comments!</h1>
    <form>
       <input type="text" id="fname" placeholder="Enter your comments"></input>
    </form>
    <button class="button">Post</button>
      <h1>Comments</h1>
      <Paper style={{ padding: "40px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Vishal Kumar</h4>
            <p style={{ textAlign: "left" }}>
            Millions of Indians are a step away from entering the formal digital economy. 
            They will need access to formal services such as jobs, education, healthcare, 
            loans, insurance products, house/vehicle on rent, etc. This transformation is 
            not possible without service providers being able to establish trust. And trust 
            establishment needs to be digital, accurate, cost-effective, bi-directional and 
            based on individual's consent. OnGrid leverages a decentralized repository of 
            verified information in a secure digital locker for achieving this.
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{ padding: "40px 20px", marginTop: 100 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Rishabh Jain</h4>
            <p style={{ textAlign: "left" }}>
            Millions of Indians are a step away from entering the formal digital economy. 
            They will need access to formal services such as jobs, education, healthcare, 
            loans, insurance products, house/vehicle on rent, etc. This transformation is 
            not possible without service providers being able to establish trust. And trust 
            establishment needs to be digital, accurate, cost-effective, bi-directional and 
            based on individual's consent. OnGrid leverages a decentralized repository of 
            verified information in a secure digital locker for achieving this.
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 8 minute ago
            </p>
          </Grid>
        </Grid>
      </Paper>
      <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Aman Sharma</h4>
            <p style={{ textAlign: "left" }}>
            Millions of Indians are a step away from entering the formal digital economy. 
            They will need access to formal services such as jobs, education, healthcare, 
            loans, insurance products, house/vehicle on rent, etc. This transformation is 
            not possible without service providers being able to establish trust. And trust 
            establishment needs to be digital, accurate, cost-effective, bi-directional and 
            based on individual's consent. OnGrid leverages a decentralized repository of 
            verified information in a secure digital locker for achieving this. ex.{" "}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 10 minute ago
            </p>
          </Grid>
        </Grid>
      </Paper>
      <LoadMoreBtn text="Load More"/>
    </div>
  );
}

export default CommentBox;



// import React from 'react';
// import './CommentBox.css';

// class CommentBox extends React.Component {
//     constructor() {
//       super();
      
//       this.state = {
//         showComments: false,
//         comments: [
//           {id: 1, author: "Vishal", body: "Awesome movie..."},
//           {id: 2, author: "Aman", body: "I like this movie..."},
//           {id: 3, author: "Rishabh", body: "hmm...it's quite good movie..."}
//         ]
//       };
//     }
    
//     render () {
//       const comments = this._getComments();
//       let commentNodes;
//       let buttonText = 'Show Comments';
      
//       if (this.state.showComments) {
//         buttonText = 'Hide Comments';
//         commentNodes = <div className="comment-list">{comments}</div>;
//       }
      
//       return(
//         <div className="comment-box">
//           <h2>Join the Discussion!</h2>
//           <CommentForm addComment={this._addComment.bind(this)}/>
//           <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
//             {buttonText}
//           </button>
//           <h3>Comments</h3>
//           <h4 className="comment-count">
//             {this._getCommentsTitle(comments.length)}
//           </h4>
//           {commentNodes}
//         </div>  
//       );
//     } 
    
//     _addComment(author, body) {
//       const comment = {
//         id: this.state.comments.length + 1,
//         author,
//         body
//       };
//       this.setState({ comments: this.state.comments.concat([comment]) });
//     }
    
//     _handleClick() {
//       this.setState({
//         showComments: !this.state.showComments
//       });
//     }
    
//     _getComments() {    
//       return this.state.comments.map((comment) => { 
//         return (
//           <Comment 
//             author={comment.author} 
//             body={comment.body} 
//             key={comment.id} />
//         ); 
//       });
//     }
    
//     _getCommentsTitle(commentCount) {
//       if (commentCount === 0) {
//         return 'No comments yet';
//       } else if (commentCount === 1) {
//         return "1 comment";
//       } else {
//         return `${commentCount} comments`;
//       }
//     }
//   }
  
//   class CommentForm extends React.Component {
//     render() {
//       return (
//         <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
//           <div className="comment-form-fields">
//             <input placeholder="Enter Name" required ref={(input) => this._author = input}></input><br />
//             <textarea placeholder="Write Comment" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
//           </div>
//           <div className="comment-form-actions">
//             <button type="submit">Post Comment</button>
//           </div>
//         </form>
//       );
//     } 
    
//     _handleSubmit(event) { 
//       event.preventDefault();
//       let author = this._author;
//       let body = this._body;
//       this.props.addComment(author.value, body.value);
//     }
//   } 
  
//   class Comment extends React.Component {
//     render () {
//       return(
//         <div className="comment">
//           <p className="comment-header">{this.props.author}</p>
//           <p className="comment-body">- {this.props.body}</p>
         
//         </div>
//       );
//     }
//   }

// export default CommentBox;