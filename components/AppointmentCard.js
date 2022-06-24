import {Button} from "./Button";
import Image from "next/image";
import classes from "../styles/AppointmentCard.module.scss";
import {get2DigitDate, getTime, getWeek} from "../utils/functions";

export function AppointmentCard({appointment}) {
  return (
    <article className={classes.container}>
      <div className={classes.wrapper}>
        <p className={classes.time}>
          {`
            ${getWeek(appointment.date)} ${get2DigitDate(appointment.date)} | ${getTime(appointment.date)}
           `}
        </p>
        <p className={classes.polyclinic}>{appointment.polyclinic + ','}</p>
        <p className={classes.address}>{appointment.address}</p>
        <div className={classes.footer}>
          <div className={classes.doctorContainer}>
            <div className={classes.avatarContainer}>
              <Image src={appointment.doctor.avatar}
                     alt={'Фото врача'}
                     width={60}
                     height={60}
                     className={classes.avatar}
              />
            </div>
            <div className={classes.doctorInfo}>
              <p className={classes.doctorName}>{appointment.doctor.name}</p>
              <p className={classes.doctorType}>{appointment.doctor.type}</p>
            </div>
          </div>
          <Button>Отменить</Button>
        </div>
      </div>
    </article>
  )
}