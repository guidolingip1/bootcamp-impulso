export const getQuote = async () => {
  const req = await fetch(`http://allugofrases.herokuapp.com/frases/random`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await req.json();
  return json.frase;
};
