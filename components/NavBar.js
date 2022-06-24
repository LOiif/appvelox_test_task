import Link from "next/link";
import {Button} from "./Button";
import classes from '../styles/Navbar.module.scss';
import Image from 'next/image';
import {useRouter} from "next/router";

export function NavBar(props) {

  const router = useRouter();

  const navLinks = [
    {text: 'Профиль', iconClassName: classes.profile, href: '/profile'},
    {text: 'Врачи и клиники', iconClassName: classes.doctorsAndClinics, href: '#'},
    {text: 'Сообщения', iconClassName: classes.messages, href: '#'},
    {text: 'Тестирование', iconClassName: classes.testing, href: '#'},
    {text: 'Полезно знать', iconClassName: classes.goodKnow, href: '#'},
  ];

  return (
    <aside {...props} className={classes.container}>
      <div>
        <nav>
          <ul className={classes.navList}>
            <li>
              <Link href="#"><a className={classes.navLink}>Логотип</a></Link>
            </li>
            {
              navLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <a
                      className={`${classes.navLink} ${router.asPath.includes(item.href) && item.href !== '#' ? classes.navLinkActive : ''}`}>
                      <i className={`${classes.linkIcon} ${item.iconClassName}`}/>
                      {item.text}
                    </a>
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>

        <div className={classes.buttonContainer}>
          <Button padding={'12px 25px'}>
            Подать заявку
          </Button>
        </div>
      </div>

      <div>
        <nav>
          <Link href="#">
            <a className={classes.navLink}>
              <i className={`${classes.linkIcon} ${classes.help}`}/>
              Помощь
            </a>
          </Link>
        </nav>

        <div>
          <Link href="#">
            <a className={classes.footerLogoLink}>
              <Image src={'/appvelox_logo.png'}
                     alt={'Логотип компании "Appvelox"'}
                     width='113'
                     height="20"/>
            </a>
          </Link>
        </div>
      </div>
    </aside>
  )
}