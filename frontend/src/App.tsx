import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import ProductItem from "./pages/ShowProduct";
import SearchPage from "./components/searchPage/SearchPage";
import Dashbord from "./pages/Dashbord";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Dashbord />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/showproduct/:id" element={<ProductItem />} />
        </Routes>
      </Layout>
    </>
  );

}

export default App;
