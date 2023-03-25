import { Empty as AntEmpty } from "antd";
import { ReactElement, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../store/hooks";
import Image from "next/image";
function Empty({
  children,
  description,
  image,
  imageStyle,
}: {
  children?: ReactElement;
  description?: ReactNode;
  image?: ReactNode;
  imageStyle?: any;
}): ReactElement {
  const { t } = useTranslation();
  return (
    <AntEmpty
      image={image || "/empty.png"}
      imageStyle={imageStyle}
      description={description || t("no_data")}
    >
      {children}
    </AntEmpty>
  );
}
export default Empty;
