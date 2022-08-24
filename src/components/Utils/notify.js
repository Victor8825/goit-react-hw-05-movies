import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = textMessage => {
  toast.warn(textMessage, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
