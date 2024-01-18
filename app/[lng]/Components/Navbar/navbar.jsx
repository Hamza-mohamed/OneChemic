"use client";
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import img from "../../../../assets/head-logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { languages } from "../../../i18n/settings";
if (typeof document !== 'undefined') {
  import('bootstrap/dist/js/bootstrap.bundle.js')
}
export const Navbar = ({ lng }) => {
  var myLang = lng;
  const router = usePathname();

  function select(e) {
    if (window.location.search !== e.target.search) {
      window.location.href = e.target.href;
    }
  }
  return (
    <>
      <section>
        <nav className={`navbar navbar-expand-sm navbar-light shadow ${styles.nav}`}>
          <div className="container">
            <div className={`${styles.image}`}>
              <Link className="navbar-brand" href={`/${lng}`}>
                <Image src={img} alt="OneChemic logo" className="img-fluid" />
              </Link>
            </div>
            <div className={`${styles.language} d-block d-sm-none `}>
              {languages
                .filter((l) => lng !== l)
                .map((l, index) => {
                  return (
                    <span key={l} className=" w-100 container" style={{ fontSize: '14px' }}>
                      {index > 0 && " or "}
                      <Link className="text-dark    text-decoration-none" href={`/${l}`}>{lng == 'ar' ? "English" : "العربية"}</Link>
                    </span>
                  );
                })}
            </div>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="   collapse navbar-collapse" id="collapsibleNavId">
              <div className=" w-100 d-flex justify-content-center">
                <ul className={` navbar-nav  mt-2 mt-lg-0 translate-50`}>
                  <li className="nav-item">
                    <Link
                      className={`${router == `/${lng}` ? `${styles.active}` : ""
                        } ${styles.nav_link}  `}
                      href={`/${lng}`}
                    >
                      {myLang == "en" ? "Home" : "الصفحة الرئيسيه"}
                      {/* {t('navbar.part1')} */}
                    </Link>
                  </li>
                  <li className="nav-item dropdown" >
                    <Link
                      className={`${styles.nav_link} dropdown-toggle`}
                      href="#"
                      id="dropdownId"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"

                    >
                      {(lng == 'en') ? 'Categories' : ' الفئات'}
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                      <Link
                        className={`dropdown-item ${styles.drop}`}
                        href={{
                          pathname: `/${lng}/Category`,
                          query: { category: "Solevants" },
                        }}
                        onClick={(e) => select(e)}
                      >
                        {(lng == 'en') ? 'Solevants' : 'المذيبات '}
                      </Link>
                      <Link className={`dropdown-item ${styles.drop}`}
                        href={{
                          pathname: `/${lng}/Category`,
                          query: { category: "Polymers" },
                        }}
                        onClick={(e) => select(e)}
                      >
                        {(lng == 'en') ? 'Polymers' : 'البوليمرات '}
                      </Link>
                      <Link className={`dropdown-item ${styles.drop}`}
                        href={{
                          pathname: `/${lng}/Category`,
                          query: { category: "Chemical Additives and Processing Aids" },
                        }}
                        onClick={(e) => select(e)}
                      >
                        {(lng == 'en') ? 'Chemical Additives and Processing Aids' : 'المضافات الكيميائية ومساعدات المعالجة '}
                      </Link>
                      <Link className={`dropdown-item ${styles.drop}`}
                        href={{
                          pathname: `/${lng}/Category`,
                          query: { category: "Preservatives and Chemical Processing" },
                        }}
                        onClick={(e) => select(e)}
                      >
                        {(lng == 'en') ? 'Preservatives and Chemical Processing' : 'المواد الحافظة والمعالجة الكيميائية '}
                      </Link>
                      <Link className={`dropdown-item ${styles.drop}`}
                        href={{
                          pathname: `/${lng}/Category`,
                          query: { category: "Pigments and Fillers" },
                        }}
                        onClick={(e) => select(e)}
                      >
                        {(lng == 'en') ? 'Pigments and Fillers' : 'الأصباغ والحشو '}
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`${router == `/${lng}/about-us` ? `${styles.active}` : ""
                        } ${styles.nav_link}`}
                      href={`/${lng}/about-us`}
                    >
                      {myLang == "en" ? "About Us" : "نبذة عنا"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`${router == `/${lng}/Contactus` ? `${styles.active}` : ""
                        } ${styles.nav_link}`}
                      href={`/${lng}/Contactus`}
                    >
                      {myLang == "en" ? "Contactus" : "تواصل معنا"}
                    </Link>
                  </li>{" "}
                
                </ul>


              </div>
            </div>
            <div className={`${styles.language} d-none d-sm-block `}>
              {languages
                .filter((l) => lng !== l)
                .map((l, index) => {
                  return (
                    <span key={l} className=" w-100 container" style={{ fontSize: '14px' }}>
                    {index > 0 && " or "}
                    <Link className="text-dark    text-decoration-none" href={`/${l}`}>{lng == 'ar' ? "English" : "العربية"}</Link>
                  </span>
                  );
                })}
            </div>
          </div>
        </nav>


      </section>
      {/* { <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>} */}

    </>
  );
};
