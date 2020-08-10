import React from 'react';
import ButtonWellMade from './components/ButtonWellMade';
import ButtonShity from './components/ButtonShity';
import WholeSectionShity from './components/WholeSectionShity';
import ApplyTools from './components/ApplyTools';
import './App.css';

import ImageTest from './components/ImageTest';
// import ConsoleLogTest from './components/ConsoleLogTest';

const Item = props => {
  return <div className="app-item">I am {props.idx}</div>
}

function App() {
  return (
    <>
      <ImageTest/>
      {/* <ConsoleLogTest /> */}
      {/* <ApplyTools />
      <ButtonWellMade />
      <ButtonShity />
      <WholeSectionShity>
        {[0, 1, 2, 3, 4, 5].map(item => <Item key={item} idx={item} />)}
      </WholeSectionShity> */}
    </>
  );
}

export default App;
