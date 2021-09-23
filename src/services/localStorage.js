import lscache from "lscache";

export function initLocalStorage() {
  lscache.set("users", []);
  lscache.set("persisted", true);
}

export const getUsers = () => {
  return lscache.get("users");
};

export const setUsers = (name, email, password) => {
  lscache.set("users", [{ name, email, password }, ...getUsers()]);
};
