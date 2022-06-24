export function getWeek(date, locale = 'ru') {
  if(!(date instanceof Date)){
    date = new Date(date)
  }
  const week = date.toLocaleDateString(locale, {weekday: 'long'});
  return week.charAt(0).toUpperCase() + week.slice(1);
}

export function get2DigitDate(date, locale = 'ru') {
  if(!(date instanceof Date)){
    date = new Date(date)
  }
  return date.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: '2-digit'});
}


export function getTime(date, locale = 'ru') {
  if(!(date instanceof Date)){
    date = new Date(date)
  }
  return date.toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit'});
}

export function getDate (date){
  if(!(date instanceof Date)){
    date = new Date(date)
  }
  return date.getDate()
}

export function getMonth (date) {
  if(!(date instanceof Date)){
    date = new Date(date)
  }
  return date.getMonth()
}