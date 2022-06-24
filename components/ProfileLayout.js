import classes from "../styles/ProfileLayout.module.scss";
import {ProfileHeader} from "./ProfileHeader";

export function ProfileLayout({children}) {
  return (
    <main className={classes.container}>
      <ProfileHeader/>
      <div className={classes.wrapper}>
        {children}
      </div>
    </main>
  );
}