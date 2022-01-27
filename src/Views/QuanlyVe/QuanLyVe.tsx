import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { filter } from "lodash";
// material
import {
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
  Box,
  Modal,
  Fade,
  Backdrop 
} from "@mui/material";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
// components
import HeadTable from "../../Common/Component/HeadTable";
import ToolbarTable from "../../Common/Component/ToolbarTable";
import TableMoreMenu from "../../Common/Component/TableMoreMenu";
import FilterCpn from "../../Common/Component/FilterCpn";
import Pagination from "../../Common/Component/Pagination";
import { getDataQLV } from "../../redux/actions/QLVAction";
import './Quanlyve.scss'
import '../../Common/Style/css/colorTabs.scss'

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "stt", label: "STT", alignRight: false },
  { id: "bookcode", label: "Booking Code", alignRight: false },
  { id: "number", label: "Số Vé", alignRight: false },
  { id: "event", label: "Tên sự kiện", alignRight: false },
  { id: "status", label: "Tình trạng sử dụng", alignRight: false },
  { id: "datesd", label: "Ngày sử dụng", alignRight: false },
  { id: "datexv", label: "Ngày xuất vé", alignRight: false },
  { id: "cong", label: "Cổng check - in", alignRight: false },
  { id: "" },
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


export const QuanLyVe = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [order, setOrder] = useState("asc");

  const [orderBy, setOrderBy] = useState("number");
  const [filterName, setFilterName] = useState("");
  const { QLV } = useSelector((state: RootState) => state.QLV) || [];

useEffect(() => {
  dispatch(getDataQLV());
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
    QLV,
    getComparator(order, orderBy),
    filterName
  );

  return (
    <div className="mainTC">
      <div className="container-table">
      <div className="Title-QLV">
        Danh sách vé
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
              <div>
                </div>    
                  <button className="button-28" role="button" onClick={handleOpen}><FilterAltOutlinedIcon/>Lọc vé</button>    
                  <button className="button-28" role="button" style={{ marginLeft: '10px'}}>Xuất file (.cvs)</button>
                </div>
                
                  <Modal
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        bgcolor: 'background.paper',
                        borderRadius: '16px',
                        boxShadow: 24,
                        p: 4,
                        padding: '18px !important',
                    }}>
                      <FilterCpn/>
                    </Box>
                  </Fade>
                </Modal>  
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
              rowCount={QLV.length}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {filteredUsers
                .map((row: any) => {
                  const {
                    stt,
                    bookcode,
                    number,
                    event,
                    status,
                    datesd,
                    datexv,
                    cong,
                  } = row; 

                  return (
                    <StyledTableRow hover key={bookcode}>
                      <StyledTableCell align="left">{stt}</StyledTableCell>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        padding="none"
                      >
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Typography variant="subtitle2" noWrap>
                            {bookcode}
                          </Typography>
                        </Stack>
                      </StyledTableCell>
                      <StyledTableCell align="left">{number}</StyledTableCell>
                      <StyledTableCell align="left">
                        {event}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <div className={
                          status === "Đã sử dụng" ? "used" : status === "Chưa sử dụng" ? "notused" : status === "Hết hạn" ? "expired" : "notthing"
                        }>
                      <FiberManualRecordIcon sx={{ width: '15px !important', marginRight: '3px'}}/>{status}
                      </div></StyledTableCell>
                      <StyledTableCell align="left">{datesd}</StyledTableCell>
                      <StyledTableCell align="left">{datexv}</StyledTableCell>
                      <StyledTableCell align="left">{cong}</StyledTableCell>
                      <StyledTableCell align="right">
                        {/* <TableMoreMenu /> */}
                      </StyledTableCell>
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
      );
};

export default QuanLyVe;

