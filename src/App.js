
import './App.css';
import HeroCarousel from './pages/HeroCarousel';
import LoginForm from "./components/LoginForm";
import TopBar from './components/top-bar';

function App() {
  return (
    <div className="App">
      <TopBar />
      < HeroCarousel />
      <LoginForm />
    </div>
  );
}

export default App;
