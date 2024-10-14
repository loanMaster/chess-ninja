const r = (i, n) =>
  i.toLocaleString(n, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
function m(i, n) {
  let t = i.toString();
  for (; t.length < n; ) t = '0' + t;
  return t;
}
export { r as f, m as p };
