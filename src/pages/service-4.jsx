import { Wrapper } from "../layout";
import SEO from "../components/seo";

import { serverSideTranslations } from "next-i18next/dist/commonjs/serverSideTranslations";
import dynamic from "next/dynamic";
const ServiceFourMain = dynamic(
  () => import("../components/services/service-4"),
  { ssr: false }
);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])), // Load the 'common' namespace
  },
});

export default function index() {
  return (
    <Wrapper>
      <SEO pageTitle={"Service Three"} />
      <ServiceFourMain />
    </Wrapper>
  );
}
