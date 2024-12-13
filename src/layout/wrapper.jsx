// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
// export const getLayoutTranslations = async (
//   locale,
//   namespaces = ["common"]
// ) => {
//   return {
//     ...(await serverSideTranslations(locale, namespaces)),
//   };
// };
const Wrapper = ({ children }) => {
  return <>{children}</>;
};

export default Wrapper;
