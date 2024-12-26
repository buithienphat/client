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
    // Thiết lập cookie trong frontend
    document.cookie =
      "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NmJhMmJkNDE2NzEyZDhiNWE4OWEzYiIsImlhdCI6MTczNTE4NDk1MSwiZXhwIjoxNzM1MjcxMzUxfQ.7J7DY0HxneeFgDdO-WZAKcgbNfZ2AHHQ25ftc1nY_lk; path=/; max-age=3600; domain=client-amber-tau.vercel.app";

    (async () => {
      const res = await fetch(
        "https://du-an-ca-nhan.onrender.com/user/profile",
        {
          method: "GET",
          headers: {
            Accept: "*/*",
            "Content-Type": "application/json",
            Origin: "https://client-amber-tau.vercel.app", // Đảm bảo domain đúng
          },
          credentials: "include", // Đảm bảo cookie được gửi cùng yêu cầu
        }
      );

      const data = await res.json();
      console.log("res", data);
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
