import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' })
  const [people, setPeople] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', email: '', age: '' });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  return <>

    <section>
      <h1>Controlled Form</h1>
      <form className='form'>
        <div className='form-control'>
          <label htmlFor='first-name'> First Name: </label>
          <input type='text' value={person.firstName} name='firstName' id='first-name' onChange={handleChange} />
        </div>
        <div className='form-control'>
          <label htmlFor='email'> Email: </label>
          <input type='email' value={person.email} name='email' id='email' onChange={handleChange} />
        </div>
        <div className='form-control'>
          <label htmlFor='age'> Age: </label>
          <input type='number' value={person.age} name='age' id='age' onChange={handleChange} />
        </div>
        <button type='submit' onClick={handleSubmit}>Add person</button>
      </form>
      {people.map((person, index) => {
        return (
          <div className='item' key={index}>
            <p>{person.firstName}</p>
            <p>{person.age}</p>
            <p>{person.email}</p>
          </div>
        );
      })
      }
    </section>
  </>;
};

export default ControlledInputs;
