import { BrowserRouter } from 'react-router-dom';
import './App.scss'
import Route from './routes';


function App() {

  return (
    <>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </>
  )
}

export default App
