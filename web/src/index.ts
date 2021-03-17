//console.log("First");

import { User } from "./models/User";
import axios from "axios";

const user = new User({ id: 1 });

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

user.events.on("change", () => {
  console.log("");
});
