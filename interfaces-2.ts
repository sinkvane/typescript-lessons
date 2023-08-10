// Interface - тип созданный для объектов/классов, где мы указываем какие поля, какие поля, функции, свойства доджны присутствовать у этих объектов

interface Rect {
  readonly id: string //только для чтения
  color?: string //необязательный параметр
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: 'first',
  size: {
    width: 2,
    height: 2 
  },
  color: '#fff'
}