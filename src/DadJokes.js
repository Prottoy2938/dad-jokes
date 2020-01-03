import React, { Component } from "react";
import axios from "axios";
import JokeList from "./JokeList";
import "./DadJokes.css";
import uuid from "uuid/v4";

export default class DadJokes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      jokes: [],
      error: false,
      requestedJoke: 0
    };

    this.getJokes = this.getJokes.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getJokes() {
    console.log("Jokes API from https://icanhazdadjoke.com");

    for (
      let i = this.state.requestedJoke;
      i < this.state.requestedJoke + 10;
      i++
    ) {
      axios
        .get("https://icanhazdadjoke.com", {
          headers: {
            Accept: "application/json"
          }
        })
        .then(
          Response => {
            let newJoke = Response.data.joke;

            this.setState({
              jokes: [...this.state.jokes, newJoke],
              isLoaded: true,
              error: false
            });
          },
          error => {
            console.log("Got Error Here");
            this.setState({
              error: true
            });
          }
        );
    }
  }
  componentDidMount() {
    this.getJokes();
  }

  handleClick() {
    this.setState({
      requestedJoke: this.state.requestedJoke + 10
    });
    this.getJokes();
  }

  render() {
    let TotalJokes = this.state.jokes.map(joke => (
      <JokeList joke={joke} key={uuid()} />
    ));
    return (
      <div className="container">
        <h1>Dad Jokes</h1>
        <ol>{TotalJokes}</ol>
        <button className="btn btn-warning" onClick={this.handleClick}>
          Get new jokes
        </button>
      </div>
    );
  }
}
