export async function GET(request: Request) {
  console.log("request", request);

  const data = { id: 1, name: "Phát1" };

  const headers = request.headers.set;

  console.log("headers", headers);

  return Response.json({ data });
  // return new Response("", {
  //   headers: {
  //     "Set-Cookie": "themme=dark",
  //   },
  // });
}
