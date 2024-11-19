import { MenuItem } from "@mui/material";
import { TiAdjustBrightness } from "react-icons/ti";
import { WiMoonAltWaningCrescent6 } from "react-icons/wi";
import { TbCalendarTime } from "react-icons/tb";
import { IoCalendarNumberSharp } from "react-icons/io5";
import style from './icons.module.css'
import dayjs from "dayjs";

function Icons({setSelectedDate, handleClose}){
  const date = dayjs()
  const handleToday =() =>{
    setSelectedDate(date)
    handleClose(null)
  }

  const handleTomorrow = () =>{
    const res = date.add(1, 'day')
    setSelectedDate(res)
    handleClose(null)
  }

  const handleWeek = () =>{
    const res = date.add(7, 'day')
    setSelectedDate(res)
    handleClose(null)
  }

  const handleMonth = () =>{
    const res = date.add(1, 'month')
    setSelectedDate(res)
    handleClose(null)
  }

    return(
            <MenuItem disableRipple  sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
            "&:focus": {
              backgroundColor: "transparent", 
            },
            "&.Mui-focusVisible": {
              backgroundColor: "transparent",
            },
            "&:active": {
              backgroundColor: "transparent",
            },
          }}>
            <div className={style.iconcontainer }>
            <TiAdjustBrightness onClick={handleToday}/>
          <WiMoonAltWaningCrescent6 onClick={handleTomorrow} />
          <TbCalendarTime onClick={handleWeek}/>
          <IoCalendarNumberSharp onClick={handleMonth}/>
            </div>
          </MenuItem>
    )
}

export default Icons