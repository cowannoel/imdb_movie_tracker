import React, {Component} from 'react';

import ReleaseList from '../components/ReleaseList';


class MovieBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      releases: [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part",
          url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ]
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick() {
    window.open("https://www.imdb.com/calendar/?region=gb");
  }

  render() {
    return (
      <div className="movie-box">
      <h2>Upcoming Movie Releases for UK</h2>
      <ReleaseList releases={this.state.releases} />
      <button onClick={this.handleClick}>View more releases</button>
      </div>
    );
  }
}

export default MovieBox;
