import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import ProductItem from "./pages/ShowProduct";
import SearchPage from "./components/searchPage/SearchPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/showproduct/:id" element={<ProductItem />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
