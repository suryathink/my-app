import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../App.css";
export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    // <div style={{ width: "80px", height: "50px", border: "2px solid red" }}>
    <Box sx={{ minWidth: 80, maxWidth: 150, minHeight: 50, maxHeight: 250 }}>
      <FormControl>
        {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          //   label="Age"
          onChange={handleChange}
          className="minimize-height"
        >
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={1}>One</MenuItem>
          <MenuItem value={6}>Six</MenuItem>
        </Select>
      </FormControl>
    </Box>
    // </div>
  );
}
