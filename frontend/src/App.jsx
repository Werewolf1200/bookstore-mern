import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import Show from "./pages/Show";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<Create />} />
      <Route path="/books/edit/:id" element={<Edit />} />
      <Route path="/books/delete/:id" element={<Delete />} />
      <Route path="/books/details/:id" element={<Show />} />
    </Routes>
  );
};

export default App;
