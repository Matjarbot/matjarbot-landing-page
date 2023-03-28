import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import {
  MdLogout,
} from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import PropTypes from "prop-types";
function ProfileMenu({ refs, setIsShowProfileMenu }: any) {

  return (
    <motion.div
      ref={refs}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="nav-profile-list"
    >
      <Link href={`/`}>
        <a
          className="nav-profile-list-header"
        >
          <div className="nav-profile-list-header-img">
            <Image
              src={`/favicon.png`}
              width={25}
              height={25}
              alt=''
            />
          </div>
          <div className="nav-profile-list-header-content">
            <h4 className="title">البخاري بن التوهامي</h4>
          </div>
        </a>
      </Link>
      <div className="nav-profile-list-content">
        <ul className="list-profile-withicons">
          <li>
            <Link href={`/`}>
              <a>
                <span className="circul-icon">
                  <FiSettings />
                </span>
                الإعدادات
              </a>
            </Link>
          </li>
          <li>
            <a>
              <span className="circul-icon">
                <MdLogout />
              </span>
              تسجيل الخروج
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
ProfileMenu.propTypes = {
  setIsShowProfileMenu: PropTypes.func,
  refs: PropTypes.any,
};
export default ProfileMenu;
