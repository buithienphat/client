"use client";
import ListProduct from "@/components/list-product/ListProduct";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import useSWR from "swr";

interface Product {
  _id: string;
  name: string;
  slug: string;
  quantity: number;
  price: number;
  original_price: number;
  image: string;
  id: string;
  created_at: string;
  updated_at: string;
}

// https://du-an-ca-nhan.onrender.com/products

export default function Home() {
  // const data = await getProducts();

  // const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // const { data, error, isLoading } = useSWR<{ data: { products: Product[] } }>(
  //   "https://du-an-ca-nhan.onrender.com/products",
  //   fetcher
  // );

  const [data, setData] = useState();

  useEffect(() => {
    document.cookie = "testCookie=testValue; path=/; max-age=3600";

    (async () => {
      const res = fetch("https://du-an-ca-nhan.onrender.com/user/profile", {
        method: "GET",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          Origin: "https://client-amber-tau.vercel.app",
          // Other necessary headers
        },
        credentials: "include", // Ensure cookies are sent with the request
      });
      console.log("res", res);
    })();
  }, []);

  return (
    <div className="">
      <Suspense fallback={<>cehck</>}>
        {/* <ListProduct data={data?.data?.products || []} /> */}
      </Suspense>

      <Link href={"/dasboard"}>Go add products</Link>
    </div>
  );
}
