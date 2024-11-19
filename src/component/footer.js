import { MenuItem } from "@mui/material"
import {Box, Button } from '@mui/material';


function Footer({handleClose}){

    const handleCls = () =>{
        handleClose(null)
    }

    return(
        <MenuItem  disableRipple sx={{
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
           <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
  <Button
    role='button'
    variant="contained"
    sx={{
      backgroundColor: '#1877F2', // Facebook blue color
      '&:hover': {
        backgroundColor: '#165EAB', // Darker blue on hover
      },
      color: 'white', // White text color
    }}
    onClick={handleCls} // Your handler for closing or dismissing
  >
    Close
  </Button>
</Box>

</MenuItem>
    )
}

export default Footer;