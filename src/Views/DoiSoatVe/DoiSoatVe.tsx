import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { filter } from "lodash";
// material
import {
Box,
  Stack,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  Table,
  TableContainer,
  styled,
  tableCellClasses,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@mui/material";
// components
import HeadTable from "../../Common/Component/HeadTable";
import ToolbarTable from "../../Common/Component/ToolbarTable";
import Pagination from "../../Common/Component/Pagination";
import { ReactComponent as Calendaricon } from '../../Common/Style/img/Calendaricon.svg';
import { ReactComponent as CalendariconDead } from '../../Common/Style/img/CalendariconDead.svg';
import { getDataDSV } from "../../redux/actions/DSVAction";
import "./Doisoatve.scss"
import '../../Common/Style/css/labelcheckbox.scss'
import { height } from "@mui/system";

const TABLE_HEAD = [
    { id: "stt", label: "STT", alignRight: false },
    { id: "number", label: "Số Vé", alignRight: false },
    { id: "datesd", label: "Ngày sử dụng", alignRight: false },
    { id: "nameve", label: "Tên loại vé", alignRight: false },
    { id: "cong", label: "Cổng check - in", alignRight: false },
    { id: "doisoat", label: " ", alignRight: false },
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
          _fillter.number.toString().indexOf(query.toString()) !== -1
      );
    }
    return stabilizedThis.map((el: any) => el[0]);
  }
export const DoiSoatVe = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("asc");

  const [orderBy, setOrderBy] = useState("number");
  const [filterName, setFilterName] = useState("");
  const { DSV } = useSelector((state: RootState) => state.DSV) || [];

  useEffect(() => {
    dispatch(getDataDSV());
  }, []);

  const handleRequestSort = (event: any, property: any) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleFilterByName = (event: any) => {
    setFilterName(event.target.value);
  };


  const filteredUsers = applySortFilter(
    DSV,
    getComparator(order, orderBy),
    filterName
  );
    return (
        <div>
            <Grid container>
                <Grid sx={{width: '875px'}}>
                    <div  className='bg' style={{marginRight:"15px"}}>
                    <div className="container-table">
                        <div className="Title-QLV">
                            Đối soát vé
                        </div>
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
                                rowCount={DSV.length}
                                onRequestSort={handleRequestSort}
                                />
                                <TableBody>
                                {filteredUsers
                                    .map((row: any) => {
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
                                        <StyledTableCell align="right">
                                        <div className={
                                            doisoat === "Chưa đối soát" ? "uncontested" : doisoat === "Đã đối soát" ? "Checked" : "notthing"
                                          }>
                                        {doisoat}
                                        </div></StyledTableCell>
                                        </StyledTableRow>
                                    );
                                    })}
                                </TableBody>
                            </Table>
                            </TableContainer>

                            <div style={{ justifyContent: 'center', display: 'flex'}}>
                              <Pagination/>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid sx={{width: '372px'}}>
                    <div className='bg'>
                        <div className="filter">
                        <Typography sx={{ fontWeight: 'bold', paddingTop: '10px', fontSize: '24px', paddingBottom: '20px'}}>
                            Lọc vé
                        </Typography>
                          <Grid container spacing={1.5} columns={16}>
                            <Grid item xs={7}>
                            <p style={{ fontWeight: '600'}}>Tình trạng đối soát</p>
                            </Grid>
                            <Grid item xs={9}>
                              <RadioGroup sx={{ marginLeft: '10px', width:"100%"}} row name="row-radio-buttons-group">
                                <FormControlLabel style={{marginBottom: '10px'}} value="all" control={<Radio sx={{ color: '#27AEF9 !important' }}/>} label="Tất cả" />
                                <FormControlLabel style={{marginBottom: '10px'}} value="used" control={<Radio sx={{ color: '#27AEF9 !important' }}/>} label="Đã đối soát" />
                                <FormControlLabel style={{marginBottom: '20px'}} value="notused" control={<Radio sx={{ color: '#27AEF9 !important' }}/>} label="Chưa đối soát" />
                              </RadioGroup>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1.5} columns={16}>
                            <Grid item xs={7}>
                              <p style={{ fontWeight: '600'}}> Loại vé</p>
                            </Grid>
                            <Grid item xs={9}>
                              Vé cổng
                            </Grid>
                        </Grid>
                        <Grid container spacing={1.5} columns={16}>
                            <Grid item xs={7}>
                            <p style={{ fontWeight: '600'}}>Từ ngày</p>
                            </Grid>
                            <Grid item xs={9}>
                              <div className='CalendarFake1' style={{ background: '#E0E0E0'}}>
                                <a>01/05/2021 <CalendariconDead style={{ marginLeft: '32px', marginBottom: '2px'}}/></a>
                              </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1.5} columns={16} sx={{ marginTop: '0.7rem'}}>
                            <Grid item xs={7}>
                            <p style={{ fontWeight: '600'}}>Đến ngày</p>
                            </Grid>
                            <Grid item xs={9}>
                              <div className='CalendarFake1' style={{ background: '#F7F8FB'}}>
                                <a>dd/mm/yy <Calendaricon style={{ marginLeft: '38px', marginBottom: '2px'}}/></a>
                              </div>
                            </Grid>
                        </Grid>
                        <div style={{textAlign:"center"}}>
                        <button className="button-28" style={{ width:"140px", marginTop:"20px"}} role="button">Lọc</button>
                        </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default DoiSoatVe;
