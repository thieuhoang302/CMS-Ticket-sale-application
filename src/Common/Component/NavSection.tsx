import Avatar from '@mui/material/Avatar';
import AVT from '../Style/img/avatar.png';
import Logo from '../Style/img/logo-insight.png'
import '../Style/css/navHeader.scss'
import TrangChu from '../../Views/TrangChu/TrangChu';
import QuanLyVe  from '../../Views/QuanlyVe/QuanLyVe';
import DoiSoatVe from '../../Views/DoiSoatVe/DoiSoatVe';
import CaiDat from '../../Views/CaiDat/CaiDat';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import SearchBar from "material-ui-search-bar";
import React, { useState } from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import "react-pro-sidebar/dist/css/styles.css";


import { Grid } from "@mui/material";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const NavSection = () => {
  
  const [isClicked, setIsClicked] = useState("home");

  const [showHome, setShowHome] = useState(true);
  const [showManage, setShowManage] = useState(false);
  const [showControl, setShowControl] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  
  const [showProfile, setShowProfile] = useState(false);

  const showRight = (element: string) => {
    if (element === "home") {
      setShowHome(true);
      setShowManage(false);
      setShowControl(false);
      setShowSetting(false);
      
      setIsClicked("home");
      
      setShowProfile(false);
    } else if (element === "manage") {
      setShowHome(false);
      setShowManage(true);
      setShowControl(false);
      setShowSetting(false);

      setIsClicked("manage");
      
      setShowProfile(false);
    } else if (element === "control") {
      setShowHome(false);
      setShowManage(false);
      setShowControl(true);
      setShowSetting(false);
      
      setIsClicked("control");
      
      setShowProfile(false);
    } else if (element === "setting") {
      setShowHome(false);
      setShowManage(false);
      setShowControl(false);
      setShowSetting(true);
      
      setIsClicked("setting");
      
      setShowProfile(false);
    } else if (element === "profile") {
     
      setShowHome(false);
      setShowManage(false);
      setShowControl(false);
      setShowSetting(false);
      setIsClicked("");
      setShowProfile(true);
    }
  };
  


  return (
      <div className='Acc-noti-mail'>
        <div className="header">
          <Grid container>
            <Grid item xs={4}> <SearchBar className='search-bar'/></Grid>
              <Grid item xs={8} style={{display: "flex", justifyContent: "right", alignItems: "center"}}>
                  <EmailOutlinedIcon style={{margin: "10px"}}/>
                  <NotificationsNoneOutlinedIcon style={{margin: "10px"}}/>
                  <Avatar sx={{height: '36px', width: '36px', marginLeft: "10px"}} src={AVT} />
              </Grid>
            </Grid>
        </div>
        <Grid container height={"100%"}>
          <Grid item xs={1}>                  
              <div className="rightSide">
                <div id="subHeader">
                  <ProSidebar>
                  <SidebarHeader className="Logoheader">
                  <div className="Logo">
                    <img
                      src={Logo}
                      alt="Logo"
                    />
                  </div>
                </SidebarHeader>
                    <SidebarContent style={{ marginTop: "30px" }}>
                      <Menu iconShape="square">
                        <MenuItem
                          active={true}
                          icon={
                            <HomeOutlinedIcon
                              className={
                                isClicked === "home" ? "iconClicked" : "noClick"
                              }
                            />
                          }
                          onClick={() => showRight("home")}
                          className={isClicked === "home" ? "clicked" : "noClick"}
                        >
                          Trang chủ
                        </MenuItem>
                        <div
                          className={
                            isClicked === "manage" ? "clicked" : "noClick"
                          }
                        >
                          <MenuItem
                            id="manage"
                            icon={
                              <ConfirmationNumberOutlinedIcon
                                className={
                                  isClicked === "manage"
                                    ? "iconClicked"
                                    : "noClick"
                                }
                              />
                            }
                            onClick={() => showRight("manage")} 
                            style={{ marginBottom: "0px !important" }}
                          >
                            Quản lý vé
                          </MenuItem>
                          
                        </div>

                        <MenuItem
                          icon={
                            <ReceiptOutlinedIcon
                              className={
                                isClicked === "control" ? "iconClicked" : "noClick"
                              }
                            />
                          }
                          onClick={() => showRight("control")}         
                          className={isClicked === "control" ? "clicked" : "noClick"}
                        >
                          Đối soát vé
                        </MenuItem>
                        <MenuItem
                          icon={
                            <SettingsOutlinedIcon
                              className={
                                isClicked === "setting" ? "iconClicked" : "noClick"
                              }
                            />
                          }
                          onClick={() => showRight("setting")}         
                          className={isClicked === "setting" ? "clicked" : "noClick"}
                        >
                          Cài đặt
                        </MenuItem>   
                      </Menu>
                    </SidebarContent>
                  </ProSidebar>
                </div>
              </div>
          </Grid>
          <Grid item xs={11} mt={10}>
            <div className="ChildComponent">
              {showHome && <TrangChu/>}
              {showManage && <QuanLyVe/>}
              {showControl && <DoiSoatVe />}
              {showSetting && <CaiDat/>}
              {showProfile && <></>}
            </div>
          </Grid>
        </Grid>
      </div>
  )
}

export default NavSection