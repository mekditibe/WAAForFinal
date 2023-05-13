import React, { useState } from 'react';

export const Pageone = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [profession, setProfession] = useState("");

  const handleOnSubmit = () => {
    props.history.push("/pagetwo", { firstname: firstname, lastname: lastname, profession: profession });
  }

  let page1 = (
    <form>
      <h3>Please enter your personal information</h3>
      <div>
        Firstname
          <input
          type="text"
          placeholder="First name"
          value={firstname}
          onChange={e => setFirstname(e.target.value)} />
      </div>
      <div>
        Lastname
          <input
          type="text"
          placeholder="Last name"
          value={lastname}
          onChange={e => setLastname(e.target.value)} />
      </div>
      <div>
        Profession
          <select
          value={profession}
          onChange={e => setProfession(e.target.value)} >
          <option></option>
          <option>Programmer</option>
          <option>Manager</option>
          <option>Tester</option>
        </select>
      </div>
      <button onClick={handleOnSubmit}>Next</button>
    </form>
  );
  return page1;
}