import Head from 'next/head'
import classes from '../styles/Home.module.scss'
import Link from "next/link";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Главная</title>
      </Head>
      <>
        <h1>Здесь пока ничего нет</h1>
        <Link href="/profile"><a>В личный кабинет</a></Link>
      </>
    </div>
  )
}
