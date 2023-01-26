import { useState } from 'react';

export default function AddGuests() {
  const addGuestTemplate = [
    {
      id: '',
      firstName: '',
      lastName: '',
      attending: false,
    },
  ];

  const [addNewGuest, setAddNewGuest] = useState(addGuestTemplate);

  async function addGuestPass(key) {
    if (key === 'Enter') {
      await fetch(`${'http://localhost:4000'}/guests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: addNewGuest[0].firstName,
          lastName: addNewGuest[0].lastName,
        }),
      });
      const bypass = [...addNewGuest];
      bypass[0].firstName = '';
      bypass[0].lastName = '';
      setAddNewGuest(bypass);
    }
  }
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

  return (
    <>
      <label htmlFor="firstN">First name:</label>
      <input
        id="firstN"
        value={addNewGuest[0].firstName}
        onChange={(event) => {
          const bypass = [...addNewGuest];
          bypass[0].firstName = event.target.value;
          setAddNewGuest(bypass);
        }}
      />
      <br />
      <label htmlFor="lastN">Last name:</label>
      <input
        id="lastN"
        value={addNewGuest[0].lastName}
        onChange={(event) => {
          const bypass = [...addNewGuest];
          bypass[0].lastName = event.target.value;
          setAddNewGuest(bypass);
        }}
        onKeyDown={(event) => addGuestPass(event.key)}
      />
      <button onClick={() => console.log(JSON.stringify(addNewGuest))}>
        TestJSON
      </button>
    </>
  );
}
