import classes from '../styles/Button.module.scss'

export function Button({children, padding = '11px 15px', ...otherProps}) {
  return (
    <button
      className={classes.button}
      style={{padding}}
      {...otherProps}
    >
      {children}
    </button>
  );
}