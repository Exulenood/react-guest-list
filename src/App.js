import React, { useState } from 'react';

const guest = [
  {
    id: '01',
    firstName: 'Pepel',
    lastName: 'Bair',
    attending: false,
  },
];

async function testUpload() {
  await fetch(`${'http://localhost:4000'}/guests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: 'Aaron',
      lastName: 'Zivzivicek',
    }),
  });
}

async function testDownload() {
  const response = await fetch(`${'http://localhost:4000'}/guests`);
  const testDLall = await response.json();
  console.log(JSON.stringify(testDLall));
}

export default function App() {
  return (
    <div>
      {/* <label>
        First Name:
        <input type="text" value />
      </label> */}
      <button onClick={testUpload}>TESTUPLOAD</button>
      <button onClick={testDownload}>TESTDOWNLOAD</button>
    </div>
  );
}
