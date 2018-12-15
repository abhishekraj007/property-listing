const ranges = [
  { divider: 1e18, suffix: "E" },
  { divider: 1e15, suffix: "P" },
  { divider: 1e12, suffix: "T" },
  { divider: 1e9, suffix: "G" },
  { divider: 1e6, suffix: "M" },
  { divider: 1e3, suffix: "k" }
];

function formatNumber(number) {
  if (number < 0) {
    return "-" + formatNumber(-number);
  }
  for (var i = 0; i < ranges.length; i++) {
    if (number >= ranges[i].divider) {
      return (number / ranges[i].divider).toString() + ranges[i].suffix;
    }
  }
  return number.toString();
}

export { formatNumber };