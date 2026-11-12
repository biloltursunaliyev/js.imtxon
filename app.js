// 100
function tegTakror(s) {
  const [teg, n] = s.split("*");
  return `<${teg}></${teg}>`.repeat(Number(n));
}

// 101
function yigindi(n) {
  return (n * (n + 1)) / 2;
}

// 102
function oraliqda(n, { min, max }) {
  return n >= min && n <= max;
}

// 103
{
  return String(n * n).endsWith(String(n));
}

// 104
function indexQoshish(arr) {
  return arr.map((v, i) => v + i);
}

// 105
const SHAKARLI = new Set(["cola", "fanta"]);
function shakarsiz(arr) {
  return arr.filter((x) => !SHAKARLI.has(x));
}

// 106
function raqamlarSoni(n) {
  return String(n).length;
}

// 107
function engKatta(n) {
  return Number([...String(n)].sort().reverse().join(""));
}

// 108
function randomSon(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// 109
{
  const d = String(n).split("");
  return d.reduce((s, x) => s + Number(x) ** d.length, 0) === n;
}

// 110
function kattaHarflar(s) {
  return (s.match(/[A-Z]/g) || []).length;
}
