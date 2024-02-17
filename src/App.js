import React from 'react';
import './App.css';
import { UserInputComponent } from './components/input/UserInputComponent.jsx';
import { ResultComponent } from './components/result/ResultComponent.jsx';
import {ContextProvider} from './store/BillContext.jsx'

class App extends React.Component {

  render() {
    return (
<ContextProvider>
  <div className='flex-container'> 
     <div className='flex-item-left'>    
      <UserInputComponent></UserInputComponent>
     </div>
     <div className='flex-item-right'>
      <ResultComponent></ResultComponent>
      </div>
      </div>
      </ContextProvider>
    );

  }
}
export default App;

