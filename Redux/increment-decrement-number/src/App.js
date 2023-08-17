import './App.css';
import { decNumber, incNumber } from './actions';
import store from './store';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const number = useSelector((state) => state.incDecNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h4>using React and Redux</h4>

      <div className="quantity">
        <a className='quantity__minus' title="Decrement" onClick={() => dispatch(decNumber(1))}><span> - </span></a>
        <input name='quantity' type='text' className='quantity__input' value={number} />
        <a className='quantity__plus' title="Increment" onClick={() => dispatch(incNumber(1))}><span> + </span></a>
      </div>
    </div>
  );
}

export default App;
