import React, { ReactElement } from "react";
import PropTypes from "prop-types";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { motion } from "framer-motion";
import { FormInput } from "../Forms";

function AddNewSubCategory({
  setIsShowAddNewSubCategory,
  category_id,
}: any): ReactElement {
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
            <h3 className="title ml-auto">إضافة تصنيف فرعي جديد</h3>
            <button
              onClick={() => setIsShowAddNewSubCategory(false)}
              className="btn-close me-auto btn butt-md butt-red-text"
            ></button>
          </div>
          <div className="modal-conferm-body">
            <Spin indicator={antIcon} spinning={false}>
              <FormInput name="name_ar" size="xs" title="اسم التصنيف بالعربي" />
              <FormInput
                name="name_en"
                title="اسم التصنيف بالإنجليزي"
                size="xs"
              />
            </Spin>
            <div className="py-2">
              <button
                style={{ width: "100%" }}
                className="btn butt-sm butt-green submit-button-modal me-auto mt-2"
                type="submit"
              >
                إضافة
              </button>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
}

export default AddNewSubCategory;
AddNewSubCategory.propTypes = {
  setIsShowAddNewSubCategory: PropTypes.func,
  category_id: PropTypes.any,
};
