import Head from 'next/head'
import {ElectronicCardSection} from "../../components/ElectronicCardSection";
import {MakeAppointmentSection} from "../../components/MakeAppoinmentSection";
import {ProfileLayout} from "../../components/ProfileLayout";
import {getAppointments} from "../../API/getAppointments";

export default function Profile({serverAppointments}) {

  return (
    <>
      <Head>
        <title>Личный кабинет</title>
        <meta name="description" content="Личный кабинет"/>
        <meta name="keywords" content="личный кабинет, лк"/>
      </Head>

      <ProfileLayout>
        <MakeAppointmentSection serverAppointments={serverAppointments}/>
        <ElectronicCardSection/>
      </ProfileLayout>
    </>
  )
}

export async function getServerSideProps() {
  const appointments = await getAppointments();

  return {
    props: {serverAppointments: appointments}
  }
}