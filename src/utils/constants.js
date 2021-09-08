import lscache from "lscache";

lscache.setBucket("auth");
export const users = lscache.get("users") || [];
export const userEmails = users.map((user) => user.email);
export const userPasswords = users.map((user) => user.password);
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
