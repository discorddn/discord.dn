import { RoleTag } from "../../src/structures/RoleTag.ts";

/**
 * Interface for RoleOptions.
 */
export interface RoleOptions {
  id: string;
  name: string;
  color: number;
  hoist: boolean;
  position: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
  tags?: RoleTag;
}
