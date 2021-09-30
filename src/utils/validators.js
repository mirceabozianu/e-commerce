import { getUsers } from "services/localStorage";

export const isEmailInStorage = (email, message = "Email already in use") => {
  const users = getUsers();
  return users?.find((user) => user.email === email) ? message : false;
};

export const isEmailNotInStorage = (email, message = "Email was not found") => {
  const users = getUsers();
  return !users?.find((user) => user.email === email) ? message : false;
};

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
  const foundUser = users.find((user) => user.email === email);
  return foundUser?.password !== password ? "Incorrect password" : false;
};
