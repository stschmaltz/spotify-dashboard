import React from 'react';

import { GridListTileBar, GridListTile } from '@material-ui/core';

export const formatTopArtists = topArtistsData =>
  topArtistsData.map((row, index) => (
    <GridListTile
      key={row.name + row.genres}
      cols={0}
      style={{ width: '20em', height: 300 }}
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
