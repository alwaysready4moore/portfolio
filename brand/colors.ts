export const brandColors = {
  ink: "#050A0C",
  paper: "#F7F8F8",
  white: "#FFFFFF",

  night: "#071014",
  surface: "#101820",
  surfaceRaised: "#111827",
  border: "#26323A",

  signal: "#19D8E8",
  signalSoft: "#7EF3FF",

  text: "#E7EEF2",
  textMuted: "#A7B3BA",
} as const;

export type BrandColorName = keyof typeof brandColors;
export type BrandColorValue = (typeof brandColors)[BrandColorName];