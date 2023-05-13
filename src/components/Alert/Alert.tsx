import { alertTime } from '@/services/constants/constants';
import { useEffect, useState } from 'react';

interface AlertProps {
  message: string;
  variant?:"success"|"danger"|"warning";
}

const Alert: React.FC<AlertProps> = ({ message,variant }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, alertTime);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`alert alert-${variant ? variant : "default"}  ${isVisible ? 'visible' : ''}`}>
        <div className='h-full w-[20%] bg-green-800 hover:bg-green-900 cursor-pointer text-center absolute top-0 right-[-10%] rounded-r-md flex justify-center items-center' onClick={()=> setIsVisible(false)}>x</div>
      <p className="message ">{message}</p>
      {/* <style jsx>{`
        .alert {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #00ff00; 
          color: #ffffff; 
          padding: 10px 20px;
          border-radius: 4px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .alert.visible {
          opacity: 1;
        }

        .message {
          margin: 0;
        }
      `}</style> */}
    </div>
  );
};

export default Alert;
