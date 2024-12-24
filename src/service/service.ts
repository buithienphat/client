export const getProducts = async () => {
  try {
    const res = await fetch("https://du-an-ca-nhan.onrender.com/products", {
      next: { tags: ["products"] },
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// import axios from "axios";

// export const getProducts = async () => {
//   try {
//     const res = await axios.get("https://du-an-ca-nhan.onrender.com/products");

//     return res.data;
//   } catch (error) {
//     console.log("error", error);
//   }
// };
