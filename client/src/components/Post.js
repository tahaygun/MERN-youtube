import React, { Component } from "react";
import axios from "axios";
class Post extends Component {
  constructor(props) {
    super(props);
    this.voteHandler = this.voteHandler.bind(this);
  }

  voteHandler() {
    axios
      .post("https://aqueous-meadow-18078.herokuapp.com/api/postupvote/" + this.props.info._id)
      .then(res => {
        this.props.getposts();
      });
  }
  render() {
    var post = this.props.info;
    return (
      <div>
        <ul>
          <li>post: {post.post}</li>
          <li>likes: {post.vote}</li>
          <li>by: {post.user.username}</li>
        </ul>
        <button onClick={this.voteHandler}>+1</button>
      </div>
    );
  }
}

export default Post;
