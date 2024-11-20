import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import ProductItem from "./pages/ShowProduct";
import Dashbord from "./pages/Dashbord";

function App() {
 return (
  <>
   <Layout>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/showproduct/:id" element={<ProductItem />} />
     <Route path="/profile" element={<Dashbord />} />
    </Routes>
   </Layout>
  </>
 );
}

export default App;
