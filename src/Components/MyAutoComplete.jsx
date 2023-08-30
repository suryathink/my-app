import * as React from "react";
import TextField from "@mui/material/TextField";
import { Autocomplete, InputAdornment } from "@mui/material";
import BasicSelect from "./Select";
import "../App.css";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export default function ComboBox() {
  return (
    <Autocomplete
      style={{ margin: "20px 20px 20px" }}
      disablePortal
      disableClearable
      forcePopupIcon={false}
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 600, maxHeight: 300 }}
      renderInput={(params) => (
        <TextField
          // sx={{ width: 500 }}
          {...params}
          label="Movie"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                {/* <AccountBalanceIcon /> */}
                <BasicSelect />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
}

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
];
