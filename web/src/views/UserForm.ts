export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    // This is string not HTML
    return `
      <div>
      <h1>User Form</h1>
      <input />
      </div>
      `;
  }

  render(): void {
    const templateElement = document.createElement("template"); // String to HTML
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
