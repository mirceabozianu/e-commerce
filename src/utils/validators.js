import { oldUsers } from "../services/localStorage";

export const isEmpty = (value, name) =>
  value.trim() === "" ? `You must type a valid ${name}` : false;

export const isNotEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(value) ? "You must type a valid email" : false;
};

const userEmails = oldUsers.map((user) => user.email);

export const isEmailInStorage = (email) => {
  return userEmails.includes(email) ? "Email already in use" : false;
};
export const isSamePassword = (pass, confirmpass) => {
  return !(pass === confirmpass) ? "Passwords do not match" : false;
};
