import React, { useState } from "react";
import { Menu } from "@mui/material";
import style from './dropDown.module.css'
import Icons from './icons'
import Calendar from './calendar'
import Footer from './footer'
import dayjs from "dayjs";

const DropdownMenu = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [anchorEl, setAnchorEl] = useState(null);


 const date = new Date(selectedDate);
 const day = String(date.getDate()).padStart(2, '0'); // Pad single digits with leading zero
 const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
 const year = date.getFullYear();

 const formattedDate = `${day}/${month}/${year}`

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input type='text' onClick={handleClick} className={style.input} value={formattedDate} readOnly></input>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          "& .MuiPaper-root": {
            width: "300px",
          },
        }}
      >
        <Icons setSelectedDate={setSelectedDate} handleClose={handleClose}></Icons>
        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}></Calendar>
        <Footer handleClose={handleClose}></Footer>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
