interface UserProps {
  name?: string;
  age?: number; // ? means optional
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  // Get function
  get(propName: string): number | string {
    return this.data[propName];
  }
  // Set function
  set(update: UserProps): void {
    Object.assign(this.data, update); // From update to override this.data
  }
  //
  on(eventName: string, callback: Callback): void {
    //
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    // Check handlers
    if (!handlers || handlers.length === 0) {
      return;
    }

    // If handlers
    handlers.forEach((callback) => {
      callback();
    });
  }
}
