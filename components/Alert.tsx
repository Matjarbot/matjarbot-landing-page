import React, { ReactElement } from "react";
import PropTypes from "prop-types";
interface AlertVars {
  text: string;
  title?: string;
  theme?: 'red' | 'green' | 'blue' | 'orange' | undefined;
  icon?: string;
}
function Alert({ text, title, icon, theme }: AlertVars): ReactElement {
  return (
    <div className={`new-alert ${theme}`}>
      {icon && (
        <div className="new-alert-icon">
          <span className="material-icons material-icons-outlined">{icon}</span>
        </div>
      )}
      <div className="new-alert-text">
        {title && <p className="title">{title}</p>}
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

Alert.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default Alert;
