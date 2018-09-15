import React from 'react';

import { TableCell, TableRow } from '@material-ui/core';

export const formatTopSongs = topSongsData =>
  topSongsData.map((row, index) => (
    <TableRow key={row.song + row.artist}>
      <TableCell component="th" scope="row">
        {index + 1}
      </TableCell>
      <TableCell>{row.song}</TableCell>
      <TableCell>{row.artist}</TableCell>
      <TableCell>{row.album}</TableCell>
    </TableRow>
  ));
