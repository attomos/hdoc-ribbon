class Ribbon extends HTMLElement {
  constructor() {
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // default theme
    this._theme = {
      borderColor: "#ababab",
      backgroundColor: "#ffffff",
      borderHoverColor: "#29008a",
      backgroundHoverColor: "#dacaff",
    };

    this.wrapper = document.createElement("a");
    this.wrapper.classList.add("wrapper");

    this.span = document.createElement("span");
    this.span.classList.add("content");

    const style = this.initStyleElement(this._theme);
    shadow.appendChild(style);
    this.wrapper.appendChild(this.span);
    shadow.appendChild(this.wrapper);
  }

  connectedCallback() {
    const position = this.getAttribute("position");
    this.wrapper.classList.add(position);

    const day = this.getAttribute("data-day");
    this.span.innerText = `Day ${day} #100DaysOfCode`;

    const href = this.getAttribute("href");
    this.wrapper.setAttribute("href", href);
    this.wrapper.setAttribute("target", "_blank");
  }

  get theme() {
    return this._theme;
  }

  set theme(newVal) {
    const newTheme = Object.assign(this._theme, newVal);
    this._theme = newTheme;
    this.updateStyle(this);
  }

  updateStyle(elem) {
    const shadow = elem.shadowRoot;
    shadow.querySelector("style").textContent = this.getStyleContent(
      this.theme
    );
  }

  initStyleElement(theme) {
    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style");
    style.textContent = this.getStyleContent(theme);
    return style;
  }

  getStyleContent({
    borderColor,
    backgroundColor,
    backgroundHoverColor,
    borderHoverColor,
  }) {
    return `
.wrapper {
  border: 2px solid ${borderColor};
  background-color: ${backgroundColor};
  color: black;
  position: absolute;
  width: 20em;
  height: 2.5em;
  display: flex;
  text-decoration: none;
  font-weight: bold;
  opacity: 1;
}

.wrapper:hover {
  background-color: ${backgroundHoverColor};
  border-top: 2px solid ${borderHoverColor};
  border-bottom: 2px solid ${borderHoverColor};
}

.right {
  top: 4em;
  right: -5em;
  transform: rotate(45deg);
}

.left {
  top: 4em;
  left: -5em;
  transform: rotate(315deg);
}

.content {
  font-family: Arial;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
`;
  }
}

customElements.define("hdoc-ribbon", Ribbon);
