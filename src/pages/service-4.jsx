import { Wrapper } from "../layout";
import SEO from "../components/seo";
import ServiceFourMain from "../components/services/service-4";
import { serverSideTranslations } from "next-i18next/dist/commonjs/serverSideTranslations";

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
