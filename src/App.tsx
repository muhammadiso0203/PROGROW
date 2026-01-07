import { Route, Routes } from "react-router";
import { Auth } from "./pages/auth";
import MainLayout from "./layout/mainLayout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
