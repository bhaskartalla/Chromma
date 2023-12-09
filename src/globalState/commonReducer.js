import { OPEN_TOAST, CLOSE_TOAST } from './actions_types'

const initialState = {
  title: '',
  isOpen: false,
  description: '',
  duration: 2000,
  theme: {},
}

const commonReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case OPEN_TOAST: {
      return {
        ...state,
        isOpen: true,
        title: payload?.title,
        description: payload?.description,
        duration: payload?.duration,
        theme: payload?.theme,
      }
    }
    case CLOSE_TOAST: {
      return {
        ...state,
        isOpen: false,
      }
    }

    default:
      return state
  }
}

export default commonReducer
