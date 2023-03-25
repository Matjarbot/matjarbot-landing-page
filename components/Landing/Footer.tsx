import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="sb-footer">
      <ul className="socials-links">
        <li>
          <a href="https://web.facebook.com/matjarbotsys" target={'_blank'} rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/matjarbotsys" target={'_blank'} rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="https://dz.linkedin.com/company/matjarbot?trk=ppro_cprof" target={'_blank'} rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/matjarbotsys/" target={'_blank'} rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
      </ul>
      <p className="copy-text">
        {t("copyright_text")} {new Date().getFullYear()}
      </p>
      <ul className="footer-links">
        <li>
          <Link href={`/`}>
            <a>{t("main")}</a>
          </Link>
        </li>
        <li>
          <Link href={`/privacy`}>
            <a>{t("privacy_text")}</a>
          </Link>
        </li>
        <li>
          <Link href={`/terms`}>
            <a>{t("terms_text")}</a>
          </Link>
        </li>
        <li>
          <Link href={`/plans`}>
            <a>{t("plan_text")}</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
