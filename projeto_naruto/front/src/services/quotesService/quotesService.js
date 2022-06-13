export const getQuote = async () => {
  const req = await fetch(`http://localhost:5000`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await req.json();
  console.log(json);
  return json;
};
