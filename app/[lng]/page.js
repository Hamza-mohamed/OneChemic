import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import { useTranslation } from "../i18n";
import Content from "./Home/page";
import Head from "next/head";

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <>
      {/* <Head 
    ></Head>
     */}
      <div>
        <Content lng={lng} />
      </div>
    </>
  );
}
