import React, { Component } from 'react';

class Release extends Component {
  render() {
    return (
      <div className="release">
      <ul>
        <a href={this.props.url}>{this.props.title}</a>
      </ul>
      </div>
    );
  }
}

export default Release;
