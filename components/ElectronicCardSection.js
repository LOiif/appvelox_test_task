import classes from "../styles/ElectronicCardSection.module.scss";
import {ElectronicCardLink} from "./ElectronicCardLink";

export function ElectronicCardSection() {
  return (
    <section>
      <h2 className={classes.title}>Электронная карта</h2>
      <ul className={classes.list}>
        <li className={classes.item}>
          <ElectronicCardLink title={'Информация о пациенте'}
                              iconClassName={`${classes.icon} ${classes.infoIcon}`}
                              textContentPadding={16}
          >
            <ul className={classes.infoList}>
              <li className={classes.infoItem}>Ваши личные данные</li>
              <li className={classes.infoItem}>Рекомендации врачей</li>
              <li className={classes.infoItem}>История болезней</li>
            </ul>
          </ElectronicCardLink>
        </li>

        <li className={classes.item}>
          <ElectronicCardLink title={'Результаты анализов'}
                              iconClassName={`${classes.icon} ${classes.resultIcon}`}
          >
            <p className={classes.cardText}>
              Вы можете узнать здесь результаты своих анализов
            </p>
          </ElectronicCardLink>
        </li>

        <li className={classes.item}>
          <ElectronicCardLink title={'Добавить  информацию'}
                              iconClassName={`${classes.icon} ${classes.addInfoIcon}`}
          >
            <p className={classes.cardText}>
              Добавляйте в свою электронную медицинскую карту новые данные
            </p>
          </ElectronicCardLink>
        </li>

        <li className={classes.item}>
          <ElectronicCardLink title={'История приемов'}
                              iconClassName={`${classes.icon} ${classes.historyIcon}`}
          >
            <p className={classes.cardText}>
              Вся информация о полученных услугах за все время хранится здесь
            </p>
          </ElectronicCardLink>
        </li>
      </ul>
    </section>
  );
}