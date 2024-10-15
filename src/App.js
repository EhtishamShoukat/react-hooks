import './App.css';
import UseState from './Components/UseState';
import UseEffact from './Components/UseEffact';
import Main from './Components/Main';
import Reducer_hooks from './Components/Reducer_hooks';
import UseCallBack from './Components/UseCallBack';
import UseRef from './Components/UseRef';
import UseTransition from './Components/UseTransition';
import UseDeferred from './Components/UseDeferred';
import UseID from './Components/UseID';

function App() {
  return (
    
    <div className='container'>
      <UseState/>
      <hr></hr>
      <UseEffact/>
<hr></hr>
      <Main/>
      <hr></hr>
      <Reducer_hooks/>
      <hr></hr>
      <UseCallBack/>
      <hr></hr>
      <UseRef/>
      <hr></hr>
      <UseTransition/>
      <hr></hr>
      <UseDeferred/>
      <hr></hr>
      <UseID/>
   </div>
  );
}

export default App;
