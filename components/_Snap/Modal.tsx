import { ReactElement } from "react";
import PropTypes from "prop-types";
import { Modal as AntModal } from "antd";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../store/hooks";
function Modal({
  children,
  visible,
  className,
  centered,
  width,
  closeIcon,
  onCancel,
  onDone,
  cancelText,
  doneText,
  style,
  title,
  zIndex,
  mask,
  maskClosable,
}: {
  children?: any;
  visible?: boolean;
  className?: string;
  centered?: boolean;
  width?: number;
  closeIcon?: any;
  onCancel?: any;
  onDone?: any;
  cancelText?: string;
  doneText?: string;
  style?: Object;
  title?: string;
  zIndex?: number;
  mask?: boolean;
  maskClosable?: boolean;
}): ReactElement {
  const { t } = useTranslation();
  const mode = useAppSelector((state) => state.theme.type);

  return (
    <AntModal
      title={title || t("snap_modal_title")}
      className={`${className} snap_modal_container ${
        mode === "dark" ? "dr" : ""
      }`}
      wrapClassName="modal_wrap"
      style={style}
      width={width}
      zIndex={zIndex}
      visible={visible}
      centered={centered}
      mask={mask}
      maskClosable={maskClosable}
      okText={doneText || t("done")}
      onOk={onDone}
      cancelText={cancelText || t("cancel")}
      closeIcon={closeIcon || <IoClose />}
      onCancel={onCancel}
    >
      {children}
    </AntModal>
  );
}

Modal.propTypes = {
  children: PropTypes.any,
  visible: PropTypes.bool,
  className: PropTypes.string,
  centered: PropTypes.bool,
  width: PropTypes.number,
  closeIcon: PropTypes.any,
  onCancel: PropTypes.any,
  onDone: PropTypes.any,
  cancelText: PropTypes.string,
  doneText: PropTypes.string,
  style: Object,
  title: PropTypes.string,
  zIndex: PropTypes.number,
  mask: PropTypes.bool,
  maskClosable: PropTypes.bool,
};
export default Modal;
