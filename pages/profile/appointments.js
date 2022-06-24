import Head from "next/head";
import classes from "../../styles/Appointments.module.scss";
import Link from "next/link";
import {AppointmentsList} from "../../components/AppointmentsList";
import {getAppointments} from "../../API/getAppointments";
import {useCallback, useState} from "react";
import {ProfileLayout} from "../../components/ProfileLayout";
import Calendar from "react-calendar";
import {getDate, getMonth} from "../../utils/functions";

export default function Appointments({serverAppointments}) {

  const [appointments, setAppointments] = useState([...serverAppointments])

  const tileDisabled = ({date, view}) => {
    if (view === 'month') {
      const todayDate = new Date()
      return date.getTime() < (todayDate.getTime() - 86399999);
    }
  }

  const tileContent = useCallback(({date, view}) => {
    if (appointments && appointments.length !== 0) {
      if (view === 'month') {

        const appointmentsCount = appointments.reduce((acc, item) => {
          return (getDate(item.date) === date.getDate() && getMonth(item.date) === date.getMonth())
            ? acc + 1
            : acc
        }, 0);

        return (appointmentsCount !== 0)
          ? <div className={'react-calendar__tile-appointment'}>
            <span>{appointmentsCount}</span>
          </div>
          : ''
      }
    }
  }, [appointments])

  return (
    <>
      <Head>
        <title>Мои записи</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
      </Head>

      <ProfileLayout>
        <section>
          <div className={classes.titleContainer}>
            <Link href="/profile">
              <a className={classes.backLink}>
                <i className={classes.backIcon}/>
                Назад
              </a>
            </Link>
            <h2 className={classes.title}>Мои записи</h2>
          </div>
          <div className={classes.sectionWrapper}>
            <div className={classes.appointmentsListContainer}>
              <AppointmentsList direction={'column'}
                                appointments={appointments}
              />
            </div>
            <div className={classes.calendarContainer}>
              <Calendar tileDisabled={tileDisabled}
                        tileContent={tileContent}
                        showNeighboringMonth={false}
                        locale={'ru'}
              />
            </div>
          </div>
        </section>
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
