import {NavBar} from "./NavBar";
import classes from "../styles/Layout.module.scss";

export default function Layout({children}) {
  return (
    <div className={classes.container}>
      <NavBar/>
      {children}
    </div>
  )
}