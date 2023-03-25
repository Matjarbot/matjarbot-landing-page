import React, { ReactElement } from "react";
import PropTypes from "prop-types";

function PageHeader(props: any): ReactElement {
  const switchClassHandle = () => {
    switch (props.theme) {
      case "light":
        return "light";

      case "dark":
        return "dark";

      case "primary":
        return "primary";

      case "primary2":
        return "primary2";

      default:
        return "primary";
    }
  };
  const switchSizeHandle = () => {
    switch (props.size) {
      case "xs":
        return "xs";

      case "sm":
        return "sm";

      case "md":
        return "md";

      case "lg":
        return "lg";

      default:
        return "sm";
    }
  };
  const switchBTNSizeHandle = () => {
    switch (props.btnSize) {
      case "xs":
        return "xs";

      case "sm":
        return "sm";

      case "md":
        return "md";

      case "lg":
        return "lg";

      default:
        return "sm";
    }
  };
  return (
    <div
      className={`app-new-header ${switchClassHandle()} ${switchSizeHandle()} flex-center justify-content-between`}
    >
      <h4 className="title">{props.title}</h4>
      {props.showAllText && (
        <button
          type="button"
          onClick={props.handleClick}
          className={`btn flex-center butt-${switchBTNSizeHandle()} butt-${switchClassHandle()}`}
        >
          {props.showAllText}
        </button>
      )}
    </div>
  );
}

export default PageHeader;
PageHeader.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  btnSize: PropTypes.string,
  theme: PropTypes.string,
  showAllText: PropTypes.string,
  handleClick: PropTypes.func,
};
