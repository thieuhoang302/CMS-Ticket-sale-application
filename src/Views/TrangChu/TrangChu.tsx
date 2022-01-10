import React from 'react'
import './Trangchu.scss'
import { Box, Typography, FormControl, FormLabel, FormControlLabel, FormGroup, Checkbox } from '@mui/material';

export const TrangChu = () => {
    return (
        <div className='Container'>
             {/* <Box
                sx={{
                    margin: 'auto',
                    width: 600,
                    height: 100,
                    backgroundColor: 'white',
                }}>
                <Typography sx={{ fontWeight: 'bold', textAlign: 'center', fontSize:'24px' }}>
                    Lọc vé
                </Typography>
                <FormControl component="fieldset">
                <Typography sx={{ color: '#1E0D03',  }}>Cổng Check - in</Typography>
                <FormGroup className='CheckBox' aria-label="position" row>
                    <FormControlLabel control={<Checkbox sx={{background: '#27AEF9'}} defaultChecked />} label="Tất cả" />
                    <FormControlLabel control={<Checkbox  />} label="Cổng 1" />
                    <FormControlLabel control={<Checkbox  />} label="Cổng 2" />
                </FormGroup>
                <FormGroup className='CheckBox' aria-label="position" row>
                    <FormControlLabel control={<Checkbox  />} label="Cổng 3" />
                    <FormControlLabel control={<Checkbox  />} label="Cổng 5" />
                    <FormControlLabel control={<Checkbox  />} label="Cổng 6" />
                </FormGroup>
                </FormControl>
                </Box> */}
                
        </div>
    )
}

export default TrangChu