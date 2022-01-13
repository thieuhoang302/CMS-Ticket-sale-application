import React, { useState } from "react";
import { filter } from "lodash";
// material
import {
Box,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  Table,
  TableContainer,
  TablePagination,
  styled,
  tableCellClasses,
  Grid
} from "@mui/material";
// components
import HeadTable from "../../Common/Component/HeadTable";
import ToolbarTable from "../../Common/Component/ToolbarTable";
import "./Doisoatve.scss"
import { height } from "@mui/system";

const TABLE_HEAD = [
    { id: "stt", label: "STT", alignRight: false },
    { id: "number", label: "Số Vé", alignRight: false },
    { id: "datesd", label: "Ngày sử dụng", alignRight: false },
    { id: "nameve", label: "Tên loại vé", alignRight: false },
    { id: "cong", label: "Cổng check - in", alignRight: false },
    { id: "doisoat", label: " ", alignRight: false },
  ];
  
  const USERLIST = [
    {
      stt: "1",
      number: "123456789034",
      datesd: "14/04/2021",
      nameve: "Vé cổng",
      cong: "Cổng 1",
      doisoat: "Đã đối soát",
    },
    {
      stt: "2",
      number: "123456789034",
      datesd: "14/04/2021",
      nameve: "Vé cổng",
      cong: "Cổng 1",
      doisoat: "Đã đối soát",
    },
    {
      stt: "3",
      number: "123456789034",
      datesd: "14/04/2021",
      nameve: "Vé cổng",
      cong: "Cổng 1",
      doisoat: "Đã đối soát",
    },
    {
      stt: "4",
      number: "123456789035",
      datesd: "14/04/2021",
      nameve: "Vé cổng",
      cong: "Cổng 1",
      doisoat: "Đã đối soát",
    },
  ];
  
  // ----------------------------------------------------------------------
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: "#F0F3F6",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  
  function descendingComparator(a: any, b: any, orderBy: any) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order: any, orderBy: any) {
    return order === "desc"
      ? (a: any, b: any) => descendingComparator(a, b, orderBy)
      : (a: any, b: any) => -descendingComparator(a, b, orderBy);
  }
  
  function applySortFilter(array: any, comparator: any, query: any) {
    const stabilizedThis = array.map((el: any, index: any) => [el, index]);
    stabilizedThis.sort((a: any, b: any) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(
        array,
        (_fillter) =>
          _fillter.number.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }
    return stabilizedThis.map((el: any) => el[0]);
  }
export const DoiSoatVe = () => {
    const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");

  const [orderBy, setOrderBy] = useState("number");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = ({ event, newPage }: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event: any) => {
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(
    USERLIST,
    getComparator(order, orderBy),
    filterName
  );
    return (
        <div>
            <Grid container>
                <Grid sx={{width: '875px'}}>
                    <div  className='bg' style={{marginRight:"15px"}}>
                    <div className="container-table">
                        <Typography className="Title-QLV">
                            Đối soát vé
                        </Typography>
                            <Box sx={{ width: '100%' }}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={6}>
                                        <ToolbarTable
                                        filterName={filterName}
                                        onFilterName={handleFilterByName}
                                    />
                                    </Grid>
                                    <Grid item xs={6}>
                                    <div style={{ float: 'right'}}>
                                    <button className="button-28" role="button" style={{ marginLeft: '10px'}}>Xuất file (.cvs)</button>
                                    </div>
                                    
                                    </Grid>
                                </Grid>
                            </Box>
                            <TableContainer
                            sx={{
                                justifyContent: "center",
                                marginTop: "20px",
                                marginBottom: "20px",
                            }}
                            >
                            <Table sx={{ overflow: "hidden", borderRadius: "8px" }}>
                                <HeadTable
                                order={order}
                                orderBy={orderBy}
                                headLabel={TABLE_HEAD}
                                rowCount={USERLIST.length}
                                onRequestSort={handleRequestSort}
                                />
                                <TableBody>
                                {filteredUsers
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row: never) => {
                                    const {
                                        stt,
                                        number,
                                        datesd,
                                        nameve,
                                        cong,
                                        doisoat
                                    } = row;

                                    return (
                                        <StyledTableRow hover key={number}>
                                        <StyledTableCell align="left">{stt}</StyledTableCell>
                                        <StyledTableCell
                                            component="th"
                                            scope="row"
                                            padding="none"
                                        >
                                            <Stack direction="row" alignItems="center" spacing={2}>
                                            <Typography variant="subtitle2" noWrap>
                                                {number}
                                            </Typography>
                                            </Stack>
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{datesd}</StyledTableCell>
                                        <StyledTableCell align="left">
                                            {nameve}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{cong}</StyledTableCell>
                                        <StyledTableCell align="right" sx={{ color: "#FD5959"}}>
                                            {doisoat}
                                        </StyledTableCell>
                                        </StyledTableRow>
                                    );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                                </TableBody>
                            </Table>
                            </TableContainer>

                            <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={USERLIST.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </div>
                    </div>
                </Grid>
                <Grid sx={{width: '372px'}}>
                    <div className='bg'>
                      Update late
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default DoiSoatVe;
