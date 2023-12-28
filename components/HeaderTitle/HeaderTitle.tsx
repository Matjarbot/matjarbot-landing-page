import React, { ReactElement } from "react";
import { useAppSelector } from "../../store/hooks";
import PropTypes from "prop-types";

function HeaderTitle({ title, tools, noteText, subTool }: any): ReactElement {
  const isDark = useAppSelector((state) => state.theme.type);

  return (
    <div
      className="sb-header-title"
      style={{
        backgroundImage:
          isDark == "dark"
            ? `url('/headerbg_invert.png')`
            : `url('/headerbg.png')`,
      }}
    >
      <div className="sb-header-title-content">
        <h2 className="title">{title}</h2>
        {noteText && <p className="text">{noteText}</p>}
        {subTool && (
          <div
            className="sb-header-title-tools"
            style={{ width: "fit-content" }}
          >
            {subTool}
          </div>
        )}
      </div>
      {tools && <div className="sb-header-title-left-tools">{tools}</div>}
    </div>
  );
}

export default HeaderTitle;

HeaderTitle.propTypes = {
  noteText: PropTypes.string,
  title: PropTypes.string,
  tools: PropTypes.any,
  subTool: PropTypes.any,
};
