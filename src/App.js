import { Route, Routes, Outlet } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import HomePage from "./routes/home/home.component";
import NavigationBar from './routes/navigation/navigation.component';
import Shop from "./routes/shop/shop.component";



function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout/>} />
      </Route>
    </Routes>
  );
}

export default App;
