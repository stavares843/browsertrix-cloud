import { AccessCode, UserRole } from "../types/org";
export * from "../types/org";

export function isOwner(accessCode?: typeof AccessCode[UserRole]): boolean {
  if (!accessCode) return false;

  return accessCode === AccessCode.owner;
}

export function isCrawler(accessCode?: typeof AccessCode[UserRole]): boolean {
  if (!accessCode) return false;

  return accessCode >= AccessCode.crawler;
}
