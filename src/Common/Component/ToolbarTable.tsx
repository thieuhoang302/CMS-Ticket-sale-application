import React from "react";
import PropTypes from "prop-types";
import searchFill from "@mui/icons-material/Search";
// material
import { styled } from "@mui/material/styles";
import {
  Box,
  InputBase,
  InputAdornment,
} from "@mui/material";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import '../Style/css/buttonOutline.scss';
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
  );
}
