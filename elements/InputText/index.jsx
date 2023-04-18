import React from "react";
import propTypes from "prop-types";

export default function InputText(props) {
  const {
    name,
    value,
    prepend,
    append,
    type,
    placeholder,
    outerClassName,
    inputClassName,
  } = props;
  const onChange = (e) => {
    const target = {
      target: {
        name: name,
        value: e.target.value,
      },
    };
  };
  return <div>InputText</div>;
}

InputText.defaultProps = {
  type: "text",
};

InputText.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
