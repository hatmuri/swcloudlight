// GuestbookWrite.js
import React, { useState } from 'react';
import axios from 'axios';

const GuestbookWrite = () => {
  
  return (
    <div>
      <h2>Write to Guestbook</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Phone Number:</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />

        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GuestbookWrite;
