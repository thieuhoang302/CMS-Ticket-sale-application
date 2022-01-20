import React from 'react'
import {
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
    Grid,
    Box,
    Modal,
    Fade,
    Backdrop 
  } from "@mui/material";
import ChartStatic from '../../Common/Component/ChartStatic'
import './Trangchu.scss'

export const TrangChu = () => {
    return (
        <div className='mainTC'>
            <div className='Container'>
            <Typography className="Title-Home">
                Thống kê
            </Typography>
            <Grid   container 
                    justifyContent="space-between">
                <Grid item xs={6}>
                    Doanh thu
                </Grid>
                <Grid item xs={6} sx={{textAlign: 'right'}}>
                    Calendar
                </Grid>
            </Grid>
                <ChartStatic/>    
            <p>Tổng doanh thu theo tuần</p>
            <strong>525.145.000  </strong><span>đồng</span>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={3}>
                    1
                </Grid>
                <Grid item xs={5}>
                    2
                </Grid>
                <Grid item xs={5}>
                    3
                </Grid>
                <Grid item xs={3}>
                    4
                </Grid>
            </Grid>
            </div>
        </div>   
    )
}

export default TrangChu