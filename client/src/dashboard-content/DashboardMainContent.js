import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { GridList } from '@material-ui/core';
import { compose, pure } from 'recompose';
import ResultsList from '../components/ResultsList';
import withConnect from './withConnect';
import { formatTopSongs } from '../top-songs/song-data-formatter';

class DashboardContent extends Component {
  componentDidMount() {
    const { getMyTopSongs } = this.props;

    getMyTopSongs();
  }

  render() {
    const { myTopSongsLong, myTopSongsMed, myTopSongsShort } = this.props;
    const isMyTopSongs = myTopSongsLong && myTopSongsLong.length > 0;

    return (
      <Fragment>
        <GridList>
          <ResultsList
            headerColor="Yellow"
            listTitle="Your Top Songs (All Time)"
            listData={myTopSongsLong}
            listDataFunction={formatTopSongs}
            listHeaders={['Rank', 'Title', 'Artist', 'Album']}
          />
          <ResultsList
            headerColor="Green"
            listTitle="Your Top Songs (Last Six Months)"
            listData={myTopSongsMed}
            listDataFunction={formatTopSongs}
            listHeaders={['Rank', 'Title', 'Artist', 'Album']}
          />
          <ResultsList
            listTitle="Your Top Songs (Last Four Weeks)"
            listData={myTopSongsShort}
            listDataFunction={formatTopSongs}
            listHeaders={['Rank', 'Title', 'Artist', 'Album']}
          />
        </GridList>
      </Fragment>
    );
  }
}

export default compose(
  pure,
  withConnect
)(DashboardContent);
