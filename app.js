// 100. "div*2" -> "<div></div><div></div>"
function tegTakror(s) {
  const [teg, n] = s.split("*");
  return `<${teg}></${teg}>`.repeat(Number(n));
}

// 101. 1 dan n gacha yigʻindi
function yigindi(n) {
  return (n * (n + 1)) / 2;
}

// 102. son min va max oraligʻidami (chegaralar ham kiradi)
function oraliqda(n, { min, max }) {
  return n >= min && n <= max;
}

// 103. Avtomorf son: kvadratining oxiri sonning oʻziga teng
function avtomorf(n) {
  return String(n * n).endsWith(String(n));
}

// 104. Har bir elementga oʻz indexini qoʻshish
function indexQoshish(arr) {
  return arr.map((v, i) => v + i);
}

// 105. Shakari yoʻq ichimliklar
// DIQQAT: shakarli ichimliklar roʻyxatining boshi skrinshotda koʻrinmagan.
// Bu yerda cola va fanta deb oldim, kerak boʻlsa roʻyxatga qoʻshing.
const SHAKARLI = new Set(["cola", "fanta"]);
function shakarsiz(arr) {
  return arr.filter((x) => !SHAKARLI.has(x));
}

// 106. Sonda nechta raqam bor
function raqamlarSoni(n) {
  return String(n).length;
}

// 107. Raqamlarni almashtirib hosil boʻladigan eng katta son
function engKatta(n) {
  return Number([...String(n)].sort().reverse().join(""));
}

// 108. a va b oraligʻidan random son (ikkala chegara ham kiradi)
function randomSon(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// 109. Narsistik son: raqamlari uzunlik darajasida yigʻindisi oʻziga teng
function narsistik(n) {
  const d = String(n).split("");
  return d.reduce((s, x) => s + Number(x) ** d.length, 0) === n;
}

// 110. Stringdagi katta harflar soni
function kattaHarflar(s) {
  return (s.match(/[A-Z]/g) || []).length;
}
