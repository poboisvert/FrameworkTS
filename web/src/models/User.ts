import { Eventing } from "./Eventing";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number; // ? means optional
}

export class User {
  public events: Eventing = new Eventing();
  constructor(private data: UserProps) {}

  // Get function
  get(propName: string): number | string {
    return this.data[propName];
  }
  // Set function
  set(update: UserProps): void {
    Object.assign(this.data, update); // From update to override this.data
  }
}
