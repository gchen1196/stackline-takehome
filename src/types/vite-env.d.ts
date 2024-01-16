/// <reference types="vite/client" />

type Status = "idle" | "loading" | "succeeded" | "failed";

interface Product {
  id: string;
  title: string;
  image: string | undefined;
  subtitle: string;
  brand: string;
  tags: string[] | [];
  sales: Sale[] | [];
}

interface ProductPayload extends Product {
  retailer: string;
  details: string[] | [];
  reviews: { customer: string; review: string; score: number }[] | [];
}

interface AxiosResponse<T> {
  data: T;
}

interface Sale {
  weekEnding: string;
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}
