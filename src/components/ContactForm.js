import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import usePhoneBookStore from '../stores/usePhoneBookStore';

const ContactForm = () => {
    const [name, setName] =useState("")
    const [phoneNumber, setPhoneNumber]=useState("")
    const {addContact}=usePhoneBookStore() //third
    

    const handleAddContact=()=>{
        //연락처 저장 장소->배열, 연락처 추가
        if(!name.trim() ||(!phoneNumber.trim())) return
        addContact(name,phoneNumber) //first 
        
    }

  return (
    <div>
        <div>연락처 추가</div>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2} >
            
            <TextField 
            id="name"
            label="이름"
            value={name} 
            variant="outlined" 
            onChange={(e)=>setName(e.target.value)}
            />
            
            <TextField
            id="Phone-number"
            label="핸드폰번호"
            value={phoneNumber} 
            variant="outlined" 
            onChange={(e)=>setPhoneNumber(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddContact}>submit</Button>
        </Box>
        
    </div>
  )
}

export default ContactForm