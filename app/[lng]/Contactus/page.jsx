"use client";
import React from "react";
import style from "./page.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { HelmetProvider ,Helmet } from "react-helmet-async";

export default function Page({ params: { lng } }) {
  var myLang = lng;

  let validateSchema = Yup.object({
    name: Yup.string()
      .min(5, (lng == 'en') ? "minimum 5 character" : "اقل عدد من الحروف هو خمسه")
      .required((lng == 'en') ? "your name is required" : 'خانة الاسم مطلوبه'),
    email: Yup.string()
      .email("is invalid email")
      .required((lng == 'en') ? "your email is required" : 'خانة البريد الالكتروني مطلوبه'),
    message: Yup.string()
      .min(5, (lng == 'en') ? "minimum 5 character" : 'اقل عدد من الحروف هو خمسه')
      .required((lng == 'en') ? "your message is required" : 'خانة الرساله مطلوبه'),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validateSchema,
  });
  return (
    <>
    <HelmetProvider>

      <Helmet>
        <title>{(lng == 'en') ? 'Contact us' : 'تواصل معنا'}</title>
      </Helmet>
      <section id="contactUs" className="mt-5">
        <div className="row container m-auto mb-2">
          <div className="col-md-5">
            <h2 className={`${style.title} ms-2`} style={{ fontWeight: "700" }}>
              {(myLang === 'en') ? "Contact US" : "اتصل بنا"}
            </h2>
            <div className={`${style.leftContent} mb-4`}>
              <h3>{(lng == 'en') ? 'Onechemic Egypt.' : ' .ون كيمك مصر '} </h3>
              <p className="text-muted mt-3 mb-1">
                <i className=" fas fa-location-dot me-2"></i>
                {(lng == 'en') ? 'Alexandria agricultural Slow Road,' : ',الاسكندريه الطريق الزراعي البطئ'}
                <br />
                {(lng == 'en') ? 'Qalyoub Qalyoubia,' : ' , القليوبيه قليوب'}
                <br /> {(lng == 'en') ? 'Egypt.' : ' .مصر'}
              </p>
            </div>
            <div className={`${style.leftContent} mt-0 `}>
              <a
                href="tel:+20102241805"
                className="text-decoration-none text-muted "
              >
                  <i className="fa fa-phone me-2 text-muted "></i>
                <p className="text-muted mb-4 d-inline ">
                  {lng == 'en' ? '(+20 ) 10 22 64 1805' : "1805 64 22 10 (20+)"}
                </p>
              </a>
              <br />
              <br />
              <i className="fas fa-envelope me-2 text-muted "></i>
              <a
                href="mailto:info@onechemic.com"
                className="text-decoration-none text-muted "
              >
                info@onechemic.com
              </a>
            </div>

            <div className="mt-3  text-center"> 
              <a
                href="https://www.facebook.com/onechemic"
                className="text-decoration-none   mt-auto "
                target="_blank" >
                <i className="fa-brands fa-facebook mx-2 fa-xl"></i>
              </a>
              <a
                href="https://twitter.com/onechemic"
                className="text-decoration-none   mt-auto "
                target="_blank" >
                <i className="fa-brands fa-x-twitter mx-2 fa-xl text-dark"></i>
              </a>
            </div>
          </div>

          <div className="col-md-7">
            <div className={`${style.rightContent}`}>
              <form
                action="https://formspree.io/f/mrgngbgg"
                method="POST"
                target="_blank"
              >
                <label htmlFor="name">{(lng == 'en') ? 'First and last name' : 'الاسم الاول و الاسم الاخير .'}</label>
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  className="form-control mb-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder={(lng == 'en') ? "Please state your full name" : 'من  فضلك ادخل اسمك كاملا.'}
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className="alert alert-danger mt-2 p-2">
                    {formik.errors.name}
                  </div>
                ) : (
                  ""
                )}

                <label htmlFor="email">{(lng == 'en') ? 'Email address' : 'البريد الالكتروني'}</label>
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="form-control mb-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder={(lng == 'en') ? "Please enter your e-mail address" : "من فضلك ادخل البريد الالكتروني ."}
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="alert alert-danger mt-2 p-2">
                    {formik.errors.email}
                  </div>
                ) : (
                  ""
                )}

                <label htmlFor="message">{(lng == 'en') ? 'Message' : 'الرساله'}</label>
                <textarea
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  className="form-control mb-2"
                  type="text"
                  name="message"
                  id="message"
                  placeholder={(lng == 'en') ? "What question do you have?" : "ما هو سؤالك؟"}
                ></textarea>
                {formik.errors.message && formik.touched.message ? (
                  <div className="alert alert-danger mt-2 p-2">
                    {formik.errors.message}
                  </div>
                ) : (
                  ""
                )}

                <div className=" border border-0 rounded text-light d-flex align-items-center ">
                  <button
                    disabled={!(formik.isValid && formik.dirty)}
                    type="submit"
                    onSubmit={formik.handleSubmit}
                    className="btn btn-outline-primary mt-2 mx-2"
                    style={{ fontWeight: "600" }}
                  >
                    {" "}
                    {(lng == 'en') ? 'Send' : 'ارسال '}
                    <i className="fas fa-paper-plane ms-2"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </HelmetProvider>
    </>
  );
}

