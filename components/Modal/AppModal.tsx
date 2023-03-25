import React, { ReactElement } from "react";
import PropTypes from "prop-types";
import { Space } from "antd";
import { motion } from "framer-motion";

export interface ModalProps {
  children: any;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  handleSubmit: React.FormEventHandler;
  title?: string;
  setIsShowModal: any;
  btnOKText: string;
  isShowFooter: boolean;
}

function AppModal({
  children,
  size,
  handleSubmit,
  title,
  setIsShowModal,
  btnOKText,
  isShowFooter = true,
}: ModalProps): ReactElement {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`modal-conferm ${size}`}
    >
      <form onSubmit={handleSubmit}>
        <div className="modal-conferm-inner">
          <div className="modal-conferm-head flex-center">
            <h3 className="title ml-auto">{title}</h3>
            <button
                type='button'
              onClick={() => setIsShowModal(false)}
              className="btn-close me-auto btn butt-md butt-red-text"
            ></button>
          </div>
          <div className="modal-conferm-body">{children}</div>
          {isShowFooter && (
            <div className="modal-conferm-footer d-flex">
              <Space>
                <button
                  className="btn butt-sm butt-red-text ml-auto"
                  type="button"
                  onClick={() => setIsShowModal(false)}
                >
                  إلغاء الأمر
                </button>
                <button
                  className="btn butt-sm butt-green submit-button-modal me-auto"
                  type="submit"
                >
                  {btnOKText}
                </button>
              </Space>
            </div>
          )}
        </div>
      </form>
    </motion.div>
  );
}

export default AppModal;
AppModal.propTypes = {
  setIsShowModal: PropTypes.any,
  children: PropTypes.any,
  title: PropTypes.string,
  btnOKText: PropTypes.string,
  isShowFooter: PropTypes.bool,
  handleSubmit: PropTypes.func,
};
