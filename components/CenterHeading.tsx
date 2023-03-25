import React, { ReactElement } from "react";
import PropTypes from "prop-types";

function CenterHeading(props: any): ReactElement {
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
  return (
    <div
      className={`app-center-header ${switchClassHandle()} ${switchSizeHandle()} flex-center`}
    >
      <h4 className="title">{props.title}</h4>
    </div>
  );
}

export default CenterHeading;
CenterHeading.propTypes = {
  title: PropTypes.string,
};
