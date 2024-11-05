import Main from "../../components/main/Main";
import SliderProducts from "../../components/SliderProducts";
import b1 from "../../assets/brands/b1.jpeg";
import b2 from "../../assets/brands/b2.jpeg";
import b3 from "../../assets/brands/b3.jpeg";
import b4 from "../../assets/brands/b4.jpeg";
import b5 from "../../assets/brands/b5.jpeg";
import b6 from "../../assets/brands/b6.jpeg";
import b7 from "../../assets/brands/b7.jpeg";
import b8 from "../../assets/brands/b8.jpeg";
import b9 from "../../assets/brands/b9.jpeg";
import b10 from "../../assets/brands/b10.jpeg";
import b11 from "../../assets/brands/b11.jpeg";
import b12 from "../../assets/brands/b12.png";
import b13 from "../../assets/brands/b13.jpeg";
import b14 from "../../assets/brands/b14.jpeg";
import { useSelector } from "react-redux";

function Home() {
 const products = useSelector((state: any) => state.products.products);
 const category = useSelector((state: any) => state.categorys.categories);

 const brands = [
  { linkbrand: "/brand1", imgbrand: b1 },
  { linkbrand: "/brand2", imgbrand: b2 },
  { linkbrand: "/brand2", imgbrand: b3 },
  { linkbrand: "/brand2", imgbrand: b4 },
  { linkbrand: "/brand2", imgbrand: b5 },
  { linkbrand: "/brand2", imgbrand: b6 },
  { linkbrand: "/brand2", imgbrand: b7 },
  { linkbrand: "/brand2", imgbrand: b8 },
  { linkbrand: "/brand2", imgbrand: b9 },
  { linkbrand: "/brand2", imgbrand: b10 },
  { linkbrand: "/brand2", imgbrand: b11 },
  { linkbrand: "/brand2", imgbrand: b12 },
  { linkbrand: "/brand2", imgbrand: b13 },
  { linkbrand: "/brand2", imgbrand: b14 },
 ];

 return (
  <div>
   <Main />
   <SliderProducts categorys={category} brands={[]} products={[]} />
   <SliderProducts categorys={[]} brands={brands} products={[]} />
   <SliderProducts categorys={[]} brands={[]} products={products} />
   <SliderProducts categorys={[]} brands={[]} products={products} />
   <SliderProducts categorys={[]} brands={[]} products={products} />
   <SliderProducts categorys={[]} brands={[]} products={products} />
   <SliderProducts categorys={[]} brands={[]} products={products} />
  </div>
 );
}

export default Home;
