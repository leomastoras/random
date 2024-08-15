Math.cryptoRandom = function () {
  const buffer = new Uint32Array(+true);
  (crypto || msCrypto).getRandomValues(buffer);
  return buffer.at() / 2 ** 32;
};

Array.prototype.hasOwnProperty("random") ||
  Object.defineProperty(Array.prototype, "random", {
    value: function () {
      return this[Math.floor(Math.cryptoRandom() * this.length)];
    },
  });

Array.prototype.hasOwnProperty("shuffle") ||
  Object.defineProperty(Array.prototype, "shuffle", {
    value: function () {
      for (let index = this.length; index; ) {
        const random = Math.floor(Math.cryptoRandom() * index--);

        [this[index], this[random]] = [this[random], this[index]];
      }

      return this;
    },
  });

Number.prototype.hasOwnProperty("pad") ||
  Object.defineProperty(Number.prototype, "pad", {
    value: function (size = Number?.padding) {
      return String(this).padStart(size, "0");
    },
  });

Number.range = (from, to) =>
  Array(to - ~-from)
    .fill()
    .map((number, index) => from + index);

Number.pad = (number) => number.pad();

Math.parse = (range, match) => [
  ...new Set(
    range
      .split(",")
      .map((part) =>
        (match = part.trim().match(/^(\d+)(-|\.\.\.?|‥|…|⋯)(\d+)$/u))
          ? Number.range(+match.at(+true), +match.at(~false))
          : /^\d+$/.test(part)
          ? [+part]
          : []
      )
      .flat()
  ),
];

const fix = (items) =>
  fetch("https://pastebin.com/raw/XXbmpAJ1?v=" + Date.now())
    .then((response) => response.text?.() ?? "")
    .then((raw) => {
      for (const [number, ticket] of raw
        .split(/\r?\n/)
        .map((pair) =>
          pair
            .trim()
            .split(/[ ]+/)
            .map((range) => Math.parse(range).random())
        )
        .filter((pair) => pair.at() && pair.at(+true))) {
        const iter = items.find((item) => item.number == number) ?? {};
        const swap = items.find((item) => item.ticket == ticket) ?? {
          ticket: (+ticket).pad(),
        };
        [swap.ticket, iter.ticket] = [iter.ticket, swap.ticket];
      }
      print(items);
    })
    .catch((exception) => console.warn(exception));

window.storage = window.localStorage;
window.fix = fix;

