import React from 'react';

function eventHamdler(){
  function handleSubmit(e){
    e.preventDefault();
    console.log('You Clicked the submit button');
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <button type='submit'>Submit</button>
    </form>
  );
}

export default eventHamdler;