import PropTypes from "prop-types";
import { ReactElement } from "react";
import { Table as AntTable } from "antd";
import { useAppSelector } from "../../store/hooks";
import Empty from "./Empty";
import Loading from "./Loading";
function Table({
  data,
  className,
  locale,
  pagination,
  loading,
  footer,
  components,
  columns,
  bordered,
  size,
  sortDirections,
  sticky,
  title,
  tableLayout,
  onChange,
}: {
  data?: Array<any>;
  className?: string;
  pagination?: Object;
  locale?: Object;
  loading?: boolean;
  footer?: any;
  components?: any;
  columns?: Array<any>;
  bordered?: boolean;
  size?: any;
  sortDirections?: Array<any>;
  sticky?: boolean;
  title?: any;
  tableLayout?: any;
  onChange?: any;
}): ReactElement {
  let initialLocale = {
    emptyText: loading ? <Loading /> : <Empty />,
  };

  const mode = useAppSelector((state) => state.theme.type);
  return (
    <AntTable
      bordered={bordered}
      loading={false}
      className={`${className} snap_table_container  ${
        mode === "dark" ? "dr" : ""
      }`}
      dataSource={data}
      columns={columns}
      footer={footer}
      size={size}
      sortDirections={sortDirections}
      components={components}
      pagination={pagination}
      locale={locale || initialLocale}
      sticky={sticky}
      title={title}
      tableLayout={tableLayout}
      onChange={onChange}
    />
  );
}
Table.propTypes = { data: PropTypes.array, className: PropTypes.string };
export default Table;
