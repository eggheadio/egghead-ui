export const secondsToString = (secs) => {
  const hours = Math.floor(secs / 3600)
  const minutes = Math.floor((secs - (hours * 3600)) / 60)
  const seconds = secs - (hours * 3600) - (minutes * 60)
  
  const hourStr = hours < 10 ? `0${hours}` : hours
  const minStr = minutes < 10 ? `0${minutes}` : minutes
  const secStr = seconds < 10 ? `0${seconds}` : seconds

  return `${hourStr !== '00' ? `${hourStr}:` : '' }${minStr !== '00' ? `${minStr}:` : '' }${secStr}`
}
