import * as ActionTypes from './ActionTypes' //引入ActionTypes类中所有export的变量

export const increment = (counterCaption) => {
  return ({
    type : ActionTypes.Increment,
    counterCaption
  })
}

export const decrement = (counterCaption) => {
  return ({
    type : ActionTypes.Decrement,
    counterCaption
  })
}