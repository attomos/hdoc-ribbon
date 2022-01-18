class Ribbon extends HTMLElement {
  constructor() {
    super();
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    this.wrapper = document.createElement("a");
    this.wrapper.classList.add("wrapper");

    this.span = document.createElement("span");
    this.span.classList.add("content");

    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style");

    style.textContent = `
      .wrapper {
        border: 2px solid #ababab;
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
        background-color: #dacaff;
        border-top: 2px solid #29008a;
        border-bottom: 2px solid #29008a;
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
}

customElements.define("hdoc-ribbon", Ribbon);
