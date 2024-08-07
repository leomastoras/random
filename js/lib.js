Math.cryptoRandom = function () {
  const randomBuffer = new Uint32Array(+true);
  (crypto || msCrypto).getRandomValues(randomBuffer);
  return randomBuffer.at() / 2 ** 32;
};

Array.prototype.hasOwnProperty("shuffle") ||
  Object.defineProperty(Array.prototype, "shuffle", {
    value: function () {
      for (let currentIndex = this.length; currentIndex; ) {
        const randomIndex = Math.floor(Math.cryptoRandom() * currentIndex--);

        [this[currentIndex], this[randomIndex]] = [
          this[randomIndex],
          this[currentIndex],
        ];
      }

      return this;
    },
  });

Number.prototype.hasOwnProperty("pad") ||
  Object.defineProperty(Number.prototype, "pad", {
    value: function (size) {
      return String(this).padStart(size, "0");
    },
  });

Math.parse = function(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

window.storage = window.localStorage;
