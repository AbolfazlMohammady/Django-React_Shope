import { createSlice } from "@reduxjs/toolkit";
import img3 from "../assets/mozer3.jpg";
import img4 from "../assets/mozer.jpg";
import img5 from "../assets/mozer2.jpg";

const initialState = {
 products: [
  { idproduct: 1, imgproduct: img3, nameproduct: "موزر شخمی", reateproduct: 1, priceproduct: 1_000_000 },
  { idproduct: 2, imgproduct: img4, nameproduct: "موزر شخمی", reateproduct: 2, priceproduct: 2_000_000 },
  { idproduct: 3, imgproduct: img5, nameproduct: "موزر شخمی", reateproduct: 3, priceproduct: 3_000_000 },
  { idproduct: 4, imgproduct: img3, nameproduct: "موزر شخمی", reateproduct: 4, priceproduct: 4_000_000 },
  { idproduct: 5, imgproduct: img4, nameproduct: "موزر شخمی", reateproduct: 5, priceproduct: 5_000_000 },
  { idproduct: 6, imgproduct: img5, nameproduct: "موزر شخمی", reateproduct: 1, priceproduct: 6_000_000 },
  { idproduct: 7, imgproduct: img3, nameproduct: "موزر شخمی", reateproduct: 2, priceproduct: 7_000_000 },
  { idproduct: 8, imgproduct: img4, nameproduct: "موزر شخمی", reateproduct: 3, priceproduct: 8_000_000 },
  { idproduct: 9, imgproduct: img5, nameproduct: "موزر شخمی", reateproduct: 4, priceproduct: 9_000_000 },
  { idproduct: 10, imgproduct: img3, nameproduct: "موزر شخمی", reateproduct: 5, priceproduct: 10_000_000 },
 ],
};

export const ProductSlice = createSlice({
 name: "product",
 initialState,
 reducers: {},
});
