import classes from "../styles/MakeAppointmentSection.module.scss";
import {AppointmentsList} from "./AppointmentsList";
import Link from "next/link";
import {useEffect, useMemo, useState} from "react";

export function MakeAppointmentSection({serverAppointments}) {

  const [appointments, setAppointments] = useState([...serverAppointments])

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  const [displayedAppointments, setDisplayedAppointments] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
  }, []);


  useMemo(() => {
    if (appointments && appointments.length !== 0) {
      if (windowSize.width > 1820) {
        setDisplayedAppointments(appointments.slice(0, 3))
      } else if (windowSize.width > 1320) {
        setDisplayedAppointments(appointments.slice(0, 2))
      } else {
        setDisplayedAppointments(appointments.slice(0, 1))
      }
    }
  }, [appointments, windowSize])

  return (
    <section className={classes.appointments}>
      <h2 className={classes.sectionTitle}>Записи на прием</h2>
      <div className={classes.appointmentsWrapper}>
        {
          displayedAppointments.length !== 0 && appointments.length !== 0
            ? <>
              <AppointmentsList appointments={displayedAppointments}/>
              <div className={classes.otherAppointments}>
                <p>Еще {appointments.length - displayedAppointments.length} записи</p>
                <Link href="/profile/appointments"><a className={classes.otherAppointmentsLink}>Подробнее</a></Link>
              </div>
            </>
            : ''
        }
      </div>
    </section>
  );
}
