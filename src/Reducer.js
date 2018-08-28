import * as ActionTypes from './ActionTypes' //引入ActionTypes类中所有export的变量

export default (state, action) => {
  const {counterCaption} = action
  switch (action.type) {
    case ActionTypes.Increment:
      return { ...state, [counterCaption]: state[counterCaption] + 1 }

    case ActionTypes.Decrement:
      return { ...state, [counterCaption]: state[counterCaption] - 1 }

    default:
      return state
  }
}
