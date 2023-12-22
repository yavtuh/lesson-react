import { BrowserRouter } from 'react-router-dom';
import './App.scss'
import Route from './routes';
import { CounterProvider } from './contexts/CounterContext/CounterContext';


function App() {

  return (
    <>
      <BrowserRouter>
        <CounterProvider>
          <Route />
        </CounterProvider>
      </BrowserRouter>
    </>
  )
}

export default App
