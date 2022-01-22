# hdoc-ribbon (100-days-of-code-ribbon)

`hdoc-ribbon` is a custom HTML element I worked on as part of my #100DaysOfCode journey to learn
new stuffs and re-learn many things

## Usage

Include this script in your HTML

```html
<script src="https://unpkg.com/hdoc-ribbon@1.0.1/index.js"></script>
```

And start using `<hdoc-ribbon>` element in your document:

```html
<!-- put the ribbon on the top right corner -->
<hdoc-ribbon
  data-day="11"
  position="right"
  href="https://github.com/attomos/100-days-of-code"
></hdoc-ribbon>

<!-- put the ribbon on the top left corner -->
<hdoc-ribbon
  data-day="100"
  position="left"
  href="https://github.com/attomos/100-days-of-code"
></hdoc-ribbon>
```

| Attribute | Data Type | Description                                      |
| --------- | --------- | ------------------------------------------------ |
| data-day  | string    | The day you're on the challenge, e.g. 1-100      |
| position  | string    | Where to put the ribbon either `left` or `right` |
| href      | string    | The URL that points to your repo or whatever     |

## Customization

```html
<hdoc-ribbon
  data-day="11"
  position="right"
  href="https://github.com/attomos/100-days-of-code"
></hdoc-ribbon>
```

```js
const ribbon = document.querySelector("hdoc-ribbon");
ribbon.theme = {
  backgroundColor: "#c8e8de",
  borderHoverColor: "#4e635c",
  backgroundHoverColor: "#8ebdae",
};
```

### Customizable Properties

| Property                   | Data Type | Description                                    |
| -------------------------- | --------- | ---------------------------------------------- |
| theme.borderColor          | string    | Border color of the ribbon in normal state     |
| theme.backgroundColor      | string    | Background color of the ribbon in normal state |
| theme.borderHoverColor     | string    | Border color when the ribbon is hovered        |
| theme.backgroundHoverColor | string    | Background color when the ribbon is hovered    |

## Inspirations

I got this idea by looking at what @narze did in his day 5 and day 6 of #100DaysOfCode challenge.  
He created #100DaysOfCode CSS ribbon and published it to [npm](https://www.npmjs.com/package/hundred-days-of-code-css-ribbon).

Please checkout his work from the links below.

- https://100daysofcode-narze.vercel.app/days/5/
- https://100daysofcode-narze.vercel.app/days/6/
- https://github.com/narze/100-days-of-code-ribbon

### Things I learned from @narze ribbon as well as creating my own

1. Learn about https://unpkg.com/ which is CDN to serve files from npm packages
2. Some CSS transforms to make the ribbon on the corner
3. My ribbon is a bit different from @narze. I create custom HTML element, while his ribbon is CSS
   magic (use the ribbon class and pass data to attr() function).
