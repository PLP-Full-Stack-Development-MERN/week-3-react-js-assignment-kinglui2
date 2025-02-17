import Header from './components/Header';
import Profile from './components/Profile';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile name="Lewis Manyasa" email="manyasalewis21@gmail.com" />
      <Counter />
    </div>
  );
}

export default App;
