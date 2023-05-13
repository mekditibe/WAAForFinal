import React from 'react';

export const Pagefour = (props) => {
  const firstname = props.location.state.firstname;
  const lastname = props.location.state.lastname;
  const profession = props.location.state.profession;
  const street = props.location.state.street;
  const city = props.location.state.city;
  const zip = props.location.state.zip;
  const state = props.location.state.state;
  const creditcardnumber = props.location.state.creditcardnumber;
  const type = props.location.state.type;


  let page4 = (
    <div>
      <h3>Thank you for your order!</h3>
      <div>First name: {firstname}</div>
      <div>Last name: {lastname}</div>
      <div>Profession: {profession}</div>
      <div>Street: {street}</div>
      <div>City: {city}</div>
      <div>Zip: {zip}</div>
      <div>State: {state}</div>
      <div>Creditcard number: {creditcardnumber}</div>
      <div>Creditcard type: {type}</div>
    </div>
  );
  return page4;
}