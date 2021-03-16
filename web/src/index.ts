//console.log("First");

import { User } from "./models/User";

const user = new User({ name: "Name", age: 20 });

console.log(user.get("name"));
console.log(user.get("age"));
