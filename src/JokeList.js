import React, { Component } from "react";
import "./JokeList.css";

export default class JokeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vote: 10
    };
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.emojiSelector = this.emojiSelector.bind(this);
  }
  upVote() {
    this.setState({
      vote: this.state.vote + 1
    });
  }
  downVote() {
    this.setState({
      vote: this.state.vote - 1
    });
  }
  emojiSelector() {
    if (
      (this.state.vote < 10 && this.state.vote > 8) ||
      this.state.vote === 8
    ) {
      return "😐";
    }
    if (
      (this.state.vote <= 8 && this.state.vote > 5) ||
      this.state.vote === 6
    ) {
      return "😠";
    }
    if (
      (this.state.vote <= 5 && this.state.vote > 3) ||
      this.state.vote === 4
    ) {
      return "😤";
    }
    if (
      (this.state.vote <= 3 && this.state.vote > 0) ||
      this.state.vote === 2
    ) {
      return "😡";
    }
    if (this.state.vote <= 0) {
      return "🤬";
    }

    // When Joke is Good
    if (this.state.vote === 10) {
      return "😶";
    }
    if (
      (this.state.vote >= 10 && this.state.vote < 12) ||
      this.state.vote === 11
    ) {
      return "😀";
    }
    if (
      (this.state.vote >= 12 && this.state.vote < 14) ||
      this.state.vote === 13
    ) {
      return "😁";
    }
    if (
      (this.state.vote >= 14 && this.state.vote < 16) ||
      this.state.vote === 15
    ) {
      return "😅";
    }
    if (
      (this.state.vote >= 16 && this.state.vote < 19) ||
      this.state.vote === 18
    ) {
      return "😂";
    }
    if (this.state.vote >= 19) {
      return "🤣";
    }
  }

  render() {
    return (
      <div className="collection">
        <div className="JokeContainer demo child">
          <span className="emoji">{this.emojiSelector()}</span>
          <p className={this.state.vote < 10 ? "vote downvote" : "vote upvote"}>
            {this.state.vote - 5}
          </p>
          <p onClick={this.upVote} className="text-right">
            <i className="fas fa-plus"></i>
          </p>
          <li className="text-center">{this.props.joke}</li>

          <p onClick={this.downVote} className="text-left">
            <i className="fas fa-minus-square"></i>
          </p>
        </div>
      </div>
    );
  }
}
