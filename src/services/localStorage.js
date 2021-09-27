import lscache from "lscache";

export function initLocalStorage() {
  lscache.set("users", []);
  lscache.set("persisted", true);
}

export const getUsers = () => {
  return lscache.get("users");
};

export const setUsers = (user) => {
  lscache.set("users", [user, ...getUsers()]);
};
