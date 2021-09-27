import { getUsers } from "services/localStorage";

export const isEmailInStorage = (email) => {
  const users = getUsers();
  return users.map((user) => user.email).includes(email)
    ? "Email already in use"
    : false;
};

export const getErrorMessages = (...errors) => {
  return errors.flat().filter((error) => Boolean(error) !== false);
};

export const isEmpty = (value, name) =>
  value.trim() === "" ? `You must type a valid ${name}` : false;

export const isNotEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(value) ? "You must type a valid email" : false;
};

export const isSamePassword = (pass, confirmpass) => {
  return !(pass === confirmpass) ? "Passwords do not match" : false;
};
