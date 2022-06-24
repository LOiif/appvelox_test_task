import classes from '../styles/ElectronicCardLink.module.scss'
import Link from "next/link";

export function ElectronicCardLink({iconClassName, title, children, textContentPadding = 20, href = '#'}) {

  const mouseOverHandler = (evt) => {
    const linkEl = evt.target.closest('.' + classes.link);

    if (linkEl) {
      linkEl.classList.add('electronicCardLinkActive')
    }
  }

  const mouseOutHandler = (evt) => {
    const linkEl = evt.target.closest('.' + classes.link);

    if (linkEl) {
      linkEl.classList.remove('electronicCardLinkActive')
    }
  }

  const focusHandler = (evt) => {
    const linkEl = evt.target.closest('.' + classes.link);

    if (linkEl) {
      linkEl.classList.add('electronicCardLinkFocus')
    }
  }

  const blurHandler = (evt) => {
    const linkEl = evt.target.closest('.' + classes.link);

    if (linkEl) {
      linkEl.classList.remove('electronicCardLinkFocus')
    }
  }

  return (
    <Link href={href}>
      <a className={classes.link}
         onMouseOver={mouseOverHandler}
         onMouseOut={mouseOutHandler}
         onFocus={focusHandler}
         onBlur={blurHandler}
      >
        <div className={classes.container}>
          <div className={classes.iconContainer}>
            <i className={`${iconClassName} ${classes.icon}`}/>
          </div>

          <div className={classes.textContent}>
            <h3 className={classes.title}
                style={{marginBottom: (textContentPadding + 10) + 'px'}}
            >
              {title}
            </h3>
            {children}
          </div>
        </div>
      </a>
    </Link>
  );
}