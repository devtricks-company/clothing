import { Route, Routes, Outlet } from "react-router-dom";
import HomePage from "./routes/home/home.component";
import NavigationBar from './routes/navigation/navigation.component';


const Shop = () => {
  return <h1>I am the shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
