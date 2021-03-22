import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  // Functions
  eventsMap(): { [key: string]: () => void } {
    return {
      //"click:button": this.onButtonClick, // onClick
      //"mouseenter:h1": this.onHeaderHover, // Mouse over
      "click:.set-age": this.onSetAgeClick, // onClick
      "click:.set-name": this.onSetNameClick, // onClick
      "click:.save-model": this.onSaveClick, // onClick
    };
  }

  onHeaderHover(): void {
    console.log("Hover");
    //  this.model.get("name")
  }

  onButtonClick(): void {
    // console.log("Clicked");
  }

  onSaveClick = (): void => {
    this.model.save();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    console.log("onSetAgeClick");
    this.model.setRandomAge();
  };

  // String
  template(): string {
    // This is string not HTML
    return `
      <div>
        <input placeholder="${this.model.get("name")}"/>
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>
      `;
  }
}
