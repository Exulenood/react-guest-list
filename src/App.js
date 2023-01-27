import React, { useEffect, useState } from 'react';
import AddGuests from './addGuests';

const initGuests = [
  {
    id: 'A',
    firstName: 'GuestA',
    lastName: 'McGuestA',
    attending: false,
  },
];

// async function testUpload() {
//   await fetch(`${'http://localhost:4000'}/guests`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       firstName: 'Aaron',
//       lastName: 'Zivzivicek',
//     }),
//   });
// }

// async function testDownload() {
//   const response = await fetch(`${'http://localhost:4000'}/guests`);
//   const testDLall = await response.json();
//   console.log(JSON.stringify(testDLall));
// }
// checkval,guestId
async function guestUpdate(checkval, guestId) {
  console.log(checkval, guestId);
  await fetch(`${'http://localhost:4000'}/guests/${guestId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ attending: checkval }),
  });
}

// async function testUpdate() {
//   await fetch(`${'http://localhost:4000'}/guests/1`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ attending: true }),
//   });
// }

// async function testErase() {
//   await fetch(`${'http://localhost:4000'}/guests/1`, { method: 'DELETE' });
// }

export default function App() {
  const [guests, setGuests] = useState(initGuests);
  const [refresh, setRefresh] = useState(false);

  // const [checkboxDefault, setcheckboxDefault] = useState(false)
  // const [upDate, setUbdate] = useState(true);

  useEffect(() => {
    async function getGuests() {
      const response = await fetch(`${'http://localhost:4000'}/guests`);
      const guestData = await response.json();
      console.log(JSON.stringify(guestData));
      setGuests(guestData);
    }
    getGuests().catch((error) => console.log(error));
  }, [refresh]);

  return (
    <>
      <AddGuests />
      <h1>GUEST LIST</h1>
      {guests.map((guest) => {
        return (
          <div key={guest.id}>
            <h3>{`${guest.firstName} ${guest.lastName}`}</h3>
            is attending:
            <input
              type="checkbox"
              aria-label={`${guest.firstName} ${guest.lastName} attending:${guest.attending}`}
              checked={guest.attending}
              onChange={(event) =>
                guestUpdate(event.currentTarget.checked, guest.id)
              }
              onClick={() => setRefresh(!refresh)}
            />
            <br />
            <button aria-label={`Remove ${guest.firstName} ${guest.lastName}`}>
              X
            </button>
          </div>
        );
      })}
    </>
  );
}
// const guest = guests[0];

// {guests.map((guest) => {
//   return (
//     <div key={guest.id}>
//       <h3>{`${guest.firstName} ${guest.lastName}`}</h3>
//       is attending: <input type="checkbox"/>
//       <br />
//       <button aria-label={`Remove ${guest.firstName} ${guest.lastName}`}>
//         X
//       </button>{' '}
//     </div>
//   );
// })});
