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
  Card,
} from '@material-ui/core';
import { GridContainer } from 'material-ui';
import { compose, pure } from 'recompose';
import withConnect from './withConnect';

const topSongs = (songs) => {
  return songs.map((song, index) => {
    const artists = song.artists.map((artist) => artist.name).join(', ');
    return (
      <ListItem divider={true} style={style.listItems} key={song.uri}>
        <ListItemText inset primary={index + 1} />
        <ListItemText inset primary={song.name} secondary={artists} />
      </ListItem>
    );
  });
};

const style = {
  topSongsGrid: {
    maxWidth: '80%',
    flexGrow: 1
  },
  listItems: {
    alignContent: 'center',
    alightItems: 'center',
    alignText: 'left',
    textAlign: 'left',
    height: 50
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
        <GridContainer style={style.topSongsGrid}>
          {content}
          <Card>
            {loggedIn && (
              <Button color="primary" variant="raised" onClick={getMyTopSongs}>
                Get My Top Songs
              </Button>
            )}
            <GridList>{isMyTopSongs && topSongs(myTopSongs)}</GridList>
          </Card>

          {/* <Paper>
            {loggedIn && (
              <Button color="primary" variant="raised" onClick={getMyTopSongs}>
                Get My Top Artists
              </Button>
            )}
            <GridList>{isMyTopSongs && topSongs(myTopSongs)}</GridList>F
          </Paper> */}
        </GridContainer>
      </div>
    );
  }
}

export default compose(
  pure,
  withConnect
)(Dashboard);
