import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from './Pages/IndexPage';
import InnerPage from './Pages/InnerPage';
// import
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<InnerPage />}> */}
        <Route >
          <Route path="/" element={<IndexPage />} />
          <Route path="/InnerPage" element={<InnerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;