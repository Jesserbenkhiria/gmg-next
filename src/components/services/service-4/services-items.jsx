import React from 'react';
import SingleServiceFour from '../../common/single-service-4';
import { services_data } from '../../../data';
// const services_items = services_data.filter(ser => ser.service_p_4);

const ServicesItems = () => {
  return (
    <>
      <div className="tp-service-area pt-125">
        <div className="container">
          <div className="row gx-17">
            {services_data.map((ser, i) => {
              return <SingleServiceFour key={i} service={ser} index={i} />
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesItems;