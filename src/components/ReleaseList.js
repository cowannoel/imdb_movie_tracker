import React, { Component } from 'react';
import Release from './Release';


class ReleaseList extends Component {
  render() {
    const releaseNodes = this.props.releases.map(release => {
      return (
        <Release title={release.name} url={release.url} key={release.id}></Release>
      )
    })
    return (
      <div className="release-list">
      {releaseNodes}
      </div>
    );
  }
}

export default ReleaseList;
