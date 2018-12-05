export function formatPrice(cents) {
  return (cents / 100).toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
    currencyDisplay: "symbol"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFullName() {
  const names = [
    "Adam",
    "Ada",
    "Barbara",
    "Bogdan",
    "Celina",
    "Daria",
    "Dariusz",
    "Elżbieta",
    "Eugeniusz",
    "Felicja",
    "Ferdynand",
    "Grażyna",
    "Grzegorz",
    "Helena",
    "Iwona",
    "Iwo",
    "Jusyna",
    "Judyta",
    "Jurek",
    "Krzyrztof",
    "Katarzyna",
    "Linda",
    "Monika",
    "Małgorzata",
    "Michał",
    "Ola",
    "Olek",
    "Natalia",
    "Piotr",
    "Patrycja",
    "Patryk",
    "Paweł",
    "Rafał",
    "Sławek",
    "Ania",
    "Dorota"
  ];

  const usernames = [
    "Basiak",
    "Nowak",
    "Antrzejowiec",
    "Jankowiak",
    "Lisiewicz",
    "lipowicz",
    "Kowal",
    "Miodek",
    "Gesel",
    "Hawczyk",
    "Norzyk",
    "Wicel",
    "Linaczyk",
    "Preslej",
    "Miłosiewicz",
    "Ziemniak",
    "Pomidorowicz",
    "Kaktus",
    "Focha",
    "Fudżi",
    "Nuklei",
    "Sylaba",
    "Analiza",
    "Diagnoza",
    "Chrząstka",
    "Wynocha",
    "Kryzys",
    "Fenomen",
    "Zegarmistrz",
    "Człekowicz"
  ];

  return `${rando(names)} ${rando(usernames)}`;
}
