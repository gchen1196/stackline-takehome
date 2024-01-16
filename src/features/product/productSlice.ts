import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../mock/data.json";

interface ProductState {
  productData: Product[];
  status: Status;
}

const initialState: ProductState = {
  productData: [],
  status: "idle",
};

// Stubbed API call
const fetchData = async () => {
  const response: AxiosResponse<ProductPayload[]> = await Promise.resolve({ data });
  return response;
};

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  const { data } = await fetchData();
  const products: Product[] = data.map(product => ({
    id: product.id,
    title: product.title,
    image: product.image,
    subtitle: product.subtitle,
    brand: product.brand,
    tags: product.tags,
    sales: product.sales,
  }));
  return products;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productData = action.payload;
      })
      .addCase(fetchProducts.rejected, state => {
        state.status = "failed";
      });
  },
});

export default productSlice.reducer;
