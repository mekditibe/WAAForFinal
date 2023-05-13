import React, { useState } from 'react';

export const Pagetwo = (props) => {
  const firstname = props.location.state.firstname;
  const lastname = props.location.state.lastname;
  const profession = props.location.state.profession;
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  console.log(props.location.state);

  const handleOnSubmit = () => {
    props.history.push("/pagethree", {  firstname: firstname, 
                                        lastname : lastname, 
                                        profession : profession,
                                        street : street,
                                        city : city,
                                        zip: zip,
                                        state : state });
  }

  let page2 = (
    <div>
      <div>First name: {firstname}</div>
      <div>Last name: {lastname}</div>
      <div>Profession: {profession}</div>
      <form>
        <h3>Please enter your address</h3>
        <div>
        Street
          <input
          type="text"
          placeholder="Street"
          value={street}
          onChange={e => setStreet(e.target.value)} />
      </div>
        <div>
        City
          <input
          type="text"
          placeholder="City"
          value={city}
          onChange={e => setCity(e.target.value)} />
      </div>
      <div>
        Zip
          <input
          type="text"
          placeholder="Zip"
          value={zip}
          onChange={e => setZip(e.target.value)} />
      </div>
      <div>
        State
          <select
          value={state}
          onChange={e => setState(e.target.value)} >
          <option></option>
          <option>Iowa</option>
          <option>California</option>
          </select>
      </div>
        <button onClick={handleOnSubmit}>Next</button>
      </form>
    </div>
  );
  return page2;
}