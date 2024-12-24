import ListProduct from "@/components/list-product/ListProduct";
import { getProducts } from "@/service/service";
import Link from "next/link";
import { Suspense } from "react";

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

export default async function Home() {
  const data = await getProducts();

  return (
    <div className="">
      <Suspense fallback={<>cehck</>}>
        <ListProduct data={data.data.products} />
      </Suspense>

      <Link href={"/dasboard"}>Go add products</Link>
    </div>
  );
}
