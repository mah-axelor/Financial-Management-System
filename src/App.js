import './App.css';
import {AuthProvider} from './contexts/authContext';
import Router from './Router';

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
      <Router/>
      </AuthProvider>
    </div>
  );
}

export default App;
