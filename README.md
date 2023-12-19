# prettier-plugin-ej-sort

Prettier plugin that sorts CSS and SCSS properties using a consistent system. See the explanation for the sorting logic down below.

## Order Within Rules

The order of properties within a CSS/SCSS rule is as follows:

1. **Positioning and Display**. Includes:
   - _position_
   - top, right, bottom, left
   - transform
   - _display_
   - align-items, justify-content...
2. **Layout**. Includes:
   - height
   - weight
   - padding
   - margin
3. **Text**. Includes:
   - color
   - font-(x): family, size, weight...
   - text-align
4. **Background and Border**. Includes:
   - _background_
   - background-(x): size, color, position...
   - _border_
   - border-(x): bottom, top, radius...
   - box-shadow
5. **Animation and Transition**. Includes:
   - _animation_
   - animation-(x): duration, delay, direction...
   - transition
6. **Miscellaneous**. Includes:
   - cursor
   - anything that doesn't fit into the above categories

For SCSS, you add nested selectors after all of these.

```css
selector {
  /* positioning & display */
  position: ...;
  /* (top, bottom, etc.) */
  display: ...;
  /* (align-items, gap, etc.) */

  /* layout */
  height: ...;
  width: ...;
  padding: ...;
  margin: ...;

  /* text */
  color: ...;
  font-family: ...;
  /* (size, weight, etc.) */

  /* background & border */
  background: ...;
  /* (color, size, etc.) */
  border: ...;
  /* (radius, etc.) */

  /* animation & transition */
  animation: ...;
  /* (duration, delay, etc.) */
  transition: ...;

  /* misc */
  cursor: ...;
  /* (etc.) */

  & nested {
	...
  }
}
```
