import React from 'react';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import usePhoneBookStore from '../stores/usePhoneBookStore';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const ContactList = ({ search }) => {
    const {phoneBook, removeContact } =usePhoneBookStore()
    // console.log("폰북",phoneBook)

    const filteredContacts = phoneBook.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <Paper elevation={3} style={{ padding: '16px', margin: '16px auto', maxWidth: '600px', minWidth:'280px',minHeight: '300px',height: 'auto', overflowY: 'auto'}}>
      <Typography variant="h6" component="div" gutterBottom>
        LIST
      </Typography>
      {filteredContacts.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          검색내용이 없습니다.
        </Typography>
      ) : (
        filteredContacts.map((item) => (
          <Box
            key={item.id}
            marginBottom={1}
            padding={1}
            borderBottom="1px solid #ccc"
            display="flex"
            flexDirection="row" // row로 지정
            alignItems="center"
          >
            <PersonIcon style={{ fontSize: '32px',marginRight: '20px' }} />
            <div>
            <Typography variant="body1">
               <h3>{item.name}</h3>
            </Typography>
            <Typography variant="body2">
             {item.phoneNumber}
            </Typography>
            </div>
            <IconButton
              onClick={() => removeContact(item.id)}
              aria-label="delete"
              style={{ marginLeft: 'auto' }}  // 오른쪽 끝으로 이동
            >
              <DeleteIcon style={{ color: 'gray' }} />
            </IconButton>
          </Box>
        ))
      )}
    </Paper>
  );
};


export default ContactList

