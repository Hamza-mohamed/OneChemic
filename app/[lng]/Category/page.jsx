"use client";
import React, { useEffect, useState } from "react";
import products from "./products.json";
import styles from "./category.module.css";
import Link from "next/link";
const Page = ({ params: { lng } }) => {
  const [category, setCategory] = useState("");
  const myProducts = products;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlSearchParams = new URLSearchParams(window.location.search);
      let categoryParam = urlSearchParams.get("category");

      if (categoryParam !== category) {
        setCategory(categoryParam);
      }
    }
  }, [category]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlSearchParams = new URLSearchParams(window.location.search);
      let categoryParam = urlSearchParams.get("category");

      if (categoryParam !== category) {
        setCategory(categoryParam);
      }
    }
  }, []);

  const getBackgroundColor = () => {
    if (category === "Solevants" ) {
      return "blue";
    } else if (category === "Polymers") {
      return "rgb(127, 240, 57)";
    } else if (category === "Chemical Additives and Processing Aids") {
      return "rgb(116, 21, 151)";
    } else if (category === "Preservatives and Chemical Processing") {
      return "rgb(207, 141, 9)";
    } else if (category === "Pigments and Fillers") {
      return "rgb(205, 21, 21)";
    } else {
      return "white";
    }
  };
  return (
    <>
      <div>
      <div style={{ backgroundColor: getBackgroundColor() ,height:'70px'}}>

          <h2 className="text-center py-2 text-light">
            {lng == "en"
              ? `${category}`
              : category == "Solevants" && lng === "ar"
              ? "المذيبات"
              : category == "Polymers" && lng === "ar"
              ? "البوليمرات"
              : category == "Chemical Additives and Processing Aids" &&
                lng === "ar"
              ? 'المضافات الكيميائية ومساعدات المعالجة '
              : category == "Preservatives and Chemical Processing" &&
                lng === "ar"
              ? 'المواد الحافظة والمعالجة الكيميائية '
              : category == "Pigments and Fillers" && lng === "ar"
              ? 'الأصباغ والحشو '
              : "Loading..."}
          </h2> 
        </div>
        <div className="container mt-3">
          <div className="row">
            {myProducts[category] &&
              myProducts[category]?.map((item, index) => (
                <div key={index} className="col-md-4 mb-4 ">
                  <Link
                    href={{
                      pathname: `/${lng}/ProductDetails`,
                      query: { product: `${item.id}`, category: `${category}` },
                    }}
                  >
                    <div
                      className={`${styles.card} card rounded-4  text-center shadow`}
                    >
                      <div className="card-body">
                        {item.ImageUrl && (
                          <img
                            src={item.ImageUrl}
                            className={`img-fluid ${styles.image}`}
                            alt="ImageCard"
                            style={{ height: "270px", borderRadius: "20px" }}
                          />
                        )}
                        {lng === "en" ? (
                          <>
                            <h5 className="card-title mt-4">{item.en.title}</h5>
                            {/* <p className="card-title">{item.en.description}</p> */}

                            {/* <p dangerouslySetInnerHTML={{ __html: item.en.test }} /> */}
                          </>
                        ) : (
                          <>
                            <h5 className="card-title">{item.ar.title}</h5>
                          </>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
