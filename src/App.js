import { Route, Routes, Outlet } from "react-router-dom";
import HomePage from "./routes/home/home.component";
import NavigationBar from './routes/navigation/navigation.component';
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<HomePage />} />
        <Route path="shop" element={<Shop />} />
        <Route path='signIn' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
