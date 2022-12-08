import React from "react";

import { Row, Stack, Column, Text, Img, Button } from "components";

const MenuThreePage = () => {
  function handleNavigate6() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <Row className="bg-gray_300 flex flex-row md:flex-wrap sm:flex-wrap font-poppins items-center mx-[auto] w-[100%]">
        <Stack className="h-[832px] max-w-[1151px] mx-[auto] sm:px-[15px] relative w-[100%]">
          <Column className="absolute flex flex-col justify-start left-[5%] sm:mx-[0] sm:px-[0] top-[4%] sm:w-[100%] w-[15%]">
            <Text
              className="bg-clip-text bg-gradient  text-transparent w-[auto]"
              as="h1"
              variant="h1"
            >
              <span className="text-lime_800 text-[32px] font-poppins font-semibold sm:text-[28px] md:text-[30px]">
                Good
              </span>
              <span className="text-gray_900 text-[32px] font-poppins font-semibold sm:text-[28px] md:text-[30px]">
                Eats
              </span>
            </Text>
            <Text
              className="font-normal sm:mt-[5px] md:mt-[6px] mt-[9px] not-italic text-bluegray_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h4"
              variant="h4"
            >
              Eat good, live good
            </Text>
            <Text
              className="font-medium sm:mt-[23px] md:mt-[30px] mt-[40px] text-light_green_800 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h4"
              variant="h4"
            >
              Today’s Menu
            </Text>
          </Column>
          <Stack className="absolute h-[832px] w-[100%]">
            <Column
              className="absolute bg-cover bg-no-repeat flex flex-col items-end justify-start sm:mx-[0] sm:p-[15px] md:p-[46px] p-[60px] right-[0] sm:w-[100%] w-[59%]"
              style={{ backgroundImage: "url('images/img_ellipse14.png')" }}
            >
              <Column className="flex flex-col justify-start sm:mb-[39px] md:mb-[51px] mb-[66px] md:mr-[13px] mr-[17px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                  <Text
                    className="font-semibold mb-[1px] text-white_A700 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Blends
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[28px] md:ml-[36px] ml-[47px] my-[1px] text-white_A700 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Store
                  </Text>
                  <Text
                    className="font-semibold mb-[1px] sm:ml-[29px] md:ml-[37px] ml-[49px] text-white_A700 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    About
                  </Text>
                  <Text
                    className="font-semibold sm:ml-[29px] md:ml-[37px] ml-[49px] mt-[1px] text-white_A700 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Tea Bar
                  </Text>
                </Row>
                <Column className="bg-white_A700 flex flex-col items-center justify-start md:mr-[17px] mr-[22px] md:mt-[106px] mt-[138px] sm:mt-[82px] sm:mx-[0] sm:p-[15px] md:p-[29px] p-[38px] rounded-radius30 shadow-bs sm:w-[100%] w-[96%]">
                  <Column className="flex flex-col justify-start md:mb-[10px] mb-[13px] sm:mb-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                      <Text
                        className="font-medium text-gray_500 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Coast Continental
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                        <Img
                          src="images/img_favorite.svg"
                          className="flex-shrink-0 sm:h-[26px] md:h-[34px] h-[43px] max-w-[100%] sm:w-[25px] md:w-[33px] w-[43px]"
                          alt="favorite"
                        />
                        <Text
                          className="flex-grow font-semibold text-gray_901 tracking-ls08 md:tracking-ls1 sm:tracking-ls1"
                          as="h4"
                          variant="h4"
                        >
                          899k
                        </Text>
                      </Row>
                    </Row>
                    <Text
                      className="leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[6px] mt-[8px] sm:mx-[0] text-gray_901 sm:w-[100%] w-[69%]"
                      as="h2"
                      variant="h2"
                    >
                      Vegetable Bao Combo
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] ml-[2px] sm:mt-[10px] md:mt-[13px] mt-[17px] sm:mx-[0] not-italic text-gray_901 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[97%]"
                      as="h4"
                      variant="h4"
                    >
                      Healthy Mix of seasonal vegetables and country cheese
                      spread. Serves 5 pieces of Baos uniques tasty bites.
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                        <Text
                          className="font-medium text-bluegray_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Best for 2
                        </Text>
                        <Text
                          className="sm:mt-[2px] md:mt-[3px] mt-[5px] text-light_green_800 md:tracking-ls1 sm:tracking-ls1 tracking-ls12000000000000002 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $55.2
                        </Text>
                      </Column>
                      <Row className="bg-white_A700 border-2 border-gray_300 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] p-[11px] sm:p-[6px] md:p-[8px] rounded-radius265 sm:w-[100%] w-[48%]">
                        <Img
                          src="images/img_arrowright.svg"
                          className="sm:h-[18px] md:h-[24px] h-[30px] max-w-[100%] mb-[1px] sm:w-[17px] md:w-[23px] w-[30px]"
                          alt="arrowright"
                        />
                        <Text
                          className="mt-[1px] text-gray_901 md:tracking-ls1 sm:tracking-ls1 tracking-ls12000000000000002 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          1
                        </Text>
                        <Img
                          src="images/img_plus.svg"
                          className="sm:h-[18px] md:h-[24px] h-[30px] max-w-[100%] mb-[1px] mr-[3px] sm:w-[17px] md:w-[23px] w-[30px]"
                          alt="plus"
                        />
                      </Row>
                    </Row>
                    <Button
                      className="cursor-pointer font-medium min-w-[98%] sm:mt-[22px] md:mt-[28px] mt-[37px] text-[20px] text-center tracking-ls1 w-[max-content]"
                      shape="RoundedBorder10"
                      size="md"
                    >
                      Add to cart
                    </Button>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Column className="absolute flex flex-col justify-start left-[0] sm:mx-[0] md:p-[11px] p-[15px] sm:px-[0] sm:py-[8px] top-[21%] sm:w-[100%] w-[43%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[1px] md:ml-[30px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                <Img
                  src="images/img_group5.png"
                  className="sm:h-[50px] md:h-[65px] h-[83px] rounded-radius50 sm:w-[49px] md:w-[64px] w-[83px]"
                  alt="EllipseTwelve"
                />
                <Column className="flex flex-col md:ml-[17px] ml-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                  <Text
                    className="font-semibold text-bluegray_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Fruity Cheese Cake{" "}
                  </Text>
                  <Text
                    className="leading-[14.00px] md:leading-[normal] sm:leading-[normal] mt-[11px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_900 tracking-ls055 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body1"
                  >
                    Soft eggless cake with cheese, berry spread and berry
                    toppins.
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="absolute flex flex-col justify-start left-[0] sm:mx-[0] md:p-[11px] p-[15px] sm:px-[0] sm:py-[8px] top-[35%] sm:w-[100%] w-[43%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[1px] md:ml-[30px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                <Img
                  src="images/img_ellipse13.png"
                  className="sm:h-[50px] md:h-[65px] h-[83px] rounded-radius50 sm:w-[49px] md:w-[64px] w-[83px]"
                  alt="EllipseThirteen"
                />
                <Column className="flex flex-col md:ml-[17px] ml-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                  <Text
                    className="font-semibold text-bluegray_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Jumbo Pan Cake
                  </Text>
                  <Text
                    className="leading-[14.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[7px] md:mt-[9px] not-italic text-bluegray_900 tracking-ls055 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body1"
                  >
                    12 slices of eggless pancakes with Honey & Herb Toppins.
                  </Text>
                </Column>
              </Row>
            </Column>
            <Stack className="absolute bottom-[38%] h-[114px] left-[0] sm:w-[100%] w-[43%]">
              <Column className="absolute flex flex-col h-[max-content] inset-y-[0] justify-start sm:mx-[0] my-[auto] sm:px-[0] right-[17%] sm:w-[100%] w-[51%]">
                <Text
                  className="font-semibold text-bluegray_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Vegetable Bao Combo
                </Text>
                <Text
                  className="leading-[14.00px] md:leading-[normal] sm:leading-[normal] mt-[11px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_900 tracking-ls055 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  variant="body1"
                >
                  Healthy Mix of seasonal vegetables and country cheese spread.{" "}
                </Text>
              </Column>
              <Column className="absolute bg-bluegray_900 flex flex-col items-end justify-start sm:pl-[15px] md:pl-[42px] pl-[55px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_ellipse14.png"
                    className="sm:h-[50px] md:h-[65px] h-[83px] rounded-radius50 sm:w-[49px] md:w-[64px] w-[83px]"
                    alt="EllipseFourteen"
                  />
                  <Column className="flex flex-col md:ml-[17px] ml-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                    <Text
                      className="font-medium text-white_A700 tracking-ls1 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Vegetable Bao Combo
                    </Text>
                    <Text
                      className="mt-[10px] sm:mt-[5px] md:mt-[7px] not-italic text-white_A700 tracking-ls065 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Healthy Mix of seasonal vegetables and country cheese
                      spread.{" "}
                    </Text>
                  </Column>
                  <div className="bg-light_green_800 h-[114px] sm:h-[69px] md:h-[89px] sm:ml-[10px] md:ml-[13px] ml-[17px] w-[5%]"></div>
                </Row>
              </Column>
            </Stack>
            <Column className="absolute bottom-[24%] flex flex-col justify-start left-[0] sm:mx-[0] md:p-[11px] p-[15px] sm:px-[0] sm:py-[8px] sm:w-[100%] w-[43%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[1px] md:ml-[30px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                <Img
                  src="images/img_ellipse15.png"
                  className="sm:h-[50px] md:h-[65px] h-[83px] rounded-radius50 sm:w-[49px] md:w-[64px] w-[83px]"
                  alt="EllipseFifteen"
                />
                <Column className="flex flex-col md:ml-[17px] ml-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                  <Text
                    className="font-semibold text-bluegray_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Mix Veg Salad Platter
                  </Text>
                  <Text
                    className="leading-[14.00px] md:leading-[normal] sm:leading-[normal] mt-[11px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_900 tracking-ls055 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body1"
                  >
                    True love for veg salads brings you to this dish. A tasty
                    mix of veggies & herbs.
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="absolute bottom-[10%] flex flex-col justify-start left-[0] sm:mx-[0] md:p-[11px] p-[15px] sm:px-[0] sm:py-[8px] sm:w-[100%] w-[43%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[1px] md:ml-[30px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                <Img
                  src="images/img_ellipse16.png"
                  className="sm:h-[50px] md:h-[65px] h-[83px] rounded-radius50 sm:w-[49px] md:w-[64px] w-[83px]"
                  alt="EllipseSixteen"
                />
                <Column className="flex flex-col md:ml-[17px] ml-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                  <Text
                    className="font-semibold text-bluegray_900 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Vegetable Platter
                  </Text>
                  <Text
                    className="leading-[14.00px] md:leading-[normal] sm:leading-[normal] mt-[11px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_900 tracking-ls055 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body1"
                  >
                    Healthy mix of tropical vegetables with ayurvedic herbs.
                  </Text>
                </Column>
              </Row>
            </Column>
          </Stack>
        </Stack>
        <Column className="flex flex-col items-center max-w-[129px] mx-[auto] sm:px-[15px] w-[100%]">
          <Column className="bg-bluegray_900 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[29px] w-[100%]">
            <Img
              src="images/img_facesuserenga.png"
              className="sm:h-[41px] md:h-[52px] h-[67px] sm:mt-[11px] md:mt-[14px] mt-[19px] rounded-radius50 sm:w-[40px] md:w-[51px] w-[67px]"
              alt="facesuserenga"
            />
            <Column className="flex flex-col sm:h-[42px] md:h-[54px] h-[69px] items-end justify-start sm:mt-[27px] md:mt-[35px] mt-[46px] sm:px-[3px] md:px-[4px] px-[6px] sm:w-[41px] md:w-[53px] w-[69px]">
              <Stack className="h-[44px] sm:my-[2px] md:my-[3px] my-[5px] relative sm:w-[100%] w-[88%]">
                <Img
                  src="images/img_car.svg"
                  className="absolute h-[44px] left-[0] max-w-[100%] sm:w-[26px] md:w-[34px] w-[44px]"
                  alt="car"
                />
                <Button className="absolute cursor-pointer font-medium sm:h-[16px] md:h-[21px] h-[26px] right-[0] text-[18px] text-center top-[5%] md:tracking-ls1 sm:tracking-ls1 tracking-ls18 sm:w-[15px] md:w-[20px] w-[26px]">
                  4
                </Button>
              </Stack>
            </Column>
            <Stack className="h-[69px] sm:mt-[17px] md:mt-[23px] mt-[30px] p-[12px] sm:p-[7px] md:p-[9px] relative sm:w-[41px] md:w-[53px] w-[69px]">
              <Img
                src="images/img_clock.svg"
                className="absolute h-[45px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[26px] md:w-[34px] w-[45px]"
                alt="clock"
              />
            </Stack>
            <Stack className="h-[69px] sm:mt-[17px] md:mt-[23px] mt-[30px] md:p-[11px] p-[15px] sm:p-[8px] relative sm:w-[41px] md:w-[53px] w-[69px]">
              <Img
                src="images/img_clock_39X39.svg"
                className="absolute h-[39px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[23px] md:w-[30px] w-[39px]"
                alt="clock One"
              />
            </Stack>
            <Img
              src="images/img_facebook.svg"
              className="common-pointer sm:h-[17px] md:h-[21px] h-[27px] max-w-[100%] sm:mt-[162px] md:mt-[210px] mt-[272px] sm:w-[16px] md:w-[20px] w-[27px]"
              onClick={handleNavigate6}
              alt="facebook"
            />
            <Img
              src="images/img_camera.svg"
              className="sm:h-[17px] md:h-[21px] h-[27px] max-w-[100%] sm:mb-[11px] md:mb-[14px] mb-[19px] sm:mt-[13px] md:mt-[17px] mt-[22px] sm:w-[16px] md:w-[20px] w-[27px]"
              alt="camera"
            />
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default MenuThreePage;
