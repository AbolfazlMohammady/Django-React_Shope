import Main from "../../components/main/Main";
import SliderProducts from "../../components/SliderProducts";
import b1 from "../../assets/brands/b1.jpeg" ;
import b2 from "../../assets/brands/b2.jpeg" ;
import b3 from "../../assets/brands/b3.jpeg" ;
import b4 from "../../assets/brands/b4.jpeg" ;
import b5 from "../../assets/brands/b5.jpeg" ;
import b6 from "../../assets/brands/b6.jpeg" ;
import b7 from "../../assets/brands/b7.jpeg" ;
import b8 from "../../assets/brands/b8.jpeg" ;
import b9 from "../../assets/brands/b9.jpeg" ;
import b10 from "../../assets/brands/b10.jpeg" ;
import b11 from "../../assets/brands/b11.jpeg" ;
import b12 from "../../assets/brands/b12.png" ;
import b13 from "../../assets/brands/b13.jpeg" ;
import b14 from "../../assets/brands/b14.jpeg" ;

import img from "../../assets/category.jpg" ;
import img3 from "../../assets/mozer3.jpg" ;
import img4 from "../../assets/mozer.jpg" ;
import img5 from "../../assets/mozer2.jpg" ;


function Home() {
  const categories = [
    { linkcategory: "/cat1", titlecategory: "Category 1", imgcategory: img },
    { linkcategory: "/cat2", titlecategory: "Category 2", imgcategory: img },
    { linkcategory: "/cat3", titlecategory: "Category 3", imgcategory: img },
    { linkcategory: "/cat4", titlecategory: "Category 4", imgcategory: img },
    { linkcategory: "/cat5", titlecategory: "Category 5", imgcategory: img },
    { linkcategory: "/cat6", titlecategory: "Category 6", imgcategory: img },
  ];

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
    { linkbrand: "/brand2", imgbrand: b14 }
  ];
  const products =[
    {idproduct:'1',imgproduct:img3,nameproduct:"موزر شخمی",reateproduct: 1 ,priceproduct:1_000_000},
    {idproduct:'2',imgproduct:img4,nameproduct:"موزر شخمی",reateproduct: 2 ,priceproduct:2_000_000},
    {idproduct:'3',imgproduct:img5,nameproduct:"موزر شخمی",reateproduct: 3 ,priceproduct:3_000_000},
    {idproduct:'4',imgproduct:img3,nameproduct:"موزر شخمی",reateproduct: 4 ,priceproduct:4_000_000},
    {idproduct:'5',imgproduct:img4,nameproduct:"موزر شخمی",reateproduct: 5 ,priceproduct:5_000_000},
    {idproduct:'6',imgproduct:img5,nameproduct:"موزر شخمی",reateproduct: 1 ,priceproduct:6_000_000},
    {idproduct:'7',imgproduct:img3,nameproduct:"موزر شخمی",reateproduct: 2 ,priceproduct:7_000_000},
    {idproduct:'8',imgproduct:img4,nameproduct:"موزر شخمی",reateproduct: 3 ,priceproduct:8_000_000},
    {idproduct:'9',imgproduct:img5,nameproduct:"موزر شخمی",reateproduct: 4 ,priceproduct:9_000_000},
    {idproduct:'10',imgproduct:img3,nameproduct:"موزر شخمی",reateproduct: 5 ,priceproduct:10_000_000},
  ]
  return <div>
     <Main />
    <SliderProducts categorys={categories} brands={[]} products={[]} />
    <SliderProducts categorys={[]} brands={brands} products={[]} />
    <SliderProducts categorys={[]} brands={[]} products={products} />
    <SliderProducts categorys={[]} brands={[]} products={products} />
    <SliderProducts categorys={[]} brands={[]} products={products} />
    <SliderProducts categorys={[]} brands={[]} products={products} />
    <SliderProducts categorys={[]} brands={[]} products={products} />
  </div>
}

export default Home;
