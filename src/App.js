import React from 'react';
import ButtonWellMade from './components/ButtonWellMade';
import ButtonShity from './components/ButtonShity';
import WholeSectionShity from './components/WholeSectionShity';
import ApplyTools from './components/ApplyTools';
import './devtools/console';
import './App.css';

const Item = props => {
  return <div className="app-item">I am {props.idx}</div>
}

window.isConsoleOpened = false;

function App() {
  return (
    <>
      <div id="messenger" class="messenger">Otworzyłeś/aś już swoje devtoolsy?</div>
      <ApplyTools />
      <ButtonWellMade />
      <ButtonShity />
      <WholeSectionShity>
        {[0, 1, 2, 3, 4, 5].map(item => <Item key={item} idx={item} />)}
      </WholeSectionShity>
    </>
  );
}

export default App;
