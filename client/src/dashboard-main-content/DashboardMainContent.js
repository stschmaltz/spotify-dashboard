import React, { Component, Fragment } from 'react';
import { Grid, GridList, withStyles } from '@material-ui/core';
import { compose, pure } from 'recompose';
import ResultsList from '../components/ResultsList/ResultsList';
import withConnect from './withConnect';
import { formatTopSongs } from '../user-favourites/song-data-formatter';
import { formatTopArtists } from '../user-favourites/artist-data-formatter';
import { style } from './style';
import ResultsGrid from '../components/ResultsGrid.js/ResultsGrid';

class DashboardContent extends Component {
  componentDidMount() {
    const { getMyTopSongs } = this.props;
    const { getMyTopArtists } = this.props;

    getMyTopSongs();
    getMyTopArtists();
  }

  render() {
    const {
      myTopSongsLong,
      myTopSongsMed,
      myTopSongsShort,
      myTopArtists,
    } = this.props;
    const { classes } = this.props;
    // const isMyTopSongs = myTopSongsLong && myTopSongsLong.length > 0;

    return (
      <Fragment>
        <Grid className={classes.root}>
          <GridList className={classes.list}>
            <ResultsList
              headerColor="Yellow"
              listTitle="Top Songs (All Time)"
              listData={myTopSongsLong}
              listDataFunction={formatTopSongs}
              listHeaders={['Rank', 'Title', 'Artist', 'Album']}
            />
            <ResultsList
              headerColor="Green"
              listTitle="Top Songs (Last Six Months)"
              listData={myTopSongsMed}
              listDataFunction={formatTopSongs}
              listHeaders={['Rank', 'Title', 'Artist', 'Album']}
            />
            <ResultsList
              headerColor="Red"
              listTitle="Top Songs (Last Four Weeks)"
              listData={myTopSongsShort}
              listDataFunction={formatTopSongs}
              listHeaders={['Rank', 'Title', 'Artist', 'Album']}
            />
            <ResultsGrid
              headerColor="Blue"
              listTitle="Top Artists"
              listData={myTopArtists}
              listDataFunction={formatTopArtists}
              listHeaders={['Rank', 'Image', 'Name']}
            />
          </GridList>
        </Grid>
      </Fragment>
    );
  }
}

export default compose(
  pure,
  withStyles(style),
  withConnect,
)(DashboardContent);
