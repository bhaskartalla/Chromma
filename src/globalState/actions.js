import { OPEN_TOAST, CLOSE_TOAST } from './actions_types'

export const openToast = (payload) => ({
  type: OPEN_TOAST,
  payload,
})

export const closeToast = () => ({
  type: CLOSE_TOAST,
})
