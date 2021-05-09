import { Role } from "../../src/structures/Role.ts";
import { User } from "../../src/structures/User.ts";

/**
 * Interface for EmojiOptions.
 */
export interface EmojiOptions {
  id: string;
  name: string;
  roles?: Array<Role>;
  user?: User;
  requireColons?: boolean;
  managed?: boolean;
  animated?: boolean;
  available?: boolean;
}
