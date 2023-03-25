import React, { ReactElement } from "react";
import PropTypes from "prop-types";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { motion } from "framer-motion";
import { FormInput } from "../Forms";

function EditPayMethodAPI({ setIsShowEditPayMethodAPI }: any): ReactElement {

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 31, color: "#3da033" }} spin />
  );
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="modal-conferm"
    >
      <form>
        <div className="modal-conferm-inner">
          <div className="modal-conferm-head flex-center">
            <h3 className="title ml-auto">ربط بوابة الدفع</h3>
            <button
              onClick={() => setIsShowEditPayMethodAPI(false)}
              className="btn-close me-auto btn butt-md butt-red-text"
            ></button>
          </div>
          <div className="modal-conferm-body">
            <Spin indicator={antIcon} spinning={true}>
              <FormInput name="username" size="xs" title="اسم المستخدم" />
              <FormInput name="password" title="كلمة المرور" size="xs" />
              <FormInput name="api_key" title="مفتاح API" size="xs" />
              <FormInput name="merchant_id" title="Merchant id" size="xs" />
            </Spin>
            <div className="py-2">
              <button
                style={{ width: "100%" }}
                className="btn butt-sm butt-green submit-button-modal me-auto mt-2"
                type="submit"
              >
                تعديل
              </button>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
}

export default EditPayMethodAPI;
EditPayMethodAPI.propTypes = {
  setIsShowEditPayMethodAPI: PropTypes.func,
};
