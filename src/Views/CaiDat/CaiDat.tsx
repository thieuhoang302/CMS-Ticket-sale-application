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
  Backdrop ,
  Button
} from "@mui/material";
import { ReactComponent as Updateicon } from '../../Common/Style/img/Update.svg'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Pagination from "../../Common/Component/Pagination";
// components
import HeadTable from "../../Common/Component/HeadTable";
import ToolbarTable from "../../Common/Component/ToolbarTable";
import TableMoreMenu from "../../Common/Component/TableMoreMenu";
import AddTicket from "../../Common/Component/AddTicket";
import UpdateTicket from "../../Common/Component/UpdateTicket";
import { getDataCD } from "../../redux/actions/CaiDatAction";
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
        _fillter.bookcode.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el: any) => el[0]);
}


export const CaiDat = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openUD, setOpenUD] = React.useState(false);
  const handleOpenUD = () => setOpenUD(true);
  const handleCloseUD = () => setOpenUD(false);
  
  const [order, setOrder] = useState("asc");

  const [orderBy, setOrderBy] = useState("bookcode");
  const [filterName, setFilterName] = useState("");;
  const { CD } = useSelector((state: RootState) => state.CD) || [];

  useEffect(() => {
    dispatch(getDataCD());
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
    CD,
    getComparator(order, orderBy),
    filterName
  );

  return (
    <div className="mainTC">
      <div className="container-table">
      <div className="Title-QLV">
        Danh sách gói vé
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
                      <AddTicket handleClose={handleClose}/>
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
              rowCount={CD.length}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {filteredUsers
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
                      <FiberManualRecordIcon sx={{ width: '15px !important', marginRight: '3px'}}/>{status}
                      </div></StyledTableCell>
                      <StyledTableCell align="right">
                        <Button sx={{ color: '#FF993C !important' }} onClick={handleOpenUD} variant="text"><Updateicon/>Cập nhập</Button>
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
                              <UpdateTicket handleCloseUD={handleCloseUD}/>
                            </Box>
                            </Fade>
                          </Modal> 
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

export default CaiDat;