import React from 'react'
import '../Style/css/buttonOutline.scss'
import '../Style/css/labelcheckbox.scss'
import { ReactComponent as Calendaricon } from '../Style/img/Calendaricom.svg'
import { Box, 
    Typography, 
    FormControl, 
    FormControlLabel, 
    FormGroup, 
    Checkbox,
    Grid,
    RadioGroup,
    Radio,

  } from '@mui/material';
export const FilterCpn = () => {
    return (
        <div>
             <Box
                sx={{
                    margin: 'auto',
                    width: 550,
                }}>
                <Typography sx={{ fontWeight: 'bold', textAlign: 'center', fontSize:'26px', marginBottom: '20px'}}>
                    Lọc vé
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: '600', color: '#1E0D03' }}>
                            Từ ngày
                        </Typography>
                        <div className='CalendarFake'>
                            <a>01/04/2021 <Calendaricon style={{ marginLeft: '8px', marginBottom: '2px'}}/></a>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: '600', color: '#1E0D03' }}>
                            Đến ngày
                        </Typography>
                        <div className='CalendarFake'>
                            <a>01/04/2021 <Calendaricon style={{ marginLeft: '8px', marginBottom: '2px'}}/></a>
                        </div>
                    </Grid>
                </Grid>
                <FormControl component="fieldset" sx={{ marginTop: '30px'}}>
                    <Typography sx={{ color: '#1E0D03', fontWeight: '600'}}>Tình trạng sử dụng</Typography>
                        <RadioGroup sx={{ marginLeft: '10px', width:"100%"}} row name="row-radio-buttons-group">
                            <FormControlLabel style={{marginRight:"20px"}} value="all" control={<Radio sx={{ color: '#27AEF9 !important' }}/>} label="Tất cả" />
                            <FormControlLabel style={{margin:"20px"}} value="used" control={<Radio sx={{ color: '#27AEF9 !important' }}/>} label="Đã sử dụng" />
                            <FormControlLabel style={{margin:"20px"}} value="notused" control={<Radio sx={{ color: '#27AEF9 !important' }}/>} label="Chưa sử dụng" />
                            <FormControlLabel style={{margin:"20px"}} value="expired" control={<Radio sx={{ color: '#27AEF9 !important' }}/>} label="Hết hạn" />
                        </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" sx={{width:"100%"}}>
                <Typography sx={{ color: '#1E0D03', fontWeight: '600'  }}>Cổng Check - in</Typography>
                <FormGroup sx={{ marginLeft: '10px', marginTop: '10px'}} aria-label="position" row>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <FormControlLabel control={<Checkbox sx={{ color: '#27AEF9 !important' }} defaultChecked />} label="Tất cả" />
                            </Grid>
                            <Grid item xs>
                                <FormControlLabel control={<Checkbox sx={{ color: '#27AEF9 !important' }} />} label="Cổng 1" />
                            </Grid>
                            <Grid item xs>
                                <FormControlLabel control={<Checkbox sx={{ color: '#27AEF9 !important' }} />} label="Cổng 2" />
                            </Grid>
                        </Grid>
                </FormGroup>
                <FormGroup sx={{ marginLeft: '10px',  marginTop: '10px' }} aria-label="position" row>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <FormControlLabel control={<Checkbox sx={{ color: '#27AEF9 !important' }} />} label="Cổng 3" />
                        </Grid>
                        <Grid item xs>
                            <FormControlLabel control={<Checkbox sx={{ color: '#27AEF9 !important' }} />} label="Cổng 4" />
                        </Grid>
                        <Grid item xs>
                            <FormControlLabel control={<Checkbox sx={{ color: '#27AEF9 !important' }} />} label="Cổng 5" />
                        </Grid>
                    </Grid>
                </FormGroup> 
                <div style={{textAlign:"center"}}>
                <button className="button-28" style={{ width:"140px", marginTop:"20px", marginBottom: "3px"}} role="button">Lọc</button>
                </div>
                </FormControl>
                
                
                </Box>
        </div>
    )
}
export default FilterCpn
