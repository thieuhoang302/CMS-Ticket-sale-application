import React from 'react'
import {
    Grid,
    Box,
    Typography
  } from "@mui/material";
import ChartStatic from '../../Common/Component/ChartStatic';
import CalendarPicker from '../../Common/Component/CalendarPicker';
import DonutPie from '../../Common/Component/DonutPie';

import { ReactComponent as Calendaricon } from '../../Common/Style/img/Calendaricom.svg';

import './Trangchu.scss'

export const TrangChu = () => {
    const DATACHART:any = [145, 170, 178, 231, 212, 198 , 188];
    const DATA1:any = [56024 ,13568];
    const DATA2:any = [30256 ,28302];
    return (
        <div className='mainHome'>
            <div className='Container'>
            <div className="Title-Home">
                Thống kê
            </div>
            <Grid   container 
                    justifyContent="space-between"
                    display="flex">
                <Grid >
                    <p className="doanhthu">Doanh thu</p>
                </Grid>
                <Grid >
                    <div className='CalendarFake'> 
                        <a>Tháng 4, 2021 <Calendaricon style={{ marginLeft: '8px', marginBottom: '2px'}}/></a>
                    </div>
                </Grid>
            </Grid>
                <ChartStatic dataChart={DATACHART}/>    
            <p className=" titledoanhthu">Tổng doanh thu theo tuần</p>
            <div style={{ display: 'flex'}}>
                <p className="cost">525.145.000  </p><span className='dong'>đồng</span>
            </div>
            
            <Grid container spacing={2} columns={16}>
                <Grid item xs={2}>
                    <div className='CalendarFake' style={{ marginTop: '2rem'}}>
                        <a>Tháng 4, 2021 <Calendaricon style={{ marginLeft: '8px', marginBottom: '2px'}}/></a>
                    </div>
                    {/* <CalendarPicker/> */}
                </Grid>
                <Grid item xs={14}>
                    <div className='Donutpie'>
                        <Box>
                            <Typography className='DonutDec'>Gói gia đình</Typography>
                            <DonutPie data={DATA1}/>
                        </Box>
                        <Box>
                            <Typography className='DonutDec'>Gói sự kiện</Typography>
                            <DonutPie data={DATA2}/>
                        </Box>
          
                        <div className='Donuttile'>
                            <Box sx={{ display: 'flex', marginTop: '60px'}}>
                                <div className='colorTT' style={{ background: '#4F75FF'}}></div><span>Vé đã sử dụng</span>
                            </Box>
                            <Box sx={{ display: 'flex', marginTop: '20px'}}>
                                <div className='colorTT' style={{ background: '#FF8A48'}}></div><span>Vé chưa sử dụng</span>
                            </Box>      
                        </div>
                    </div>            
                </Grid>
            </Grid>
            </div>
        </div>   
    )
}

export default TrangChu