import React from "react";

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

type Props = {
  data: Product[];
};

const ListProduct = ({ data }: Props) => {
  return (
    <ul className="grid grid-cols-5 gap-20">
      {data.map((item: Product) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.original_price}</div>
          <div>{item.price}</div>
          <div>{item.quantity}</div>
        </div>
      ))}
    </ul>
  );
};

export default ListProduct;
