import ListProduct from "@/components/list-product/ListProduct";
import { getProducts } from "@/service/service";
import { revalidateTag } from "next/cache";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
  const data = await getProducts();

  const submit = async () => {
    "use server";

    const time = new Date();

    const res = await fetch("https://du-an-ca-nhan.onrender.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `product-${time.getTime()}`,
        quantity: 20,
        price: 18000000,
        original_price: 20000000,
        image: "1213",
      }),
    });

    if (res.ok) {
      revalidateTag("products");
    } else {
      console.error("Failed to submit the product");
    }
  };
  return (
    <div className="">
      <Suspense fallback={<>cehck</>}>
        {/* <ListProducts data={data.data.products} /> */}
        <ListProduct data={data.data.products} />
      </Suspense>

      <form action={submit}>
        <button type="submit" className="mt-10">
          submit
        </button>
      </form>

      <Link href={"/"}>Back to home</Link>
    </div>
  );
}
