import React from "react";
import propTypes from "prop-types";
import Link from "next/link";

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary)
    className.push("font-medium rounded-lg font-rozha-one bg-blue-700");
  if (props.isSmall) className.push("px-3 py-2 text-sm text-center");
  if (props.isBase) className.push("text-sm px-5 py-2.5 text-center");
  if (props.isLarge) className.push("px-5 py-3 text-base text-center");
  if (props.isOutline)
    className.push(
      "font-medium rounded-lg text-sm font-rozha-one border border-blue-700"
    );
  if (props.hasShadow) className.push("drop-shadow-xl");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
          aria-label="isExternal"
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
          aria-label="isInternal"
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
      aria-label="button"
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  className: propTypes.string,
  href: propTypes.string,
  isPrimary: propTypes.bool,
  isSmall: propTypes.bool,
  isBase: propTypes.bool,
  isLarge: propTypes.bool,
  isOutline: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
};
