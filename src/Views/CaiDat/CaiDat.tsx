import React, { useState } from "react";
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
  TablePagination,
  styled,
  tableCellClasses,
  Grid,
  Box,
  Modal,
  Fade,
  Backdrop ,
  Button
} from "@mui/material";
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
// components
import HeadTable from "../../Common/Component/HeadTable";
import ToolbarTable from "../../Common/Component/ToolbarTable";
import TableMoreMenu from "../../Common/Component/TableMoreMenu";
import AddTicket from "../../Common/Component/AddTicket";
import UpdateTicket from "../../Common/Component/UpdateTicket";
import '../../Common/Style/css/colorTabs.scss'
// ---------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "stt", label: "STT", alignRight: false },
  { id: "bookcode", label: "Mã gói", alignRight: false },
  { id: "namegoive", label: "Tên gói vé", alignRight: false },
  { id: "datead", label: "Ngày áp dụng", alignRight: false },
  { id: "dateexpired", label: "Ngày hết hạn", alignRight: false },
  { id: "prices", label: "Giá vé (VNĐ/Vé)", alignRight: false },
  { id: "comboprices", label: "Giá Combo (VNĐ/Combo)", alignRight: false },
  { id: "status", label: "Tình trạng", alignRight: false },
  { id: " " },
  
];

const USERLIST = [
  {
    stt:"1",
    bookcode:"ALT20210501",
    namegoive:"Gói gia đình",
    datead:"14/04/2021",
    dateexpired:"14/04/2021",
    prices:"90.000 VNĐ",
    comboprices:"360.000 VNĐ/4 Vé",
    status:"Đang áp dụng",
  },
  {
    stt:"2",
    bookcode:"ALT20210501",
    namegoive:"Gói sự kiện",
    datead:"14/04/2021",
    dateexpired:"14/04/2021",
    prices:"20.000 VNĐ",
    comboprices:" ",
    status:"Tắt",
  }
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


export const CaiDat = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openUD, setOpenUD] = React.useState(false);
  const handleOpenUD = () => setOpenUD(true);
  const handleCloseUD = () => setOpenUD(false);
  
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
    <div className="mainTC">
      <div className="container-table">
      <Typography className="Title-QLV">
        Danh sách gói vé
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
              <div>
                </div>      
                  <button className="button-28" role="button" >Xuất file (.cvs)</button>
                  <button className="button-29" role="button" onClick={handleOpen} style={{ marginLeft: '10px' }}>Thêm gói vé</button>  
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
                        width: 700,
                        bgcolor: 'background.paper',
                        borderRadius: '16px',
                        boxShadow: 24,
                        p: 4,
                        padding: '18px !important',
                    }}>
                      <AddTicket/>
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
              rowCount={USERLIST.length}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {filteredUsers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: never) => {
                  const {
                    stt,
                    bookcode,
                    namegoive,
                    datead,
                    dateexpired,
                    prices,
                    comboprices,
                    status,
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
                      <StyledTableCell align="left">{namegoive}</StyledTableCell>
                      <StyledTableCell align="left">
                        {datead}
                      </StyledTableCell>
                      <StyledTableCell align="left">{dateexpired}</StyledTableCell>
                      <StyledTableCell align="left">{prices}</StyledTableCell>
                      <StyledTableCell align="left">{comboprices}</StyledTableCell>
                      <StyledTableCell align="left">
                        <div className={
                          status === "Đang áp dụng" ? "using" : status === "Tắt" ? "off" : "notthing"
                        }>
                      <li/>{status}
                      </div></StyledTableCell>
                      <StyledTableCell align="right">
                        <Button sx={{ color: '#FF993C !important' }} onClick={handleOpenUD} variant="text"><AutoFixHighOutlinedIcon/>Cập nhập</Button>
                          <Modal
                          open={openUD}
                          onClose={handleCloseUD}
                          closeAfterTransition
                          BackdropComponent={Backdrop}
                          BackdropProps={{
                            timeout: 500,
                          }}
                        >
                          <Fade in={openUD}>
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 700,
                                bgcolor: 'background.paper',
                                borderRadius: '16px',
                                boxShadow: 24,
                                p: 4,
                                padding: '18px !important',
                            }}>
                              <UpdateTicket/>
                            </Box>
                            </Fade>
                          </Modal> 
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
      );
};

export default CaiDat;