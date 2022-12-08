import React from "react";

import { Row, Stack, Img, Column, Button, Text, List } from "components";

const RightMenuBarPage = () => {
  function handleNavigate1() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate2() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate3() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap font-poppins items-start mx-[auto] sm:pb-[15px] md:pb-[24px] pb-[38px] w-[100%]">
        <Stack className="h-[1704px] max-w-[827px] mx-[auto] sm:px-[15px] relative w-[100%]">
          <Img
            src="images/img_ellipse14.png"
            className="absolute h-[832px] left-[0] max-w-[100%] top-[0] sm:w-[100%] w-[82%]"
            alt="RectangleFour"
          />
          <Column className="absolute border border-deep_purple_A200 border-solid flex flex-col items-end justify-start sm:mx-[0] sm:pb-[10px] md:pb-[13px] pb-[20px] md:px-[13px] sm:px-[15px] px-[20px] right-[0] rounded-radius5 sm:w-[100%] w-[79%]">
            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
              <Column className="bg-bluegray_900 flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[29px] w-[100%]">
                <Img
                  src="images/img_facesuserenga.png"
                  className="sm:h-[35px] md:h-[45px] h-[67px] md:mt-[12px] mt-[19px] sm:mt-[9px] rounded-radius50 sm:w-[34px] md:w-[44px] w-[67px]"
                  alt="facesuserenga"
                />
                <Column className="flex flex-col sm:h-[36px] md:h-[46px] h-[69px] items-end justify-start sm:mt-[23px] md:mt-[30px] mt-[46px] md:px-[3px] sm:px-[3px] px-[6px] sm:w-[35px] md:w-[45px] w-[69px]">
                  <Stack className="h-[44px] sm:my-[2px] md:my-[3px] my-[5px] relative sm:w-[100%] w-[88%]">
                    <Img
                      src="images/img_car.svg"
                      className="absolute h-[44px] left-[0] max-w-[100%] sm:w-[22px] md:w-[28px] w-[44px]"
                      alt="car"
                    />
                    <Button className="absolute cursor-pointer font-medium sm:h-[14px] md:h-[18px] h-[26px] right-[0] text-[18px] text-center top-[5%] md:tracking-ls1 sm:tracking-ls1 tracking-ls18 sm:w-[13px] md:w-[17px] w-[26px]">
                      4
                    </Button>
                  </Stack>
                </Column>
                <Stack className="h-[69px] sm:mt-[15px] md:mt-[19px] mt-[30px] p-[12px] sm:p-[6px] md:p-[7px] relative sm:w-[35px] md:w-[45px] w-[69px]">
                  <Img
                    src="images/img_clock.svg"
                    className="absolute h-[45px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[22px] md:w-[29px] w-[45px]"
                    alt="clock"
                  />
                </Stack>
                <Stack className="h-[69px] sm:mt-[15px] md:mt-[19px] mt-[30px] p-[15px] sm:p-[7px] md:p-[9px] relative sm:w-[35px] md:w-[45px] w-[69px]">
                  <Img
                    src="images/img_clock_39X39.svg"
                    className="absolute h-[39px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[19px] md:w-[25px] w-[39px]"
                    alt="clock One"
                  />
                </Stack>
                <Img
                  src="images/img_facebook.svg"
                  className="common-pointer sm:h-[14px] md:h-[18px] h-[27px] max-w-[100%] sm:mt-[138px] md:mt-[178px] mt-[272px] sm:w-[13px] md:w-[17px] w-[27px]"
                  onClick={handleNavigate1}
                  alt="facebook"
                />
                <Img
                  src="images/img_camera.svg"
                  className="sm:h-[14px] md:h-[18px] h-[27px] max-w-[100%] md:mb-[12px] mb-[19px] sm:mb-[9px] sm:mt-[11px] md:mt-[14px] mt-[22px] sm:w-[13px] md:w-[17px] w-[27px]"
                  alt="camera"
                />
              </Column>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
              <Column className="bg-gray_900 flex flex-col items-center md:mb-[101px] mb-[155px] sm:mb-[78px] mt-[147px] sm:mt-[74px] md:mt-[96px] sm:mx-[0] sm:p-[15px] md:p-[23px] p-[35px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] sm:w-[100%] w-[79%]">
                <Column className="flex flex-col justify-start mb-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                  <Text
                    className="text-light_green_800 md:tracking-ls1 sm:tracking-ls1 tracking-ls12000000000000002 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    My Cart
                  </Text>
                  <List
                    className="sm:gap-[11px] md:gap-[14px] gap-[22px] min-h-[auto] sm:mt-[16px] md:mt-[21px] mt-[32px] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Img
                          src="images/img_group5.png"
                          className="sm:h-[43px] md:h-[55px] h-[83px] rounded-radius50 sm:w-[42px] md:w-[54px] w-[83px]"
                          alt="EllipseTwelve"
                        />
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                            <Text
                              className="font-medium leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-gray_300 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[61%]"
                              as="h4"
                              variant="h4"
                            >
                              Pancake Delite with Cream & Berries
                            </Text>
                            <Text
                              className="font-semibold text-white_A700 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              $ 125.36
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[12px] sm:mt-[6px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                            <Img
                              src="images/img_volume.svg"
                              className="sm:h-[13px] md:h-[16px] h-[24px] max-w-[100%] mb-[1px] sm:w-[12px] md:w-[15px] w-[24px]"
                              alt="volume"
                            />
                            <Text
                              className="md:ml-[3px] sm:ml-[3px] ml-[6px] mt-[4px] text-white_A700 tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              3
                            </Text>
                            <Img
                              src="images/img_plus.svg"
                              className="sm:h-[13px] md:h-[16px] h-[24px] max-w-[100%] md:ml-[3px] sm:ml-[3px] ml-[6px] mt-[1px] sm:w-[12px] md:w-[15px] w-[24px]"
                              alt="plus"
                            />
                          </Row>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Img
                          src="images/img_ellipse14.png"
                          className="sm:h-[43px] md:h-[55px] h-[83px] rounded-radius50 sm:w-[42px] md:w-[54px] w-[83px]"
                          alt="EllipseFourteen"
                        />
                        <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                            <Text
                              className="font-medium leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-gray_300 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[61%]"
                              as="h4"
                              variant="h4"
                            >
                              Mega Bao with Veg & Non-veg combo{" "}
                            </Text>
                            <Text
                              className="font-semibold text-white_A700 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              $ 62.50
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[12px] sm:mt-[6px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                            <Img
                              src="images/img_volume.svg"
                              className="sm:h-[13px] md:h-[16px] h-[24px] max-w-[100%] mb-[1px] sm:w-[12px] md:w-[15px] w-[24px]"
                              alt="volume One"
                            />
                            <Text
                              className="sm:ml-[3px] md:ml-[4px] ml-[7px] mt-[4px] text-white_A700 tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              1
                            </Text>
                            <Img
                              src="images/img_plus.svg"
                              className="sm:h-[13px] md:h-[16px] h-[24px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[1px] sm:w-[12px] md:w-[15px] w-[24px]"
                              alt="plus One"
                            />
                          </Row>
                        </Column>
                      </Row>
                    </Column>
                  </List>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between md:ml-[3px] ml-[5px] sm:mt-[22px] md:mt-[28px] mt-[44px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <Column className="flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
                      <Text
                        className="ml-[1px] text-gray_500 tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        I have coupon
                      </Text>
                      <Row className="bg-gray_700 flex flex-row md:flex-wrap sm:flex-wrap items-end md:mt-[3px] sm:mt-[3px] mt-[6px] sm:mx-[0] p-[3px] rounded-radius145 sm:w-[100%] w-[63%]">
                        <div className="bg-gray_901 sm:h-[12px] md:h-[15px] h-[22px] mb-[1px] ml-[2px] rounded-radius50 sm:w-[11px] md:w-[14px] w-[22px]"></div>
                        <Text
                          className="sm:ml-[4px] md:ml-[5px] ml-[8px] my-[4px] text-gray_900 tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          NO
                        </Text>
                      </Row>
                    </Column>
                    <Text
                      className="leading-[30.00px] md:leading-[normal] sm:leading-[normal] mb-[2px] sm:mx-[0] text-right text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls12000000000000002 sm:w-[100%] w-[47%]"
                      as="h2"
                      variant="h2"
                    >
                      Total amount payable:
                      <br />
                      $187.86
                    </Text>
                  </Row>
                  <Button
                    className="cursor-pointer font-medium min-w-[85%] sm:ml-[15px] md:ml-[20px] ml-[31px] sm:mt-[19px] md:mt-[24px] mt-[38px] text-[20px] text-center tracking-ls1 w-[max-content]"
                    shape="RoundedBorder10"
                    size="md"
                  >
                    Checkout
                  </Button>
                </Column>
              </Column>
              <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                <Column className="bg-bluegray_900 flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[29px] w-[100%]">
                  <Img
                    src="images/img_facesuserenga.png"
                    className="sm:h-[35px] md:h-[45px] h-[67px] md:mt-[12px] mt-[19px] sm:mt-[9px] rounded-radius50 sm:w-[34px] md:w-[44px] w-[67px]"
                    alt="facesuserenga One"
                  />
                  <Column className="flex flex-col sm:h-[36px] md:h-[46px] h-[69px] items-end justify-start sm:mt-[23px] md:mt-[30px] mt-[46px] md:px-[3px] sm:px-[3px] px-[6px] sm:w-[35px] md:w-[45px] w-[69px]">
                    <Stack className="h-[44px] sm:my-[2px] md:my-[3px] my-[5px] relative sm:w-[100%] w-[88%]">
                      <Img
                        src="images/img_car.svg"
                        className="absolute h-[44px] left-[0] max-w-[100%] sm:w-[22px] md:w-[28px] w-[44px]"
                        alt="car One"
                      />
                      <Button className="absolute cursor-pointer font-medium sm:h-[14px] md:h-[18px] h-[26px] right-[0] text-[18px] text-center top-[5%] md:tracking-ls1 sm:tracking-ls1 tracking-ls18 sm:w-[13px] md:w-[17px] w-[26px]">
                        4
                      </Button>
                    </Stack>
                  </Column>
                  <Stack className="h-[69px] sm:mt-[15px] md:mt-[19px] mt-[30px] p-[12px] sm:p-[6px] md:p-[7px] relative sm:w-[35px] md:w-[45px] w-[69px]">
                    <Img
                      src="images/img_clock.svg"
                      className="absolute h-[45px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[22px] md:w-[29px] w-[45px]"
                      alt="clock Two"
                    />
                  </Stack>
                  <Stack className="h-[69px] sm:mt-[15px] md:mt-[19px] mt-[30px] p-[15px] sm:p-[7px] md:p-[9px] relative sm:w-[35px] md:w-[45px] w-[69px]">
                    <Img
                      src="images/img_clock_39X39.svg"
                      className="absolute h-[39px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[19px] md:w-[25px] w-[39px]"
                      alt="clock Three"
                    />
                  </Stack>
                  <Img
                    src="images/img_facebook.svg"
                    className="common-pointer sm:h-[14px] md:h-[18px] h-[27px] max-w-[100%] sm:mt-[138px] md:mt-[178px] mt-[272px] sm:w-[13px] md:w-[17px] w-[27px]"
                    onClick={handleNavigate2}
                    alt="facebook One"
                  />
                  <Img
                    src="images/img_camera.svg"
                    className="sm:h-[14px] md:h-[18px] h-[27px] max-w-[100%] md:mb-[12px] mb-[19px] sm:mb-[9px] sm:mt-[11px] md:mt-[14px] mt-[22px] sm:w-[13px] md:w-[17px] w-[27px]"
                    alt="camera One"
                  />
                </Column>
              </Column>
            </Row>
          </Column>
        </Stack>
        <Column className="bg-gray_900 flex flex-col items-center justify-start max-w-[484px] mb-[1484px] sm:mb-[754px] md:mb-[975px] sm:ml-[14px] md:ml-[19px] sm:mt-[25px] md:mt-[32px] mt-[50px] mx-[auto] sm:p-[15px] md:p-[28px] p-[43px] sm:px-[15px] rounded-radius20 w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
            <Img
              src="images/img_group5.png"
              className="sm:h-[43px] md:h-[55px] h-[83px] rounded-radius50 sm:w-[42px] md:w-[54px] w-[83px]"
              alt="EllipseTwelve One"
            />
            <Column className="flex flex-col ml-[15px] md:ml-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                <Text
                  className="font-medium leading-[20.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-gray_300 tracking-ls08 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[61%]"
                  as="h4"
                  variant="h4"
                >
                  Pancake Delite with Cream & Berries
                </Text>
                <Text
                  className="font-semibold text-white_A700 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  $ 25.36
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[12px] sm:mt-[6px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                <Img
                  src="images/img_volume.svg"
                  className="sm:h-[13px] md:h-[16px] h-[24px] max-w-[100%] mb-[1px] sm:w-[12px] md:w-[15px] w-[24px]"
                  alt="volume Two"
                />
                <Text
                  className="md:ml-[3px] sm:ml-[3px] ml-[6px] mt-[4px] text-white_A700 tracking-ls07000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  3
                </Text>
                <Img
                  src="images/img_plus.svg"
                  className="sm:h-[13px] md:h-[16px] h-[24px] max-w-[100%] md:ml-[3px] sm:ml-[3px] ml-[6px] mt-[1px] sm:w-[12px] md:w-[15px] w-[24px]"
                  alt="plus Two"
                />
              </Row>
            </Column>
          </Row>
        </Column>
        <Column className="flex flex-col items-center justify-start max-w-[129px] sm:ml-[19px] md:ml-[25px] mx-[auto] sm:px-[15px] w-[100%]">
          <Column className="bg-bluegray_900 flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[29px] w-[100%]">
            <Img
              src="images/img_facesuserenga.png"
              className="sm:h-[35px] md:h-[45px] h-[67px] md:mt-[12px] mt-[19px] sm:mt-[9px] rounded-radius50 sm:w-[34px] md:w-[44px] w-[67px]"
              alt="facesuserenga Two"
            />
            <Column className="flex flex-col sm:h-[36px] md:h-[46px] h-[69px] items-end justify-start sm:mt-[23px] md:mt-[30px] mt-[46px] md:px-[3px] sm:px-[3px] px-[6px] sm:w-[35px] md:w-[45px] w-[69px]">
              <Stack className="h-[44px] sm:my-[2px] md:my-[3px] my-[5px] relative sm:w-[100%] w-[88%]">
                <Img
                  src="images/img_car.svg"
                  className="absolute h-[44px] left-[0] max-w-[100%] sm:w-[22px] md:w-[28px] w-[44px]"
                  alt="car Two"
                />
                <Button className="absolute cursor-pointer font-medium sm:h-[14px] md:h-[18px] h-[26px] right-[0] text-[18px] text-center top-[5%] md:tracking-ls1 sm:tracking-ls1 tracking-ls18 sm:w-[13px] md:w-[17px] w-[26px]">
                  3
                </Button>
              </Stack>
            </Column>
            <Stack className="h-[69px] sm:mt-[15px] md:mt-[19px] mt-[30px] p-[12px] sm:p-[6px] md:p-[7px] relative sm:w-[35px] md:w-[45px] w-[69px]">
              <Img
                src="images/img_clock.svg"
                className="absolute h-[45px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[22px] md:w-[29px] w-[45px]"
                alt="clock Four"
              />
            </Stack>
            <Stack className="h-[69px] sm:mt-[15px] md:mt-[19px] mt-[30px] p-[15px] sm:p-[7px] md:p-[9px] relative sm:w-[35px] md:w-[45px] w-[69px]">
              <Img
                src="images/img_clock_39X39.svg"
                className="absolute h-[39px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[19px] md:w-[25px] w-[39px]"
                alt="clock Five"
              />
            </Stack>
            <Img
              src="images/img_facebook.svg"
              className="common-pointer sm:h-[14px] md:h-[18px] h-[27px] max-w-[100%] sm:mt-[138px] md:mt-[178px] mt-[272px] sm:w-[13px] md:w-[17px] w-[27px]"
              onClick={handleNavigate3}
              alt="facebook Two"
            />
            <Img
              src="images/img_camera.svg"
              className="sm:h-[14px] md:h-[18px] h-[27px] max-w-[100%] md:mb-[12px] mb-[19px] sm:mb-[9px] sm:mt-[11px] md:mt-[14px] mt-[22px] sm:w-[13px] md:w-[17px] w-[27px]"
              alt="camera Two"
            />
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default RightMenuBarPage;
