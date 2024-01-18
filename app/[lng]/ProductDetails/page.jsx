'use client'
import React, { useEffect, useState } from 'react'
import products from '../Category/products.json'
import styles from './prdDetails.module.css'
export default function Page({ params: { lng } }) {
    const [product, setProduct] = useState('');
    let prd, categoryParam, productParam;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlSearchParams = new URLSearchParams(window.location.search);
            productParam = urlSearchParams.get("product");
            categoryParam = urlSearchParams.get("category");
            if (categoryParam && productParam) {
                prd = products[categoryParam].filter((prd) => prd.id == productParam)
                setProduct(prd);
            }
        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlSearchParams = new URLSearchParams(window.location.search);
            let productParam = urlSearchParams.get("product");
            let categoryParam = urlSearchParams.get("category");
            prd = products[categoryParam].filter((prd) => prd.id == productParam)
            setProduct(prd);
        }
    }, [categoryParam, productParam])

    return (
        <div className={`container mt-3 mb-5 ${styles.details}`}>
            <div className='row'>
                <div className="col-md-5 d-flex justify-content-center">
                    <div className={`${styles.card} card rounded-4 text-center shadow `}>
                        <div className="card-body">
                            {product[0]?.ImageUrl && (
                                <img
                                    src={product[0]?.ImageUrl}
                                    className={`${styles.image} img-fluid `}
                                    alt="ImageCard"
                                    style={{ height: '260px', borderRadius: '20px' }}
                                />
                            )}

                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className='mt-4'>
                        {lng === "en" ? (
                            <>
                                <h3 className="card-title  mb-4">{product[0]?.en.title}</h3>
                                {/* <p className='text-lowercase'>
                        </p> */}
                                <p className='text-lowercase text-black-50' dangerouslySetInnerHTML={{ __html: product[0]?.en.description }} ></p>

                            </>
                        ) : (
                            <>
                                <h3 className="card-title  mb-4">{product[0]?.ar.title}</h3>
                                {/* <p className='text-lowercase'>
                        </p> */}
                                <p className='text-lowercase text-black-50' dangerouslySetInnerHTML={{ __html: product[0]?.ar.description }} ></p>

                            </>)}

                    </div>

                    <div className='mt-4 shadow'>
                        <h3>
                            {(lng == 'en') ? 'Properties' : 'الخصائص'}
                        </h3>
                        {lng == 'en' ? (
                            <ul
                                dangerouslySetInnerHTML={{ __html: product[0]?.en.Properties }}>
                            </ul>
                        ) : (
                            <ul
                                dangerouslySetInnerHTML={{ __html: product[0]?.ar.Properties }} >
                            </ul>
                        )}

                    </div>
                    <div className='mt-4 shadow'>
                        <h3>
                            {(lng == 'en') ? 'Application Areas' : 'مجالات التطبيق'}
                        </h3>
                        {lng == 'en' ? (
                            <ul
                                dangerouslySetInnerHTML={{ __html: product[0]?.en.application }}>
                            </ul>
                        ) : (
                            <ul
                                dangerouslySetInnerHTML={{ __html: product[0]?.ar.application }} >
                            </ul>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}
