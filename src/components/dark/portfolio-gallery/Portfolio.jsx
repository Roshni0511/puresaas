'use client';
import React, { useLayoutEffect } from 'react';
import data from '../../../data/portfolios/workstand.json';
import initIsotope from '../../../common/initIsotope';

function Portfolio() {
  useLayoutEffect(() => {
    initIsotope('gallery');
  }, []);
  return (
    <section className="work-minimal section-padding sub-bg">
      <div className="container-xxl">
        <div className="row">
          <div className="filtering col-12 mb-50 text-center">
            <div className="filter">
              <span className="text">Filter By :</span>
              <span dataFilter="*" className="active">
                Show All
              </span>
              <span dataFilter=".art">Art</span>
              <span dataFilter=".Branding">Branding</span>
              <span dataFilter=".design">Design</span>
              <span dataFilter=".marketing">Marketing</span>
            </div>
          </div>
        </div>
        <div className="gallery row stand-marg">
          {data.map((item, i) => (
            <div key={i} className={`col-lg-4 col-md-6 items ${item.subTitle}`}>
              <div className="item mt-40">
                <div className="img">
                  <img src={item.img} alt="" />
                  <div className="cont d-flex align-items-center">
                    <div>
                      <h5 className="fz-22">
                        <a href={item.link}>{item.title}</a>
                      </h5>
                      <p>
                        <a href={item.link}>{item.subTitle.split(' ')[0]}</a>
                      </p>
                    </div>
                    <div className="ml-auto">
                      <a href={item.link} className="ti-arrow-top-right"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
