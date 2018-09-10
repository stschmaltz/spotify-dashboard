import React, { Component } from 'react';
import qs from 'query-string';
// import SpotifyWebApi from 'spotify-web-api-js';
import {
  Grid,
  Button,
  Typography,
  ListItem,
  ListItemText,
  GridList,
  GridListTile,
  Paper
} from '@material-ui/core';
import { compose, pure } from 'recompose';
import withConnect from './withConnect';

const topSongs = (songs) => {
  console.log(songs);
  return songs.map((song, index) => {
    console.log(song.artists);
    const artists = song.artists.map((artist) => artist.name).join(', ');
    return (
      <ListItem style={style.listItems} key={song.uri}>
        <ListItemText inset primary={index + 1} />
        <ListItemText inset primary={song.name} secondary={artists} />
      </ListItem>
    );
  });
};

const style = {
  topSongsGrid: {
    flexGrow: 1
  },
  listItems: {
    padding: 10,
  }
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    const { saveAccessToken } = this.props;
    const queryString = qs.parse(window.location.hash);

    const { access_token } = queryString;
    if (access_token) {
      saveAccessToken(access_token);
    }
    this.state = {
      loggedIn: access_token ? true : false
    };
  }

  render() {
    const { loggedIn } = this.state;
    const { getMyTopSongs, myTopSongs } = this.props;

    const isMyTopSongs = myTopSongs && myTopSongs.length > 0;

    const content = loggedIn ? (
      <Typography> You're logged in fam</Typography>
    ) : (
      <a href="http://localhost:8888">Log Into Spotify on the Server</a>
    );
    return (
      <div className="Dashboard">
        <Grid style={style.topSongsGrid}>
          {content}
          <Paper>
            {loggedIn && (
              <Button color="primary" variant="raised" onClick={getMyTopSongs}>
                Get My Top Songs
              </Button>
            )}
            <GridList>{isMyTopSongs && topSongs(myTopSongs)}</GridList>
          </Paper>

          {/* <Paper>
            {loggedIn && (
              <Button color="primary" variant="raised" onClick={getMyTopSongs}>
                Get My Top Artists
              </Button>
            )}
            <GridList>{isMyTopSongs && topSongs(myTopSongs)}</GridList>F
          </Paper> */}
        </Grid>
      </div>
    );
  }
}

export default compose(
  pure,
  withConnect
)(Dashboard);
