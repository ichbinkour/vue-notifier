const directions = {
  x: ['left', 'center', 'right'],
  y: ['top', 'bottom']
}

export const split = (value) => {
  if (typeof value !== 'string') {
    return []
  }
  return value.split(/\s+/gi).filter(v => v)
}

export const getColor = (color) => {
  console.log(color)
  switch (color) {
    case "error":
      return "#f14040"
    case "warning":
      return "#f18838"
    case "success":
      return "#53b446"
    case "info":
      return "#32b7f1"
    default:
      return "#32b7f1"
  }
      
}

export const generateId = (list) => {
  let date = (new Date).getTime()
  
  if (date < 0)
    date *= -1
  return (list.length * date)
}

export const formatDirection = (value) => {
  if (typeof value === 'string') {
    value = split(value)
  }
  let x = null
  let y = null
  
  value.forEach(v => {
    if (directions.y.indexOf(v) !== -1) {
      y = v
    }
    if (directions.x.indexOf(v) !== -1) {
      x = v
    }
  })
  
  return { x, y }
}
