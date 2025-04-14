import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div>
      <TextField
        label="검색"
        variant="outlined"
        value={search}
        onChange={setSearch}
        style={{ width: '300px' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          style: { backgroundColor: '#ffffff' }
        }}
      />
    </div>
  );
};

export default SearchBar;
