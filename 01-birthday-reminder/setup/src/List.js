import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        //deconstruct 
        const { id, name, email /*age, image*/ } = person;
        return (
          <article key={id} className='person'>
             {/* <img src={image} alt={name} /> */}
            <div>
              <h4>{name}</h4>
              <p>Send a birthday wish to <span style={{color: 'pink' }}>{email}</span></p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
