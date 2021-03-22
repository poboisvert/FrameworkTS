import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on("change", () => {
  const root = document.getElementById("root");

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();

// Loading HTML

/* const userEdit = new UserEdit(root, user);
userEdit.render(); // TSC config Strict null fix
console.log(userEdit);
 */
/* const collection = User.buildUserCollection();

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
 */
/* axios.get("http://localhost:3000/users").then((res:AxiosResponse) {
  console.log(res.data)
}) */

/* const user = User.buildUser({ id: 1 });

user.on("change", () => {
  console.log(user);
});

user.fetch();
 */
/* user.trigger("change"); */

/* user.save(); */
/* user.set({ name: "NEW", age: 999 });

user.save(); */

/* user.fetch(); */

/*
user.set({ name: "newtest", age: 99 });

console.log(user.get("name"));
console.log(user.get("age"));

user.on("change", () => {
  console.log("Change 1");
});

console.log(user);
 */

/* import axios from "axios";

axios.post("http://localhost:3000/users", {
  name: "test2",
  age: 60,
});
 */

/* setTimeout(() => {
  console.log(user);
}, 4000); */
