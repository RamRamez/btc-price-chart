import { toast } from 'react-toastify'

export const errorHandler = err => {
  const message = err.message
  if (message) {
    toast.error(message)
  } else {
    toast.error(JSON.stringify(err))
  }
  console.log(err)
}
