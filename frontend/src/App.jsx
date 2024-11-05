import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import ProductItem from "./pages/productItem/ProductItem";

function App() {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        <ProductItem />
      </Layout>
    </>
  );
}

export default App;
