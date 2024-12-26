"use client";
import { redirect } from "next/navigation";

type Props = {};

const Page = (props: Props) => {
  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    // Simulating an API response and setting a cookie
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (data.success) {
      redirect("/");
    }

    console.log("data", data);
  };

  return (
    <form action={handleSubmit} className="flex gap-10 flex-col">
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Page;
