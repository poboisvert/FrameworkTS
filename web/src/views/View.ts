import { Model } from "../models/Model";

interface ModelForView {
  on(eventName: string, callback: () => void): void;
}

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    // parent = HTML
    this.bindModel();
  }

  // HTML template
  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  // Doesn't have to have a children
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
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
  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  onRender(): void {}
  // HTML conversion
  render(): void {
    // Avoid duplicate when render is called again
    this.parent.innerHTML = "";
    // render
    const templateElement = document.createElement("template"); // String to HTML
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}
