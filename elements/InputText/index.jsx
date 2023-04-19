import React from "react";
import propTypes from "prop-types";

export default function InputText(props) {
  const { name, value, type, placeholder, outerClassName, inputClassName } =
    props;
  const onChange = (e) => {
    const target = {
      target: {
        name: name,
        value: e.target.value,
      },
    };
  };

  if (type === "textarea") {
    return (
      <div className={[outerClassName].join(" ")}>
        <div>
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={[
              `bg-transparent rounded-md border-brown border-2 w-[264px] placeholder:font-kurale placeholder:text-sm h-[141px]`,
              inputClassName,
            ].join(" ")}
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    );
  }
  return (
    <div className={[outerClassName].join(" ")}>
      <div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={[
            `bg-transparent rounded-md border-brown border-2 w-[264px] placeholder:font-kurale placeholder:text-sm`,
            inputClassName,
          ].join(" ")}
        />
      </div>
    </div>
  );
}

InputText.defaultProps = {
  type: "text",
};

InputText.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
