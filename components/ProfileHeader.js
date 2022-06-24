import classes from '../styles/ProfileHeader.module.scss';
import Image from "next/image";

export function ProfileHeader(props) {

  const buttonIcons = [
    {ariaText: 'Поиск по сайту', iconClassName: classes.search},
    {ariaText: 'Уведомления', iconClassName: classes.bell},
    {ariaText: 'Версия для слабовидящих', iconClassName: classes.eye},
  ];

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div>
          <h1 className={classes.title}>Мой профиль</h1>
        </div>

        <div className={classes.buttonsContainer}>
          <ul className={classes.iconsList}>
            {
              buttonIcons.map((item, index) => (
                <li key={index} className={classes.iconItem}>
                  <button className={classes.iconButton}>
                    <i className={`${classes.icon} ${item.iconClassName}`}/>
                    {item.ariaText}
                  </button>
                </li>
              ))
            }
          </ul>

          <div className={classes.profileInfo}>
            <div className={classes.avatarContainer}>
              <Image className={classes.avatar}
                     alt={"Ваш аватар"}
                     src={'/avatar.jpg'}
                     width={45}
                     height={45}
              />
            </div>
            <button className={classes.iconButtonFill}>
              Раскрыть профиль
              <i className={`${classes.icon} ${classes.arrow}`}/>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}