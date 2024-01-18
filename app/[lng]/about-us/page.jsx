import React from "react";
import ImageGallery from "../Components/Gallery/Gallery";
import "./aboutStyle.css";
import Link from "next/link";
import parol from "../../../assets/2w.jpg";
import factory from "../../../assets/factory1.jpg";
import { useTranslation } from "../../i18n";
import ContactLink from "../Components/Contact-link/Contact-link";

export const metadata = {
  title: 'about us',
}
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "about-us");

  const images = [
    {
      url: factory.src,
      description: lng == "en" ? "Our foundation" : "مؤسستنا",
      desc:
        lng == "en"
          ? "Our foundation rests on a dedication to excellence, making us the go-to supplier for factories and distributors in Egypt. With a steadfast belief in reliability and customer satisfaction, OneChemic stands as a testament to a decade of  unwavering commitment to our clients and the chemical industry"
          : "مؤسستنا تقع على التفاني في التميز، مما يجعلنا المورد المفضل للمصانع و الموزعين في مصر. مع الإيمان الراسخ بالموثوقية والعملاء الرضا، تقف شركة OneChemic بمثابة شهادة على عقد من الزمن  التزام لا يتزعزع تجاه عملائنا والصناعة الكيميائية",
    },
    {
      url: "https://bdcinternational.com/content/uploads/2022/03/szyte_na_miare-e1648642841245-1400x934.jpg",
      description:
        lng == "en"
          ? "Made-to-measure solutions for enterprises."
          : "حلول مخصصة للمؤسسات.",
      desc:
        lng == "en"
          ? "our team is poised to explore and secure the exact chemical solution your business demands. This flexibility is coupled with a commitment to personalized customer service — an assurance that yourindividual requirements will be met with precision and care"
          : "فريقنا هو على استعداد لاستكشاف وتأمين الحل الكيميائي الدقيق الخاص بك  متطلبات العمل. وتقترن هذه المرونة بالالتزام لخدمة العملاء الشخصية - ضمان أن الخاص بك سيتم تلبية المتطلبات الفردية بدقة وعناية",
    },
  ];
  return (
    <>
  
      <div className="container mt-5" id="about-us">
        
        <section>
          <div className="row m-0 p-1 shadow p-3 mb-1 bg-white rounded ">
            <div className="col-md-5 pt-1">
              <div className="px-4 py-1 position-relative fw-bold title-1">
                <p className="fs-3 " style={{ overflow: "hidden" }}>
                  <span >{t("part1")}</span>
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <p className="text-muted p-2">{t("part3")}</p>
            </div>
          </div>
        </section>
        <section>
          <div className="shadow p-3 mb-2 bg-white rounded">
            <ImageGallery images={images} lng={lng}/>
          </div>
        </section>
        <section>
          <div className="my-1  container d-lg-flex d-md-block shadow p-3 mb-2 bg-white rounded">
            <div className="ps-2 py-2">
              <h2 >{t("part4")}</h2>
              <p className="text-muted">{t("part5")}</p>
              <p className="text-muted">{t("part6")}</p>
              <p className="text-muted">{t("part7")}</p>
              <p className="text-muted">{t("part8")}</p>
            </div>
            <div className="w-100 p-3">
              <img className="img-fluid" src={parol.src} alt="chemical products" />
            </div>
          </div>
        </section>
        <section>
          <div className="my-1 py-2   container d-lg-flex d-md-block shadow p-3 mb-2 bg-white rounded">
            <div className="w-100 p-3 text-center pt-5">
              <img
                className="img-fluid"
                src="https://bdcinternational.com/content/uploads/2022/03/bdc_uslugi-1-1400x700.jpg"
                alt="testing our products quality"
              />
            </div>
            <div className="p-4">
              <h2>{t("part9")} </h2>
              <p>{t("part10")}</p>
              <p> {t("part11")}</p> 
              <p>{t("part12")}</p> 
              <p>{t("part13")}</p>
              <p>{t("part14")}</p>
              <p>{t("part15")}</p>
            </div>
          </div>
        </section>
        <section>
          <div className="my-1 py-2   container d-lg-flex d-md-block shadow p-3 mb-2 bg-white rounded">
            <div className="   p-3">
              <h2> {t("part16")}</h2>
              <p>{t("part17")}</p>
              <p>{t("part18")} </p>
              <p>{t("part19")}</p> <p>{t("part20")}</p>
            </div>
            <div className="w-100 p-3">
              <img
                className="img-fluid"
                src="https://bdcinternational.com/content/uploads/2022/03/szeroka_gama.jpg"
                alt="large store  "
              />
            </div>
          </div>
        </section>
        <section>
          <div className="my-1 py-2   container d-lg-flex d-md-block shadow p-3 mb-2 bg-white rounded">
            <div className="   p-3">
              <h2>{t("part21")}</h2>
              <p>{t("part22")}</p>
              <p>{t("part23")}</p> <p>{t("part24")}</p>
              <p>{t("part25")}</p>
            </div>
          </div>
        </section>
        <section>
          <div className="my-1 py-2   container d-lg-flex d-md-block shadow p-3 mb-2 bg-white rounded">
            <div className=" p-3">
              <div className="px-4 py-1 position-relative fw-bold title-2 fs-3">
                <h2>
                <span>{t("part26")}</span>
                </h2>
              </div>

              <p>
                {t("part28")}
              </p>
            </div>
            <div className="w-100 p-3">
              <img
                className="img-fluid"
                src="https://bdcinternational.com/content/uploads/2021/09/frame.png"
                alt="world map "
              />
            </div>
          </div>
        </section>
      </div>
      <ContactLink lng={lng} />
    </>
  );
}
