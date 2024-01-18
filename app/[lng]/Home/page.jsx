import Link from 'next/link'
import React from 'react'
import ShopNowCard from '../Components/ShopNowCard/ShopNowCard';
import styles from './home.module.css'
import factory from "../../../assets/factory1.jpg";
import ImageGallery from "../Components/Gallery/Gallery";
import { useTranslation } from "../../i18n";
import ContactLink from '../Components/Contact-link/Contact-link';
import Carusel from './carusel';
import Swiper from './swiper';

export default async function Content( { lng } ) {
 
  const { t } = await useTranslation(lng,'home');

  const images = [
    {
      url: factory.src,
      description: (lng=='en')?`Best drilling chemicals` :`أفضل كيماويات الحفر`,
      desc:(lng=='en')?`
      We don’t just sell chemical products – we create effective solutions. 
      We save our clients’ time and increase the safety of the work carried out.
      ` :`نحن لا نبيع المنتجات الكيميائية فحسب، بل نبتكر حلولاً فعالة.
      نحن نوفر وقت عملائنا ونزيد من سلامة العمل المنجز.
      `
    },
    {
      url: "https://bdcinternational.com/content/uploads/2021/09/group-123-1.png",
      description: (lng=='en')?`WHAT WE DOFOR YOU?` :`ماذا نقدم لك ؟`,
      desc:
      (lng=='en')?`
      Embarking on a transformative partnership with OneChemic
opens the door to a comprehensive array of services designed to
elevate your business in the dynamic landscape of chemical raw
materials. ` :
      `الشروع في شراكة تحويلية مع OneChemic
      يفتح الباب أمام مجموعة شاملة من الخدمات المصممة ل
      ارفع مستوى عملك في المشهد الديناميكي للمواد الكيميائية الخام
      مواد. `
    
    },
    {
      url: "https://bdcinternational.com/content/uploads/2021/12/istock-1309776274-1-1400x682.jpg",
      description:(lng=='en')?`Unique original recipes` :`وصفات أصلية فريدة من نوعها`,
      desc:(lng=='en')?`
      Each technical issue is carefully analyzed by our specialists,
       and recipes are created for individual engineering challenges. 
         ` :`يتم تحليل كل مشكلة فنية بعناية من قبل المتخصصين لدينا،
         ويتم إنشاء وصفات للتحديات الهندسية الفردية.
        `
    },
  ];
  return <>
  <Carusel/>

    <section>
          <div className="shadow p-3 mb-2 bg-white rounded">
            <ImageGallery images={images} lng={lng} />
            <div className='container'>
                    <Link className='text-decoration-none' href='../Contactus' >
                    {(lng=='en')?'CONTACTUS':'تواصل معنا'}<i className="fa-solid fa-greater-than fa-fade ms-2" style={{fontSize:'14px'}}></i>
                    </Link>
            </div>
          </div>
          
        </section>

    <section className={`${styles.infoSection}`} >
          <div className="my-1 py-2 mb-5 container d-lg-flex d-md-block shadow p-3  bg-white rounded">
            <div className="w-100 p-3  text-center pt-5" style={{height:'500px'}}>
              <img
                className=" " style={{}}
                src="https://bdcinternational.com/content/uploads/2022/03/bdc_uslugi-1-1400x700.jpg"
                alt=" testing product quality"
              />
            </div>
            <div className={` p-4 ${styles.content}`}>
              <h2>{(lng=='en')?'Services tailored to your needs':'خدمات مصممة خصيصا لاحتياجاتك'}</h2>
              <p className='text-muted'>
              {t('home.part2')}
                </p>
                 
             
            </div>
          </div>
          <Swiper/>
        </section>
        <ContactLink lng={lng}/>
    </>

}
