import { createSlice } from "@reduxjs/toolkit";
import img from "../assets/category.jpg";

const initialState = {
 categories: [
  { linkcategory: "/cat1", titlecategory: "Category 1", imgcategory: img },
  { linkcategory: "/cat2", titlecategory: "Category 2", imgcategory: img },
  { linkcategory: "/cat3", titlecategory: "Category 3", imgcategory: img },
  { linkcategory: "/cat4", titlecategory: "Category 4", imgcategory: img },
  { linkcategory: "/cat5", titlecategory: "Category 5", imgcategory: img },
  { linkcategory: "/cat6", titlecategory: "Category 6", imgcategory: img },
 ],
};

export const CategorySlice = createSlice({
 name: "category",
 initialState,
 reducers: {},
});
