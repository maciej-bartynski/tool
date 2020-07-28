import React from 'react';
import ButtonWellMade from './components/ButtonWellMade';
import AppRenderCounter from './components/AppRenderCounter';
import ButtonShity from './components/ButtonShity';
import WholeSectionShity from './components/WholeSectionShity'
import { tool } from './devtools/tool';
import './App.css';

const Item = props => {
  return <div className="app-item">I am {props.idx}</div>
}

function App() {
  return (
    <>
      <button onClick={tool}>apply tool</button>
      <AppRenderCounter />
      <ButtonWellMade />
      <ButtonShity />
      <WholeSectionShity>
        {[0,1,2,3,4,5].map(item => <Item key={item} idx={item}/>)}
      </WholeSectionShity>
    </>
  );
}

export default App;
