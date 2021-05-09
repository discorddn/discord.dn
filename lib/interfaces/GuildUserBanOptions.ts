/**
 * Interface for GuildUserBanOptions.
 */
export interface GuildUserBanOptions {
  deleteMessageDays?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  reason?: string;
}
