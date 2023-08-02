import CreateForm from "./components/CreateForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './components/Form'



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<CreateForm />} />
          <Route path="/form/:formId" exact element={<Form />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
