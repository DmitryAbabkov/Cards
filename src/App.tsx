import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./Components/Card";

function App() {
  return (
    <div className="container">
        <div className='card__list'>
      <Card children={<img className='card__img' src="https://assets.unenvironment.org/decadeonrestoration/2020-03/nature-3294681_1280%20%281%29.jpg" alt=''/>}
            title={'Card Title'}
            description={'Some quick example text to build on the card title and make up the bulk\nof the card\'s content.'}
            link={'Go somewhere'}
      />
        <Card title={'Card Title'}
              description={'Some quick example text to build on the card title and make up the bulk\nof the card\'s content.'}
              link={'Go somewhere'}
        />
    </div>
    </div>
  );
}

export default App;
