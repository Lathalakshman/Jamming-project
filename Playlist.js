import React from 'react';

import './Playlist.css';

import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
}


handleNameChange(event) {
    this.props.onNameChange(event.target.value);
}

    render() {
        return(
            <div class="Playlist">
  <input defaultValue={"New Playlist"} onChange={this.handleNameChange} />
  <TrackList tracks={this.props.playlistTracks} 
  onRemove={this.props.onRemove}
    isRemoval={true} /> 
  <button class="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
</div>
        )
    }
}

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2OkpBzUBASUrW1bxuOOkk4?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

export default Playlist;