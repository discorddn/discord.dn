/**
 * Interface for AvatarUrlOptions.
 */
export interface AvatarUrlOptions {
  format: "png" | "jpg" | "webp" | "gif";
  size?: 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096;
}
