import React from 'react';
import { useRouter } from 'next/router';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import { services_data } from '../../data';
import ServiceDetailsMain from '../../components/service-details';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Generate paths for all service IDs
export const getStaticPaths = async () => {
  const paths = services_data.map((service) => ({
    params: { id: service.id.toString() }, // Ensure ID is a string
  }));
  return {
    paths,
    fallback: true, // Enable fallback for non-pre-rendered paths
  };
};

// Fetch translations and service data for the page
export const getStaticProps = async ({ params, locale }) => {
  const service = services_data.find(
    (item) => item.id.toString() === params.id
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // Load translations
      service: service || null, // Pass the specific service data
    },
    revalidate: 10, // Optional: Revalidate data every 10 seconds
  };
};

const ServiceDynamicDetails = ({ service }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>; // Show a loading state during fallback
  }

  return (
    <Wrapper>
      <SEO pageTitle={service?.title || 'Service Details'} />
      <ServiceDetailsMain service={service} />
    </Wrapper>
  );
};

export default ServiceDynamicDetails;
