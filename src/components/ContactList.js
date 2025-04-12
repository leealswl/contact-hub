import React from 'react'
import usePhoneBookStore from '../stores/usePhoneBookStore'

const ContactList = () => {
    const {phoneBook} =usePhoneBookStore()
    console.log("폰북",phoneBook)
  return (
    <div>
        <div >연락처 리스트</div>
        {phoneBook.map((item)=>(
            <div key={item.id}>
            <p>이름 : {item.name} 번호 : {item.phoneNumber}</p>
            
            </div>

    ))}
    </div>
  )
}

export default ContactList

