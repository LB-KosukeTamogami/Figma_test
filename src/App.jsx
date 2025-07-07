import React, { useState } from "react";
import "./index.css";
import { translations } from "./translations";

export default function App() {
  const [language, setLanguage] = useState("ja");
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === "ja" ? "en" : "ja");
  };

  return (
    <div className="main-container flex w-[1280px] flex-col items-start flex-nowrap bg-[#fff] relative mx-auto my-0">
      <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden">
        <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[1]">
          <div className="flex pt-[12px] pr-[40px] pb-[12px] pl-[40px] justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e5e8ea] relative z-[2]">
            <div className="flex w-[196px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[3]">
              <div className="flex w-[16px] flex-col items-start shrink-0 flex-nowrap relative z-[4]">
                <div className="w-[16px] grow shrink-0 basis-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/eLHJDQDksR.png)] bg-cover bg-no-repeat relative overflow-hidden z-[5]" />
              </div>
              <div className="flex w-[164px] h-[23px] flex-col items-start shrink-0 flex-nowrap relative z-[6]">
                <span className="h-[23px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[18px] font-bold leading-[23px] text-[#111416] relative text-left whitespace-nowrap z-[7]">
                  {t.companyName}
                </span>
              </div>
            </div>
            <div className="flex gap-[32px] justify-end items-start grow shrink-0 basis-0 flex-nowrap relative z-[8]">
              <div className="flex w-[330px] h-[40px] gap-[36px] items-center shrink-0 flex-nowrap relative z-[9]">
                <div className="flex w-[61px] flex-col items-start shrink-0 flex-nowrap relative z-10">
                  <span className="h-[21px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-medium leading-[21px] text-[#111416] relative text-left whitespace-nowrap z-[11]">
                    {t.nav.overview}
                  </span>
                </div>
                <div className="flex w-[88px] flex-col items-start shrink-0 flex-nowrap relative z-[12]">
                  <span className="h-[21px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-medium leading-[21px] text-[#111416] relative text-left whitespace-nowrap z-[13]">
                    {t.nav.caseStudies}
                  </span>
                </div>
                <div className="flex w-[46px] flex-col items-start shrink-0 flex-nowrap relative z-[14]">
                  <span className="h-[21px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-medium leading-[21px] text-[#111416] relative text-left whitespace-nowrap z-[15]">
                    {t.nav.pricing}
                  </span>
                </div>
                <div className="flex w-[27px] flex-col items-start shrink-0 flex-nowrap relative z-[16]">
                  <span className="h-[21px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-medium leading-[21px] text-[#111416] relative text-left whitespace-nowrap z-[17]">
                    {t.nav.faq}
                  </span>
                </div>
              </div>
              <button 
                onClick={toggleLanguage}
                className="flex h-[40px] px-[12px] items-center justify-center gap-[4px] flex-nowrap bg-[#f2f2f4] rounded-[20px] relative overflow-hidden cursor-pointer hover:bg-[#e5e8ea] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1.66669C5.39756 1.66669 1.66663 5.39762 1.66663 10C1.66663 14.6024 5.39756 18.3334 10 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39762 14.6024 1.66669 10 1.66669ZM16.4729 6.66669H13.7916C13.5104 5.58335 13.0833 4.55419 12.5208 3.61044C14.1645 4.21877 15.502 5.29377 16.4729 6.66669ZM10 3.36044C10.775 4.36252 11.3583 5.47919 11.6604 6.66669H8.33954C8.64163 5.47919 9.22496 4.36252 10 3.36044ZM3.68538 11.6667C3.55621 11.1271 3.33329 10.5771 3.33329 10C3.33329 9.42294 3.55621 8.87294 3.68538 8.33335H6.70829C6.62079 8.88752 6.66663 9.44169 6.66663 10C6.66663 10.5584 6.62079 11.1125 6.70829 11.6667H3.68538ZM5.52704 13.3334H8.20829C8.48954 14.4167 8.91663 15.4459 9.47913 16.3896C7.83538 15.7813 6.49788 14.7063 5.52704 13.3334ZM8.20829 6.66669H5.52704C6.49788 5.29377 7.83538 4.21877 9.47913 3.61044C8.91663 4.55419 8.48954 5.58335 8.20829 6.66669ZM10 16.6396C9.22496 15.6375 8.64163 14.5209 8.33954 13.3334H11.6604C11.3583 14.5209 10.775 15.6375 10 16.6396ZM11.9625 11.6667H8.03746C7.93746 11.1125 7.83329 10.5584 7.83329 10C7.83329 9.44169 7.93746 8.87919 8.03746 8.33335H11.9625C12.0625 8.87919 12.1666 9.44169 12.1666 10C12.1666 10.5584 12.0625 11.1125 11.9625 11.6667ZM12.5208 16.3896C13.0833 15.4459 13.5104 14.4167 13.7916 13.3334H16.4729C15.502 14.7063 14.1645 15.7813 12.5208 16.3896ZM13.2916 11.6667C13.3791 11.1125 13.3333 10.5584 13.3333 10C13.3333 9.44169 13.3791 8.88752 13.2916 8.33335H16.3145C16.4437 8.87294 16.6666 9.42294 16.6666 10C16.6666 10.5771 16.4437 11.1271 16.3145 11.6667H13.2916Z" fill="#111416"/>
                </svg>
                <span className="font-['Manrope'] text-[14px] font-medium leading-[21px] text-[#111416]">
                  {language === "ja" ? "EN" : "日本語"}
                </span>
              </button>
              <div className="flex w-[114px] h-[40px] pt-0 pr-[16px] pb-0 pl-[16px] justify-center items-center shrink-0 flex-nowrap bg-[#dbe8f2] rounded-[20px] relative overflow-hidden z-[18]">
                <div className="flex w-[82px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden z-[19]">
                  <span className="h-[21px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-bold leading-[21px] text-[#111416] relative text-center overflow-hidden whitespace-nowrap z-20">
                    {t.nav.getStarted}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex pt-[20px] pr-[160px] pb-[20px] pl-[160px] justify-center items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[21]">
            <div className="flex flex-col items-start grow shrink-0 basis-0 flex-nowrap relative overflow-hidden z-[22]">
              <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[23]">
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[24]">
                  <div className="h-[480px] self-stretch shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/nUhg12s8ac.png)] bg-cover bg-no-repeat rounded-[12px] relative overflow-hidden z-[25]">
                    <div className="flex w-[848px] flex-col gap-[8px] items-start flex-nowrap relative z-[26] mt-[285px] mr-0 mb-0 ml-[216px]">
                      <div className="flex h-[120px] flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[27]">
                        <span className="flex w-[848px] h-[120px] justify-start items-start self-stretch shrink-0 font-['Manrope'] text-[48px] font-extrabold leading-[60px] text-[#fff] tracking-[-2px] relative text-left z-[28]" style={{ whiteSpace: 'pre-line' }}>
                          {t.hero.title}
                        </span>
                      </div>
                      <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[29]">
                        <span className="flex w-[848px] h-[48px] justify-start items-start self-stretch shrink-0 font-['Manrope'] text-[16px] font-normal leading-[24px] text-[#fff] relative text-left z-30">
                          {t.hero.description}
                        </span>
                      </div>
                    </div>
                    <div className="flex w-[134px] h-[48px] pt-0 pr-[20px] pb-0 pl-[20px] justify-center items-center flex-nowrap bg-[#dbe8f2] rounded-[24px] relative overflow-hidden z-[31] mt-[32px] mr-0 mb-0 ml-[216px]">
                      <div className="flex w-[94px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden z-[32]">
                        <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[24px] text-[#111416] relative text-center overflow-hidden whitespace-nowrap z-[33]">
                          {t.hero.cta}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pt-[40px] pr-[16px] pb-[40px] pl-[16px] flex-col gap-[40px] items-start self-stretch shrink-0 flex-nowrap relative z-[34]">
                <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[35]">
                  <div className="flex w-[720px] h-[45px] flex-col items-start shrink-0 flex-nowrap relative z-[36]">
                    <span className="h-[45px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[36px] font-extrabold leading-[45px] text-[#111416] tracking-[-1px] relative text-left whitespace-nowrap z-[37]">
                      {t.services.title}
                    </span>
                  </div>
                  <div className="flex w-[720px] flex-col items-start shrink-0 flex-nowrap relative z-[38]">
                    <span className="flex w-[720px] h-[48px] justify-start items-start self-stretch shrink-0 font-['Manrope'] text-[16px] font-normal leading-[24px] text-[#111416] relative text-left z-[39]">
                      {t.services.description}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-40">
                  <div className="flex gap-[12px] items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[41]">
                    <div className="flex w-[301px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#dde0e2] relative z-[42]">
                      <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[43]">
                        <div className="w-[24px] grow shrink-0 basis-0 relative overflow-hidden z-[44]">
                          <div className="w-[24px] h-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/kBvHe5eiJA.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[45]" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[46]">
                        <div className="flex h-[20px] flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[47]">
                          <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[20px] text-[#111416] relative text-left whitespace-nowrap z-[48]">
                            {t.services.items[0].title}
                          </span>
                        </div>
                        <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[49]">
                          <span className="flex w-[267px] h-[42px] justify-start items-start self-stretch shrink-0 font-['Manrope'] text-[14px] font-normal leading-[21px] text-[#6b7582] relative text-left z-50">
                            {t.services.items[0].description}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-[301px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#dde0e2] relative z-[51]">
                      <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[52]">
                        <div className="w-[24px] grow shrink-0 basis-0 relative overflow-hidden z-[53]">
                          <div className="w-[24px] h-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/3nUAT4Xege.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[54]" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[55]">
                        <div className="flex h-[20px] flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[56]">
                          <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[20px] text-[#111416] relative text-left whitespace-nowrap z-[57]">
                            {t.services.items[1].title}
                          </span>
                        </div>
                        <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[58]">
                          <span className="flex w-[267px] h-[63px] justify-start items-start self-stretch shrink-0 font-['Manrope'] text-[14px] font-normal leading-[21px] text-[#6b7582] relative text-left z-[59]">
                            {t.services.items[1].description}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-[301px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#dde0e2] relative z-[60]">
                      <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[61]">
                        <div className="w-[24px] grow shrink-0 basis-0 relative overflow-hidden z-[62]">
                          <div className="w-[24px] h-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/JmmzEhHE3j.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[63]" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[64]">
                        <div className="flex h-[20px] flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[65]">
                          <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[20px] text-[#111416] relative text-left whitespace-nowrap z-[66]">
                            {t.services.items[2].title}
                          </span>
                        </div>
                        <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[67]">
                          <span className="flex w-[267px] h-[63px] justify-start items-start self-stretch shrink-0 font-['Manrope'] text-[14px] font-normal leading-[21px] text-[#6b7582] relative text-left z-[68]">
                            {t.services.items[2].description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-[60px] pt-[20px] pr-[16px] pb-[12px] pl-[16px] flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[69]">
                <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[22px] font-bold leading-[28px] text-[#111416] relative text-left whitespace-nowrap z-[70]">
                  {t.successStories.title}
                </span>
              </div>
              <div className="flex items-start self-stretch shrink-0 flex-nowrap relative z-[71]">
                <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[72]">
                  <div className="flex flex-col gap-[16px] items-start self-stretch grow shrink-0 basis-0 flex-nowrap rounded-[8px] relative z-[73]">
                    <div className="h-[169px] self-stretch shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/8KRtKHtFmo.png)] bg-cover bg-no-repeat rounded-[12px] relative overflow-hidden z-[74]" />
                    <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[75]">
                      <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[76]">
                        <span className="flex w-[301.333px] h-[48px] justify-start items-start self-stretch shrink-0 font-['Manrope'] text-[16px] font-medium leading-[24px] text-[#111416] relative text-left z-[77]">
                          {t.successStories.items[0].title}
                        </span>
                      </div>
                      <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[78]">
                        <span className="flex w-[301.333px] h-[42px] justify-start items-start self-stretch shrink-0 font-['Manrope'] text-[14px] font-normal leading-[21px] text-[#6b7582] relative text-left z-[79]">
                          {t.successStories.items[0].description}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start self-stretch grow shrink-0 basis-0 flex-nowrap rounded-[8px] relative z-[80]">
                    <div className="h-[169px] self-stretch shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/w9muHTz77v.png)] bg-cover bg-no-repeat rounded-[12px] relative overflow-hidden z-[81]" />
                    <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[82]">
                      <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[83]">
                        <span className="flex w-[301.333px] h-[48px] justify-start items-start self-stretch shrink-0 font-['Manrope'] text-[16px] font-medium leading-[24px] text-[#111416] relative text-left z-[84]">
                          {t.successStories.items[1].title}
                        </span>
                      </div>
                      <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[85]">
                        <span className="flex w-[301.333px] h-[63px] justify-start items-start self-stretch shrink-0 font-['Manrope'] text-[14px] font-normal leading-[21px] text-[#6b7582] relative text-left z-[86]">
                          {t.successStories.items[1].description}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start self-stretch grow shrink-0 basis-0 flex-nowrap rounded-[8px] relative z-[87]">
                    <div className="h-[169px] self-stretch shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/3BAKZBGS0a.png)] bg-cover bg-no-repeat rounded-[12px] relative overflow-hidden z-[88]" />
                    <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[89]">
                      <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[90]">
                        <span className="flex w-[301.333px] h-[48px] justify-start items-start self-stretch shrink-0 font-['Manrope'] text-[16px] font-medium leading-[24px] text-[#111416] relative text-left z-[91]">
                          {t.successStories.items[2].title}
                        </span>
                      </div>
                      <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[92]">
                        <span className="flex w-[301.333px] h-[63px] justify-start items-start self-stretch shrink-0 font-['Manrope'] text-[14px] font-normal leading-[21px] text-[#6b7582] relative text-left z-[93]">
                          {t.successStories.items[2].description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-[60px] pt-[20px] pr-[16px] pb-[12px] pl-[16px] flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[94]">
                <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[22px] font-bold leading-[28px] text-[#111416] relative text-left whitespace-nowrap z-[95]">
                  {t.pricing.title}
                </span>
              </div>
              <div className="flex pt-[12px] pr-[16px] pb-[12px] pl-[16px] flex-col gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[96]">
                <div className="flex gap-[10px] items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[97]">
                  <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#dde0e2] relative z-[98]">
                    <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[99]">
                      <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[100]">
                        <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[20px] text-[#111416] relative text-left whitespace-nowrap z-[101]">
                          {t.pricing.plans.basic.name}
                        </span>
                      </div>
                      <div className="flex gap-[4px] items-baseline self-stretch shrink-0 flex-nowrap relative z-[102]">
                        <div className="flex flex-col items-start shrink-0 flex-nowrap relative z-[103]">
                          <span className="h-[45px] shrink-0 basis-auto font-['Manrope'] text-[36px] font-extrabold leading-[45px] text-[#111416] tracking-[-1px] relative text-left whitespace-nowrap z-[104]">
                            {t.pricing.plans.basic.price}
                          </span>
                        </div>
                        <div className="flex flex-col items-start shrink-0 flex-nowrap relative z-[105]">
                          <span className="h-[20px] shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[20px] text-[#111416] relative text-left whitespace-nowrap z-[106]">
                            {t.pricing.perMonth}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[40px] pt-0 pr-[16px] pb-0 pl-[16px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f2f2f4] rounded-[20px] relative overflow-hidden z-[107]">
                      <div className="flex w-[95px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden z-[108]">
                        <span className="h-[21px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-bold leading-[21px] text-[#111416] relative text-center overflow-hidden whitespace-nowrap z-[109]">
                          {t.pricing.plans.basic.cta}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[110]">
                      {t.pricing.plans.basic.features.map((feature, index) => (
                        <div key={index} className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[111]">
                          <div className="flex w-[20px] flex-col items-start shrink-0 flex-nowrap relative z-[112]">
                            <div className="w-[20px] grow shrink-0 basis-0 relative overflow-hidden z-[113]">
                              <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/4nSvgH0Tqn.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[114]" />
                            </div>
                          </div>
                          <span className="h-[20px] shrink-0 basis-auto font-['Manrope'] text-[13px] font-normal leading-[20px] text-[#111416] relative text-left whitespace-nowrap z-[115]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#dde0e2] relative z-[126]">
                    <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[127]">
                      <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[128]">
                        <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[20px] text-[#111416] relative text-left whitespace-nowrap z-[129]">
                          {t.pricing.plans.pro.name}
                        </span>
                      </div>
                      <div className="flex gap-[4px] items-baseline self-stretch shrink-0 flex-nowrap relative z-[130]">
                        <div className="flex flex-col items-start shrink-0 flex-nowrap relative z-[131]">
                          <span className="h-[45px] shrink-0 basis-auto font-['Manrope'] text-[36px] font-extrabold leading-[45px] text-[#111416] tracking-[-1px] relative text-left whitespace-nowrap z-[132]">
                            {t.pricing.plans.pro.price}
                          </span>
                        </div>
                        <div className="flex flex-col items-start shrink-0 flex-nowrap relative z-[133]">
                          <span className="h-[20px] shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[20px] text-[#111416] relative text-left whitespace-nowrap z-[134]">
                            {t.pricing.perMonth}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[40px] pt-0 pr-[16px] pb-0 pl-[16px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f2f2f4] rounded-[20px] relative overflow-hidden z-[135]">
                      <div className="flex w-[81px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden z-[136]">
                        <span className="h-[21px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-bold leading-[21px] text-[#111416] relative text-center overflow-hidden whitespace-nowrap z-[137]">
                          {t.pricing.plans.pro.cta}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[138]">
                      {t.pricing.plans.pro.features.map((feature, index) => (
                        <div key={index} className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[139]">
                          <div className="flex w-[20px] flex-col items-start shrink-0 flex-nowrap relative z-[140]">
                            <div className="w-[20px] grow shrink-0 basis-0 relative overflow-hidden z-[141]">
                              <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/JSjKe459Wj.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[142]" />
                            </div>
                          </div>
                          <span className="h-[20px] shrink-0 basis-auto font-['Manrope'] text-[13px] font-normal leading-[20px] text-[#111416] relative text-left whitespace-nowrap z-[143]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#dde0e2] relative z-[159]">
                    <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[160]">
                      <div className="flex flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[161]">
                        <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[20px] text-[#111416] relative text-left whitespace-nowrap z-[162]">
                          {t.pricing.plans.enterprise.name}
                        </span>
                      </div>
                      <div className="flex gap-[4px] items-baseline self-stretch shrink-0 flex-nowrap relative z-[163]">
                        <div className="flex flex-col items-start shrink-0 flex-nowrap relative z-[164]">
                          <span className="h-[45px] shrink-0 basis-auto font-['Manrope'] text-[36px] font-extrabold leading-[45px] text-[#111416] tracking-[-1px] relative text-left whitespace-nowrap z-[165]">
                            {t.pricing.plans.enterprise.price}
                          </span>
                        </div>
                        <div className="flex flex-col items-start shrink-0 flex-nowrap relative z-[166]">
                          <span className="h-[20px] shrink-0 basis-auto font-['Manrope'] text-[16px] font-bold leading-[20px] text-[#111416] relative text-left whitespace-nowrap z-[167]">
                            {t.pricing.perMonth}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[40px] pt-0 pr-[16px] pb-0 pl-[16px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f2f2f4] rounded-[20px] relative overflow-hidden z-[168]">
                      <div className="flex w-[79px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden z-[169]">
                        <span className="h-[21px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-bold leading-[21px] text-[#111416] relative text-center overflow-hidden whitespace-nowrap z-[170]">
                          {t.pricing.plans.enterprise.cta}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[171]">
                      {t.pricing.plans.enterprise.features.map((feature, index) => (
                        <div key={index} className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[172]">
                          <div className="flex w-[20px] flex-col items-start shrink-0 flex-nowrap relative z-[173]">
                            <div className="w-[20px] grow shrink-0 basis-0 relative overflow-hidden z-[174]">
                              <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/LAoMaiADzM.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[175]" />
                            </div>
                          </div>
                          <span className="h-[20px] shrink-0 basis-auto font-['Manrope'] text-[13px] font-normal leading-[20px] text-[#111416] relative text-left whitespace-nowrap z-[176]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-[60px] pt-[20px] pr-[16px] pb-[12px] pl-[16px] flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[192]">
                <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[22px] font-bold leading-[28px] text-[#111416] relative text-left whitespace-nowrap z-[193]">
                  {t.faq.title}
                </span>
              </div>
              <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[194]">
                {t.faq.items.map((item, index) => (
                  <div key={index} className="flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] flex-col items-start self-stretch shrink-0 flex-nowrap bg-[#f2f2f4] rounded-[12px] relative z-[195]">
                    <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[196]">
                      <div className="flex w-[263px] flex-col items-start shrink-0 flex-nowrap relative z-[197]">
                        <span className="h-[21px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[14px] font-medium leading-[21px] text-[#111416] relative text-left whitespace-nowrap z-[198]">
                          {item.question}
                        </span>
                      </div>
                      <div className="flex w-[20px] flex-col items-start shrink-0 flex-nowrap relative z-[199]">
                        <div className="w-[20px] grow shrink-0 basis-0 relative overflow-hidden z-[200]">
                          <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/jT9VTDnR9n.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[201]" />
                        </div>
                      </div>
                    </div>
                    {item.answer && (
                      <div className="flex pt-0 pr-0 pb-[8px] pl-0 flex-col items-start self-stretch shrink-0 flex-nowrap relative z-[202]">
                        <span className="flex w-[896px] h-[42px] justify-start items-start self-stretch shrink-0 font-['Manrope'] text-[14px] font-normal leading-[21px] text-[#6b7582] relative text-left z-[203]">
                          {item.answer}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[218]">
            <div className="flex flex-col items-start grow shrink-0 basis-0 flex-nowrap relative z-[219]">
              <div className="flex pt-[40px] pr-[20px] pb-[40px] pl-[20px] flex-col gap-[24px] items-start self-stretch grow shrink-0 basis-0 flex-nowrap relative z-[220]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-wrap relative z-[221]">
                  <div className="flex w-[160px] flex-col items-center flex-nowrap relative z-[222]">
                    <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-normal leading-[24px] text-[#6b7582] relative text-center whitespace-nowrap z-[223]">
                      {t.nav.overview}
                    </span>
                  </div>
                  <div className="flex w-[160px] flex-col items-center flex-nowrap relative z-[224]">
                    <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-normal leading-[24px] text-[#6b7582] relative text-center whitespace-nowrap z-[225]">
                      {t.nav.caseStudies}
                    </span>
                  </div>
                  <div className="flex w-[160px] flex-col items-center flex-nowrap relative z-[226]">
                    <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-normal leading-[24px] text-[#6b7582] relative text-center whitespace-nowrap z-[227]">
                      {t.nav.pricing}
                    </span>
                  </div>
                  <div className="flex w-[160px] flex-col items-center flex-nowrap relative z-[228]">
                    <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-normal leading-[24px] text-[#6b7582] relative text-center whitespace-nowrap z-[229]">
                      {t.nav.faq}
                    </span>
                  </div>
                  <div className="flex w-[160px] flex-col items-center flex-nowrap relative z-[230]">
                    <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-normal leading-[24px] text-[#6b7582] relative text-center whitespace-nowrap z-[231]">
                      {t.nav.contactUs}
                    </span>
                  </div>
                </div>
                <div className="flex gap-[16px] justify-center items-start self-stretch shrink-0 flex-wrap relative z-[232]">
                  <div className="flex w-[24px] flex-col items-center flex-nowrap relative z-[233]">
                    <div className="flex w-[24px] flex-col items-center grow shrink-0 basis-0 flex-nowrap relative z-[234]">
                      <div className="w-[24px] grow shrink-0 basis-0 relative overflow-hidden z-[235]">
                        <div className="w-[24px] h-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/na8JEV7zZx.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[236]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[24px] flex-col items-center flex-nowrap relative z-[237]">
                    <div className="flex w-[24px] flex-col items-center grow shrink-0 basis-0 flex-nowrap relative z-[238]">
                      <div className="w-[24px] grow shrink-0 basis-0 relative overflow-hidden z-[239]">
                        <div className="w-[24px] h-[24px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-07/W869N3Jc6C.png)] bg-cover bg-no-repeat absolute top-0 left-0 z-[240]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[241]">
                  <span className="h-[24px] self-stretch shrink-0 basis-auto font-['Manrope'] text-[16px] font-normal leading-[24px] text-[#6b7582] relative text-center whitespace-nowrap z-[242]">
                    {t.footer.copyright}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}