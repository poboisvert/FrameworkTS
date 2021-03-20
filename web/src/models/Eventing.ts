type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  //
  on = (eventName: string, callback: Callback): void => {
    //
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    // Check handlers
    if (!handlers || handlers.length === 0) {
      return;
    }

    // If handlers
    handlers.forEach((callback) => {
      callback();
    });
  };
}
