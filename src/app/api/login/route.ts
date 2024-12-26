import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const dataForm = await request.json();

    console.log("dataForm", dataForm);

    const res = fetch("https://du-an-ca-nhan.onrender.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });

    console.log("data", res);

    if (true) {
      const response = NextResponse.json({ message: "Login successful" });
      response.cookies.set("authToken", "12345", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
      });
      return NextResponse.json(
        {
          message: "Login success",
          success: true,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid credentials", success: false },
        { status: 401 }
      );
    }
  } catch (err) {
    NextResponse.json(
      {
        message: err,
        success: false,
      },
      { status: 500 }
    );
  }
}
