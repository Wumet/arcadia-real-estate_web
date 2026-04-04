export function formatNaira(n) {
  return `₦${Number(n).toLocaleString("en-NG")}`;
}
