export function indent(str: string, space = "  ") {
  return str.replace(/^(?!$)/gm, space);
}
