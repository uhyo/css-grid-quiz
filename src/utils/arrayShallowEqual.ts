export function arrayShallowEqual(
  a: readonly unknown[],
  b: readonly unknown[]
) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}
