import * as props from "./properties.js";

const propertyOrder = [
  props.isLayoutLikeProperty,
  props.isFontProperty,
  props.isBackgroundLikeProperty,
  props.isAnimationLikeProperty,
  props.isSvgProperty,
  props.isMiscProperty,
  props.isPrefixedProperty,
];

export function sort(a, b) {
  const aIndex = propertyOrder.findIndex((guard) => guard(a));
  const bIndex = propertyOrder.findIndex((guard) => guard(b));
  return aIndex > bIndex ? 1 : -1;
}
