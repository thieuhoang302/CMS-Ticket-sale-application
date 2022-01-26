/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import '../Style/css/buttonOutline.scss'
import { ReactComponent as Calendaricon } from '../Style/img/Calendaricom.svg';
import { ReactComponent as Clockicon } from '../Style/img/Clockicon.svg';
import { Box, 
    Typography, 
    FormControl, 
    FormLabel, 
    FormControlLabel, 
    FormGroup, 
    Checkbox,
    Grid,
    RadioGroup,
    Radio,
    TextField,
  } from '@mui/material';

interface CloseModal {
    handleCloseUD?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
export const UpdateTicket = ({handleCloseUD}:CloseModal) => {

    return (
        <div>
             <Box
                sx={{
                    margin: 'auto',
                    width: 650,
                }}>
                <Typography sx={{ fontWeight: 'bold', textAlign: 'center', fontSize:'26px', marginBottom: '20px'}}>
                    Thêm gói vé
                </Typography>
                <div style={{ marginBottom: '10px' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: '600', fontSize:'16px'}}>
                            Mã sự kiện<span style={{ color: 'red' }}> *</span>
                        </Typography>
                        <input style={{
                                width: '80%',
                                borderRadius: '8px',
                                color: '#A5A8B1',
                                marginTop: '5px',
                        }} type="text" className="form-control" />
                    </Grid>
                    <Grid item xs={6}>
                    <Typography sx={{ fontWeight: '600', fontSize:'16px'}}>
                            Tên sự kiện<span style={{ color: 'red' }}> *</span>
                        </Typography>
                        <input style={{
                                width: '100%',
                                borderRadius: '8px',
                                color: '#A5A8B1',
                                marginTop: '5px',
                        }} type="text" className="form-control"/>
                    </Grid>
                </Grid>    
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Typography sx={{ fontWeight: '600', fontSize:'16px'}}>
                                Ngày áp dụng
                            </Typography>
                            <Box sx={{display: 'flex'}}>
                                <div className='CalendarN'>
                                    <a>01/04/2021 <Calendaricon style={{ marginLeft: '5px', marginBottom: '2px'}}/></a>
                                </div>
                                <div className='CalendarN' style={{ marginLeft: '10px'}}>
                                    <a>08:00:00 <Clockicon style={{ marginLeft: '10px', marginBottom: '2px'}}/></a>
                                </div>
                            </Box>

                        </Grid>
                        <Grid item xs={6}>
                            <Typography sx={{ fontWeight: '600', fontSize:'16px'}}>
                                Ngày hết hạn
                            </Typography>
                            <Box sx={{display: 'flex'}}>
                                <div className='CalendarN'>
                                    <a>01/04/2021 <Calendaricon style={{ marginLeft: '5px', marginBottom: '2px'}}/></a>
                                </div>
                                <div className='CalendarN' style={{ marginLeft: '10px'}}>
                                    <a>08:00:00 <Clockicon style={{ marginLeft: '10px', marginBottom: '2px'}}/></a>
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </div> 
                <div style={{ marginBottom: '10px' }}>
                <Typography sx={{ fontWeight: '600', fontSize:'16px'}}>
                    Giá vé áp dụng
                </Typography>
                <Box sx={{ display: 'grid', marginLeft: '10px', marginTop: '5px'}}>
                    <div style={{ marginBottom: '10px', display: 'flex' }}>
                        <FormControlLabel  control={<Checkbox sx={{ color: '#27AEF9 !important' }}  />} label="Vé lẻ (vnđ/vé) với giá" />
                        <input style={{
                             width: '25%',
                             borderRadius: '8px',
                             color: '#A5A8B1',
                        }}type="text" className="form-control" placeholder="Giá vé" disabled/><span style={{ marginTop: '5px', marginLeft: '5px'}}>/ vé</span>
                    </div>
                    <div style={{ marginBottom: '15px', display: 'flex' }}>
                        <FormControlLabel  control={<Checkbox sx={{ color: '#27AEF9 !important' }}  />} label="Combo vé với giá" />
                        <input style={{
                             width: '25%',
                             borderRadius: '8px',
                             color: '#A5A8B1',
                        }}type="text" className="form-control" placeholder="Giá vé" disabled/><span style={{margin: '5px 5px 0px 5px'}}>/</span>
                        <input style={{
                             width: '13%',
                             borderRadius: '8px',
                             color: '#A5A8B1',
                        }}type="text" className="form-control" placeholder="Giá vé" disabled/><span style={{ marginTop: '5px', marginLeft: '5px'}}>vé</span>
                    </div>  
                </Box>
                <div>
                    <Typography sx={{ fontWeight: '600', fontSize:'16px'}}>
                        Tình trạng
                    </Typography>
                    <select style={{
                        width: '35%',
                        borderRadius: '8px',
                        margin: '5px 0px 10px 0px'
                    }} className="form-select" id="specificSizeSelect">
                        <option selected>Đang áp dụng</option>
                        <option value="1">Tắt</option>
                    </select>
                    <span style={{ color: 'red', marginRight:'5px' }}>*</span><a style={{ fontStyle: 'italic', fontWeight: '200'}}>là thông tin bắt buộc</a>
                </div>
                    
                </div>           
                <div style={{textAlign:"center"}}>
                <button className="button-28" onClick={handleCloseUD} style={{ width:"140px", marginTop:"20px", marginBottom: "3px", marginRight: "20px"}} role="button">Hủy</button>
                <button className="button-29" style={{ width:"140px", marginTop:"20px", marginBottom: "3px"}} role="button">Lưu</button>
                </div>
                
                
            </Box>
        </div>
    )
}
export default UpdateTicket
