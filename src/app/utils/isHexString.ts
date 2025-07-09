export function isHexString(str: string) {
  const HEX_COLOR_RE = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
  return HEX_COLOR_RE.test(str);
}
