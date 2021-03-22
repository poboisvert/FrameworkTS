import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  // Functions
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
      "mouseenter:h1": this.onHeaderHover,
    };
  }

  onHeaderHover(): void {
    console.log("Hover");
  }

  onButtonClick(): void {
    console.log("Clicked");
  }

  // String
  template(): string {
    // This is string not HTML
    return `
      <div>
        <h1>User Form</h1>
        <div>Username: ${this.model.get("name")}</div>
        <div>UsernAgeame: ${this.model.get("age")}</div>
        <input />
        <button>Submit</button>
      </div>
      `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":"); // ES6
      // eventName : click
      // selector: button

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }
  // HTML conversion
  render(): void {
    const templateElement = document.createElement("template"); // String to HTML
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
