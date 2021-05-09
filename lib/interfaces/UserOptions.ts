/**
 * Interface for UserOptions.
 */
export interface UserOptions {
  id: string;
  username: string;
  tag: string;
  avatar: string;
  bot: boolean;
  system?: boolean;
  mfaEnabled?: boolean;
  locale?: string;
  email?: string;
  verified?: boolean;
  flags?: number;
  premiumType?: number;
  publicFlags?: number;
}
