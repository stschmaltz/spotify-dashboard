import React from 'react';

import { GridListTileBar, GridListTile } from '@material-ui/core';

export const renderTopArtistGrid = topArtistsData =>
  topArtistsData.map((row, index) => {
    const artist = row.name;
    const rank = `Rank ${index + 1}`;

    return (
      <GridListTile
        key={row.name + row.genres}
        cols={0}
        style={{ height: '10rem', maxWidth: '20rem' }}
      >
        <img src={row.image} alt={row.image} />
        <GridListTileBar title={artist} subtitle={<span>{rank}</span>}>
          {row.name}
        </GridListTileBar>
      </GridListTile>
    );
  });
