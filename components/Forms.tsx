import React, { ReactElement } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export function FormInput({
  name,
  value,
  title,
  handleChange,
  validationsErrors,
  size,
  isLoading,
  type = "text",
  isVisibleBtn = false,
  setIsShowenPass,
  isShowenPass,
}: any): ReactElement {
  const switchSize = (): string => {
    switch (size) {
        case "sm":
            return "sm";
        case "xs":
            return "xs";
        case "lg":
            return "lg";
        default:
            return "";
    }
};
  return (
    <div className={`app-form ${switchSize()}`} style={{ position: "relative" }}>
      <label className={`label-block ${isLoading ? 'disabled' : ''}`} htmlFor={`input-${name}`}>
        {title}
      </label>
      <input
        type={type}
        id={`input-${name}`}
        name={name}
        disabled={isLoading}
        placeholder={title}
        className={
          "app-inputs " +
          (validationsErrors && " has-error ") +
          (isLoading ? " disabled" : '')
        }
        autoComplete="off"
        onChange={handleChange}
        value={value}
      />
      {isVisibleBtn && (
        <button
          className={`form-toggle-password ${isShowenPass ? "is-active" : ""}`}
          type="button"
          onClick={() => setIsShowenPass(!isShowenPass)}
        >
          <span className="material-icons material-icons-outlined">
            {isShowenPass ? "visibility_off" : "visibility"}
          </span>
        </button>
      )}
      {validationsErrors && (
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="app-form-note form-note-error"
          >
            <p className="text">{validationsErrors}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}

FormInput.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string,
  size: PropTypes.string,
  setIsShowenPass: PropTypes.func,
  isShowenPass: PropTypes.bool,
  handleChange: PropTypes.func,
  title: PropTypes.string,
  isLoading: PropTypes.bool,
  isVisibleBtn: PropTypes.bool,
  type: PropTypes.string,
  validationsErrors: PropTypes.string,
};
export function FormSelect(props: any): ReactElement {
  const switchSize = (): string => {
    switch (props.size) {
        case "sm":
            return "sm";
        case "xs":
            return "xs";
        case "lg":
            return "lg";
        default:
            return "";
    }
};
  return (
    <div className={`app-form ${props.size}`}>
      <label className="label-block" style={{ color: props.isLoading && '#ccc' }} htmlFor={`input-${props.name}`}>
        {props.title}
      </label>
      <select
        style={{ color: props.isLoading && '#ccc' }}
        id={`input-${props.name}`}
        name={props.name}
        disabled={props.isLoading}
        className={
          "app-inputs select " + (props.validationsErrors && " has-error")
        }
        onChange={props.handleChange}
        value={props.value}
        defaultValue={props.value}
      >
        <option value="">{props.title}</option>
        {props.data &&
          props.data.map((item: any, i: number) => (
            <option key={i} value={item.id}>
              {item.name_ar}
            </option>
          ))}
      </select>
      {props.validationsErrors && (
        <div style={{ overflow: "hidden" }}>
          <div className="app-form-note form-note-error">
            <p className="text">{props.validationsErrors}</p>
          </div>
        </div>
      )}
    </div>
  );
}

FormSelect.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string,
  size: PropTypes.string,
  isLoading: PropTypes.bool,
  handleChange: PropTypes.func,
  title: PropTypes.string,
  validationsErrors: PropTypes.string,
  data: PropTypes.array,
};
export function FormSelect2(props: any): ReactElement {
  const switchSize = (): string => {
    switch (props.size) {
        case "sm":
            return "sm";
        case "xs":
            return "xs";
        case "lg":
            return "lg";
        default:
            return "";
    }
};
  return (
    <div className={`app-form ${props.size}`}>
      <label className="label-block" htmlFor={`input-${props.name}`}>
        {props.title}
      </label>
      <select
        id={`input-${props.name}`}
        name={props.name}
        disabled={props.isLoading}
        className={
          "app-inputs select " + (props.validationsErrors && " has-error")
        }
        onChange={props.handleChange}
        value={props.value}
      >
        <option value="">{props.title}</option>
        {props.data &&
          props.data.map((item: any, i: number) => (
            <option key={i} value={item.name}>
              {item.name}
            </option>
          ))}
      </select>
      {props.validationsErrors && (
        <div style={{ overflow: "hidden" }}>
          <div className="app-form-note form-note-error">
            <p className="text">{props.validationsErrors}</p>
          </div>
        </div>
      )}
    </div>
  );
}

FormSelect2.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string,
  isLoading: PropTypes.bool,
  handleChange: PropTypes.func,
  title: PropTypes.string,
  validationsErrors: PropTypes.string,
  data: PropTypes.array,
};

export function FormTextarea({
  name,
  value,
  title,
  size,
  handleChange,
  validationsErrors,
  isLoading,
  minHeight = 150,
}: any): ReactElement {
  const switchSize = (): string => {
    switch (size) {
        case "sm":
            return "sm";
        case "xs":
            return "xs";
        case "lg":
            return "lg";
        default:
            return "";
    }
};
  return (
    <div className={`app-form ${size}`}>
      <label className="label-block" htmlFor={`input-${name}`}>
        {title}
      </label>
      <textarea
        id={`input-${name}`}
        name={name}
        disabled={isLoading}
        placeholder={title}
        style={{
          minHeight: minHeight,
        }}
        className={"app-inputs " + (validationsErrors && " has-error")}
        autoComplete="off"
        onChange={handleChange}
        value={value}
      >
        {value}
      </textarea>
      {validationsErrors && (
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="app-form-note form-note-error"
          >
            <p className="text">{validationsErrors}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}

FormTextarea.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string,
  size: PropTypes.string,
  isLoading: PropTypes.bool,
  handleChange: PropTypes.func,
  title: PropTypes.string,
  minHeight: PropTypes.number,
  validationsErrors: PropTypes.string,
};
