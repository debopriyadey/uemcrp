import * as React from "react";
import { Typography } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Root, classes } from "./styles";

const CustomDateRangePicker = () => {
  const [values, setValues] = React.useState();

  function useWindowWidth() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  
    React.useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowWidth;
  }

  return (
    <Root className={classes.Root}>
      <Typography textAlign="center" variant="h5">
        Calendar
      </Typography>
      <div className={classes.calendarWrapper}>
        <Calendar
          onChange={setValues}
          value={values}
          showDoubleView = {(useWindowWidth() > 600)? true : false} 
          calendarType="US"
          selectRange
        />
      </div>
    </Root>
  );
};

export default CustomDateRangePicker;