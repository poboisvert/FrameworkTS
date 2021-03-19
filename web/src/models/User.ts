import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number; // ? means optional
}

const rootUrl = "http://localhost:3000/users";

export class User {
  public events: Eventing = new Eventing();

  // Sync id is REQUIRE but User is ? - Not Mandatory
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
}
