// "use client";

import ListProduct from "@/components/list-product/ListProduct";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { getProducts } from "@/service/service";
import { revalidatePath } from "next/cache";
import Link from "next/link";
// import { useEffect, useState } from "react";

function Loading() {
  return (
    <div className="size-full bg-black/50 h-screen flex items-center justify-center">
      <div role="status">
        <svg
          aria-hidden="true"
          className="size-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    </div>
  );
}

export default async function Page() {
  // const { toast } = useToast();
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const fetchData = async () => {
  //   setLoading(true);

  //   try {
  //     const res = await getProducts();
  //     if (res) {
  //       setData(res.data.products);
  //     }
  //   } catch (error) {
  //     console.log("error", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

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
    // toast({
    //   title: "Scheduled: Catch up",
    //   description: "Friday, February 10, 2023 at 5:57 PM",
    // });

    if (res.ok) {
      // fetchData();
      revalidatePath("products");
    } else {
      console.error("Failed to submit the product");
    }
  };

  return (
    <div className="">
      {/* <Suspense fallback={<Loading />}>
        <ListProduct data={data} />
      </Suspense> */}

      {/* {loading && <Loading />} */}

      <ListProduct data={data.data.products} />

      <form action={submit}>
        <button type="submit" className="mt-10">
          submit
        </button>
      </form>

      <Link href={"/"}>Back to home</Link>
    </div>
  );
}
