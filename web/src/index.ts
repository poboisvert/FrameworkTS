//console.log("First");

/* import { User } from "./models/User";
 */
/* const user = new User({ name: "Name", age: 20 });

user.set({ name: "newtest", age: 99 });

console.log(user.get("name"));
console.log(user.get("age"));

user.on("change", () => {
  console.log("Change 1");
});

console.log(user);
 */

import axios from "axios";

axios.post("http://localhost:3000/users", {
  name: "test2",
  age: 60,
});
