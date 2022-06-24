import classes from '../styles/AppointmentsList.module.scss'
import {AppointmentCard} from "./AppointmentCard";

export function AppointmentsList({appointments, direction = 'row'}) {
  return (
    <>
      {
        appointments && appointments.length !== 0
          ? <ul className={classes.list + ' ' + classes[direction]}>
            {
              appointments.map((appointment) =>
                <li key={appointment.doctor.name + appointment.doctor.type + appointment.date.toString()}
                    className={classes.item}
                >
                  <AppointmentCard appointment={appointment}/>
                </li>
              )
            }
          </ul>
          : null
      }
    </>
  )
}