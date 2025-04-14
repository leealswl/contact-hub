import React, { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import SearchBar from './components/SearchBar';

function App() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(""); 

    const handleOpenForm = () => {
      setOpen(true);
    };
  
    const handleCloseForm = () => {
      setOpen(false);
    };

    const handleSearchChange = (e) => {
      setSearch(e.target.value);
    };

  return (
    <div className='container'>
    <div className="App">
      <header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <h1 className='main-name' style={{ marginRight: '10px' }}>PHONE BOOK</h1>
        <IconButton onClick={handleOpenForm} color="primary">
          <AddIcon fontSize="large" />
        </IconButton>
      </header>

      <SearchBar search={search} setSearch={handleSearchChange} />

      <div className='main-list'>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={8}>

            <ContactList  search={search}/>

          </Grid>
        </Grid>
      </div>

      <Dialog open={open} onClose={handleCloseForm}>
        <DialogTitle>연락처 추가</DialogTitle>
        <DialogContent>
          <ContactForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} color="primary">
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  );
}

export default App;
