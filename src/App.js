import './App.css';
import Counter from './counter/Counter';
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
  );
}

export default App;
