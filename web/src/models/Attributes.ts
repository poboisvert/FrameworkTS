import { UserProps } from "./User";

export class Attributes<T> {
  constructor(private data: T) {}

  // Get function
  get<K extends keyof T>(key: K): T[K] {
    // K extends keyof T -> K is a part from T
    // T is a variable
    // (key: K) Key is a type of K
    // T[K] use the type K of T
    return this.data[key];
  }
  // Set function
  set(update: T): void {
    Object.assign(this.data, update); // From update to override this.data
  }
}

const attrs = new Attributes<UserProps>({ id: 5, name: "Pierro", age: 66 });

const name = attrs.get("name");
