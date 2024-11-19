import { MenuItem } from "@mui/material";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function Calendar({selectedDate,setSelectedDate}){
    
    const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };
    return(
        <MenuItem disableRipple sx={{
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
            padding: "0px",
          }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={selectedDate}
          onChange={handleDateChange}
          sx={{
            '.MuiDateCalendar-root': {width:'300px', margin: "0px"},
          }}
        />
         
       
       
    </LocalizationProvider>
          </MenuItem>
    )
}

export default Calendar;