import React from 'react';

const CopyrightArea = ({ copy_right_text = '', conditions = [], color = '' }) => {
  // Ensure `conditions` is an array
  const validConditions = Array.isArray(conditions) ? conditions : [];

  return (
    <div className="tp-copyright-area">
      <div className="container">
        <div className="copyright-border pt-40 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="tp-copyright-left text-lg-start text-start text-md-center">
                <p className={`${color ? 'text-black' : ''}`}>{copy_right_text}</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className={`tp-copyright-right ${color} text-start text-md-center text-lg-end`}>
                {validConditions.length > 0 ? (
                  validConditions.map((c, i) => (
                    <a key={i} href="#">
                      {c}
                    </a>
                  ))
                ) : (
                  <p>No conditions available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightArea;
