export * from "./uint8";

// TODO: base32 formats "base32hex" and "base32crockford" are missing!
export type Encoding =
  | "ascii"
  | "utf8"
  | "utf-8"
  | "utf16le"
  | "utf-16le"
  | "ucs2"
  | "ucs-2"
  | "base64"
  | "base64url"
  | "latin1"
  | "binary"
  | "hex"
  | "base32";