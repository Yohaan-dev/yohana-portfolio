import React from 'react'
import {useEffect} from 'react'

const SuccessToast = ({ message, show, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000); // auto-hide after 3s 
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);
    if (!show)
    return null;

  return (
    <div className="fixed top-28 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded shadow-lg">
      <span className="font-serif">✅ {message}</span>
    </div>
  )
}

export default SuccessToast