const cookiesStore = new AsyncLocalStorage();

export function cookies() {
  return cookiesStore.getStore();
}

function parseCookies(request: Request) {
  const cookiesHeader = request.headers.get("cookie") || "";
  return cookiesHeader;
}
