import React , { useState } from 'react';

export const Pagethree = (props) => {
  const firstname = props.location.state.firstname;
  const lastname = props.location.state.lastname;
  const profession = props.location.state.profession;
  const street = props.location.state.street;
  const city = props.location.state.city;
  const zip = props.location.state.zip;
  const state = props.location.state.state;
  console.log("state="+state)
  const [creditcardnumber, setCreditcardnumber] = useState("");
  const [type, setType] = useState("");

  const handleOnSubmit = () => {
    props.history.push("/pagefour", {   firstname: firstname, 
                                        lastname : lastname, 
                                        profession : profession,
                                        street : street,
                                        city : city,
                                        zip: zip,
                                        state : state,
                                        creditcardnumber : creditcardnumber,
                                        type : type });
  }

  let page3 = (
    <div>
      <div>First name: {firstname}</div>
      <div>Last name: {lastname}</div>
      <div>Profession: {profession}</div>
      <div>Street: {street}</div>
      <div>City: {city}</div>
      <div>Zip: {zip}</div>
      <div>State: {state}</div>

      <form>
        <h3>Please enter payment information</h3>
        <div>
          Creditcard number
           <input
            type="text"
            placeholder="Credit card number"
            value={creditcardnumber}
            onChange={e => setCreditcardnumber(e.target.value)} />
        </div>
        <div>
        Credit card type
                  <input
                     type="radio"
                     value="Visa"
                     checked={type === "Visa"}
                     onChange={e => setType(e.target.value)}
                  />Visa
                  <input
                     type="radio"
                     value="Mastercard"
                     checked={type === "Mastercard"}
                     onChange={e => setType(e.target.value)}
                  />Mastercard
        </div>
        <button onClick={handleOnSubmit}>Next</button>
      </form>
    </div>
  );
  return page3;
}