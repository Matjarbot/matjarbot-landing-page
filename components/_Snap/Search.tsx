import { ReactElement } from "react";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function Search({
  title,
  onChange,
  icon,
}: {
  title?: string;
  onChange?: any;
  icon?: ReactElement;
}): ReactElement {
  const { t } = useTranslation();
  return (
    <div className="matjarbot-search-form">
      <input
        type="text"
        className="sb-form"
        placeholder={title || t("search")}
        onChange={onChange}
      />
      <span className="search-icon">{icon || <FaSearch />}</span>
    </div>
  );
}

Search.propTypes = { title: PropTypes.string, onChange: PropTypes.func };
export default Search;
