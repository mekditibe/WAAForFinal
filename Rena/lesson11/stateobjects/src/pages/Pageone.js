import React, { useState } from 'react';

export const Pageone = (props) => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    address: "",
    creditcard: ""
  })

  const handleOnSubmit = () => {
    props.history.push("/pagetwo", {user :user});
  }

  const handleFieldChange = (e) => {
   setUser({...user,[e.target.name]: e.target.value });
  }

  let page1 = (
    <form>
      <h3>Page 1</h3>
      <div>
        Firstname
          <input
          type="text"
          placeholder="First name"
          name="firstname"
          onChange={handleFieldChange} />
      </div>
      <div>
        Lastname
          <input
          type="text"
          placeholder="Last name"
          name="lastname"
          onChange={handleFieldChange} />
      </div>
      <button onClick={handleOnSubmit}>Next</button>
    </form>
    
  );
  return page1;
}