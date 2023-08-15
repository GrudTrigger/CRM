import FormPage from "../FormPage/FormPage";
import TablePage from "../TablePage/TablePage"
import EditPage from "../EditPage/EditPage";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "../styles/bootstrap.min.css"
import "../styles/main.css"



function App() {
  return (

    <Router>
        <Routes>
          <Route path="/" element={<FormPage/>} />
          <Route path="/table" element={<TablePage/>} />
          <Route path="/edit/:id" element={<EditPage/>} />
        </Routes>
    </Router>
  );
}

export default App;
