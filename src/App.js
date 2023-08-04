import CreateForm from "./components/CreateForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from './components/Form'
import Header from "./components/Header";



function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<CreateForm />} />
          <Route path="/form/:formId" exact element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
