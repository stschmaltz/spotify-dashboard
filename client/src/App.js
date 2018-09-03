import React, { Component } from 'react';
import './App.css';
import qs from 'query-string';
import SpotifyWebApi from 'spotify-web-api-js';
import { Button, Typography, List, ListItem, ListItemText } from '@material-ui/core';

const spotifyApi = new SpotifyWebApi();


const topSongs = (songs) => {
  console.log(songs);
  return songs.map((song) => {
    console.log(song.artists);
    const artists = song.artists.map((artist)=>artist.name).join(', ');
    return (<ListItem key={song.uri}><ListItemText inset primary={song.name} secondary={artists} /></ListItem>);
  });
};

class App extends Component {
  getTopSongs = async () => {
    const res = await spotifyApi.getMyTopTracks({ time_range: 'long_term' });
    const res2 = await spotifyApi.getMyTopArtists({ time_range: 'long_term' });
    console.log(res2);
    this.setState({ myTopSongs: res.items });
  };

  constructor() {
    super();
    const queryString = qs.parse(window.location.hash);
    console.log(queryString);
    const { access_token } = queryString;
    console.log(access_token);
    console.log(this.state);
    if (access_token) {
      spotifyApi.setAccessToken(access_token);
    }
    this.state = {
      loggedIn: access_token ? true : false,
      myTopSongs: []
    };
  }



  render() {
    console.log(this.state);
    const { loggedIn, myTopSongs } = this.state;
    const isMyTopSongs = (songs) => songs.length > 0;
    // const getTracks = topSongs(myTopSongs)
    console.log(loggedIn);
    console.log(isMyTopSongs);

    const content = loggedIn ? ( <Typography> You're logged in fam</Typography> ) : ( <a href="http://localhost:8888">THIS IS A LINK TO SPOTIFY</a> );
    return <div className="App">
      {content}
      {loggedIn && <Button fullWidth={true} color="primary" variant="raised" onClick={this.getTopSongs}>Get My Top Songs</Button>}
      <List>
        { isMyTopSongs && topSongs(myTopSongs) }
      </List>
    </div>;
  }
}

export default App;
