import { ReactElement } from "react";
import PropTypes from "prop-types";
import PageHeader from "./PageHeader";
const Panel = ({
  children,
  showAllText,
  handleClick,
  btnSize,
  theme,
  title,
  size,
}: any): ReactElement => {
  return (
    <div className="app-new-panel">
      {title && (
        <PageHeader
          title={title}
          size={size}
          theme={theme}
          btnSize={btnSize}
          handleClick={handleClick}
          showAllText={showAllText}
        />
      )}
      <div className="app-new-panel-body">
        {children}
      </div>
    </div>
  );
};
Panel.propTypes = {
  children: PropTypes.any,
  showAllText: PropTypes.string,
  handleClick: PropTypes.func,
  theme: PropTypes.string,
  btnSize: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
};
export default Panel;
