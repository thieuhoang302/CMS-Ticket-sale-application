import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import searchFill from "@mui/icons-material/Search";
// material
import { styled } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  InputBase,
  InputAdornment,
  Grid,
  Button
} from "@mui/material";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import '../Style/css/toolbarTable.scss'
// ----------------------------------------------------------------------

const SearchStyle = styled(InputBase)(({ theme }) => ({
  width: 405.11,
  height: 48,
  backgroundColor: "#F7F7F8",
  borderRadius: `12px !important`,
  fontStyle: `italic !important`,
  paddingLeft: `16px`,
  paddingRight: `12px`,
}));

// ----------------------------------------------------------------------

ToolbarTable.propTypes = {
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};


export default function ToolbarTable({ filterName, onFilterName }: any) {
  return (
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <SearchStyle
              value={filterName}
              onChange={onFilterName}
              placeholder="Tìm bằng số vé"
              endAdornment={
                <InputAdornment position="end">
                  <Box  component={searchFill} sx={{ color: "text.disabled" }} />
                </InputAdornment>
              }
            />
        </Grid>
        <Grid item xs={6}>
          <button className="button-28" role="button">Xuất file (.cvs)</button>
          <button className="button-28" role="button"><FilterAltOutlinedIcon/>Lọc vé</button>
        </Grid>
      </Grid>
    </Box>
          
  );
}
