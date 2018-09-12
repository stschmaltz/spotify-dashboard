import React, { Component } from "react";
import qs from "query-string";
// import SpotifyWebApi from 'spotify-web-api-js';
import {
  Grid,
  Button,
  Typography,
  ListItem,
  ListItemText,
  GridList,
  Card
} from "@material-ui/core";
// import { GridContainer } from "material-ui";
import { compose, pure } from "recompose";
import withConnect from "./withConnect";
import ResultsList from "../components/ResultsList";
import { formatTopSongs } from "../util/songDataFormatter";

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
    const {
      getMyTopSongs,
      myTopSongsLong,
      myTopSongsMed,
      myTopSongsShort
    } = this.props;

    const isMyTopSongs = myTopSongsLong && myTopSongsLong.length > 0;

    return (
      <div className="Dashboard">
        <Grid>
          <Typography
            variant="display3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Welcome to Your Spotify Dashboard
          </Typography>
          {!loggedIn && (
            <a href="http://localhost:8888">Log Into Spotify on the Server</a>
          )}
          {loggedIn && (
            <Button color="primary" variant="raised" onClick={getMyTopSongs}>
              Get My Top Songs
            </Button>
          )}
          {isMyTopSongs && (
            <div>
              <ResultsList
                headerColor={"Yellow"}
                listTitle={"Your Top Songs (All Time)"}
                listData={myTopSongsLong}
                listDataFunction={formatTopSongs}
                listHeaders={["Rank", "Title", "Artist", "Album"]}
              />
              <ResultsList
                headerColor={"Green"}
                listTitle={"Your Top Songs (Last Six Months)"}
                listData={myTopSongsMed}
                listDataFunction={formatTopSongs}
                listHeaders={["Rank", "Title", "Artist", "Album"]}
              />
              <ResultsList
                listTitle={"Your Top Songs (Last Four Weeks)"}
                listData={myTopSongsShort}
                listDataFunction={formatTopSongs}
                listHeaders={["Rank", "Title", "Artist", "Album"]}
              />
            </div>
          )}
        </Grid>
      </div>
    );
  }
}

export default compose(
  pure,
  withConnect
)(Dashboard);
