import { getUsers } from "services/localStorage";

export const isEmailInStorage = (email, message = false) => {
  const users = getUsers();
  return users?.map((user) => user.email).includes(email)
    ? "Email already in use"
    : message;
};

export const getErrorMessages = (errors) => errors.filter(Boolean);

export const isNotEmpty = (value) =>
  value.trim() === "" ? `Field is missing` : false;

export const isEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(value) ? "You must type a valid email" : false;
};

export const isSamePassword = (pass, confirmpass) => {
  return !(pass === confirmpass) ? "Passwords do not match" : false;
};

export const isPasswordIncorrect = (email, password) => {
  const users = getUsers();
  return users
    .filter((user) => user.email === email)
    .every((user) => user.password !== password)
    ? "Incorrect password"
    : false;
};
