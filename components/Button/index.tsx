import React, { ReactElement } from "react";
import PropTypes from "prop-types";

function index(props: any): ReactElement {
  const switchClassHandle = () => {
    switch (props.type) {
      case "light":
        return "butt-light";

      case "dark":
        return "butt-dark";

      case "primary":
        return "butt-primary";

      case "primary2":
        return "butt-primary2";

      case "green":
        return "butt-green";

      case "blue":
        return "butt-blue";

      case "red":
        return "butt-red";

      case "yellow":
        return "butt-yellow";

      default:
        return "butt-primary";
    }
  };
  const switchSizeHandle = () => {
    switch (props.size) {
      case "xs":
        return "butt-xs";

      case "sm":
        return "butt-sm";

      case "md":
        return "butt-md";

      case "lg":
        return "butt-lg";

      case "xl":
        return "butt-xl";

      default:
        return "butt-sm";
    }
  };
  return (
    <button
      disabled={props.isLoading || props.disabled}
      className={`btn ${switchClassHandle()} ${switchSizeHandle()} flex-center`}
      onClick={props.handleClick}
    >
      {props.isLoading ? (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      ) : (
        <>
          <span
            className={`material-icons ${
              props.isOutline ? "material-icons-outlined" : ""
            }`}
          >
            {props.icon}
          </span>
          {props.title}
        </>
      )}
    </button>
  );
}

index.propTypes = {
  icon: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
  isOutline: PropTypes.bool,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
};
export default index;
