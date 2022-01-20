export function simpleParseCss(css: string): Record<string, string> {
  const matches = css.matchAll(/([\w-]+)\s*:\s*([^;]+);/g);
  return Object.fromEntries(
    Array.from(matches).map(([, key, value]) => [
      key.replace(/-[a-z]/g, (match) => match[1].toUpperCase()),
      value,
    ])
  );
}
