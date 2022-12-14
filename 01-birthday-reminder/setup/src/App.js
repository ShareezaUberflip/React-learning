import React, { useState, useEffect } from 'react';
//import data from './data';
import List from './List';
import axios from 'axios';




function App() {
  const [people, setPeople] = useState([]);

  const getPerson = async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setPeople(response.data);
  }

  useEffect(() => {
    getPerson();
  }, []);

  //const [people, setPeople] = useState(data);
  return (
    <>
      <main>
      <section className='container'>
      <h2>{people.length} Person birthday is today:</h2>
      <List people={people} />
      </section>
    </main>
    </>
  )

}

export default App;
