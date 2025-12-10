import './App.css';
import RegisterForm from './components/RegisterForm';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
    <div className="wrapper">
      <Welcome></Welcome>
      <RegisterForm></RegisterForm>
    </div></div>
  );
}

export default App;
