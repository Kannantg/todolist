import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoPage from './Pages/TodoPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
