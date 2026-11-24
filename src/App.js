import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Factorial from './components/Factorial';
import Fibonacci from './components/Fibonacci';
import Power from './components/Power';
import Footer from './components/Footer';
import { useState } from 'react';

function App()
{
    const [number, setNumber] = useState(2);
    const [power, setPower] = useState(3);
    let menu =
    {
        "Главная"   :   "/index",
        "Магазин"   :   "/shop",
        "Новости"   :   "/news",
        "О компании":   "/about",
        "Контакты"  :   "/contacts"
    }

  return (
    <div className="App">
          <Header />
          <Nav menu={ menu } />
          <Main />
          <Factorial
              number={number}
              onNumberChange={setNumber}
          />
          <Power
              number={number}
              power={power}
              onNumberChange={setNumber}
              onPowerChange={setPower}
          />
          <Fibonacci
              number={number}
              onNumberChange={setNumber}
          />
          <Footer />
    </div>
  );
}

export default App;
