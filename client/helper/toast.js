import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const notify = (message) => {
  toast(message, {
    autoClose: 1000,
    position: 'bottom-right',
    theme: 'dark'
  }) // ToastOptions
}

export default notify
