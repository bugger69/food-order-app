import Menu from './components/Meals/Meals';
import Card from './components/UI/Card/Card';
import Header from './components/Layout/Header/Header';

import './App.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const cart = [];

function App() {
  return (
    <div>
      <Header />
      <Card><Menu meals={DUMMY_MEALS} /></Card>
    </div>
  );
}

export default App;
