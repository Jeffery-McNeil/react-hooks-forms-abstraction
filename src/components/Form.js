import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
  })

  function handleFirstNameChange(event) {
    setFormData({
      ...formData,
      firstName: event.target.value,
    });
  }

  function handleLastNameChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <form>
      <input 
        type="text"
        name="firstName" 
        onChange={handleFirstNameChange} 
        value={formData.firstName} 
      />
      <input
        type="text"
        name="lastName" 
        onChange={handleLastNameChange} 
        value={formData.lastName} 
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
