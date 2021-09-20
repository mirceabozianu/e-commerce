import lscache from "lscache";

lscache.setBucket("auth");

if (lscache.get("users") === null) {
  lscache.set("users", []);
}
export const oldUsers = lscache.get("users");

export const registerUser = (name, email, password) => {
  oldUsers.push({ name, email, password });
  lscache.set("users", oldUsers);
};
