import React from 'react';

import { GridListTileBar, GridListTile } from '@material-ui/core';

// Add media query for width
export const formatTopArtists = topArtistsData =>
  topArtistsData.map((row, index) => (
    <GridListTile
      key={row.name + row.genres}
      cols={0}
      style={{ height: '10rem', maxWidth: '20rem' }}
    >
      <img src={row.image} alt={row.image} />
      <GridListTileBar
        title={`Rank: ${index + 1}`}
        subtitle={<span>{row.name}</span>}
      >
        {row.name}
      </GridListTileBar>
    </GridListTile>
  ));
