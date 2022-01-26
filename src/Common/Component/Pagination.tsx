import React, { useState } from "react";
import "../Style/css/pagination.scss";
import PaginationMUI from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import { ReactComponent as NextIcon } from "../Style/img/Next.svg";
import { ReactComponent as PrevIcon } from "../Style/img/Previou.svg";

const useStyles = makeStyles({
  root: {
    "& .Mui-selected": {
      backgroundColor: "transparent",
      color: "#FF993C",
      borderRadius: "4px",
      border: "1px solid #FF993C",
      "&:hover": {
        backgroundColor: "#ffe3a1",
      },
    },
    "& .MuiPaginationItem-root": {
      "&:hover": {
        backgroundColor: "#ffe3a1",
      },
    },
  },
});

const Pagination = () => {
  const classes = useStyles();
  const totalCount = 20;
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const handleChangeNextPage = () =>{
      if(page < totalCount)
        setPage(page+1);
  }
  const handleChangePrevPage = () =>{
    if(page > 1)
      setPage(page-1);
}
  return (
    <>
      <button className="buttonPagination" style={page !== 1? {color: '#FF993C'} :{}} onClick={handleChangePrevPage}>
        <PrevIcon/>
      </button>
      <PaginationMUI
        page={page}
        onChange={handleChange}
        classes={{ root: classes.root }}
        count={totalCount}
        shape="rounded"
        hidePrevButton
        hideNextButton
      ></PaginationMUI>
      <button className="buttonPagination" style={page !== 20? {color: '#FF993C'} :{}} onClick={handleChangeNextPage}>
        <NextIcon/>
      </button>
    </>
  );
};

export default Pagination;
