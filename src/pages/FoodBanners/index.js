import React from "react";

import { Row, Img } from "components";

const FoodBannersPage = () => {
  return (
    <>
      <Row className="bg-gray_300 flex flex-row md:flex-wrap sm:flex-wrap items-center mx-[auto] w-[100%]">
        <Img
          src="images/img_group5.png"
          className="max-w-[678px] mx-[auto] sm:px-[15px] w-[100%]"
          alt="RectangleTwo"
        />
        <Img
          src="images/img_ellipse13.png"
          className="max-w-[678px] mx-[auto] sm:px-[15px] w-[100%]"
          alt="RectangleThree"
        />
        <Img
          src="images/img_ellipse14.png"
          className="max-w-[678px] mx-[auto] sm:px-[15px] w-[100%]"
          alt="RectangleFour"
        />
        <Img
          src="images/img_ellipse15.png"
          className="max-w-[678px] mx-[auto] sm:px-[15px] w-[100%]"
          alt="RectangleFive"
        />
        <Img
          src="images/img_ellipse16.png"
          className="max-w-[678px] mx-[auto] sm:px-[15px] w-[100%]"
          alt="RectangleSix"
        />
      </Row>
    </>
  );
};

export default FoodBannersPage;
