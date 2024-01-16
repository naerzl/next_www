"use client"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// 搜索跳转
function handleSearch(selectedOption: { label: string; key: string } | null) {
  if (selectedOption) {
    const { key } = selectedOption;
    const searchUrl = `/documentCenter/doc?key=${key}`;
    window.open(searchUrl);
  }
}
export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={suggestions}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
      onChange={(event, value) => handleSearch(value)}
    />
  );
}

const suggestions = [
  { label: "提示1", key: "engineering-structure", },
  { label: "提示2", key: "engineering-structure", },
  { label: "提示3", key: "engineering-structure", },
  { label: "提示4", key: "engineering-structure", },
  { label: "提示5", key: "engineering-structure", },
  { label: "提示6", key: "engineering-structure", },
  { label: "提示7", key: "engineering-structure", }
];