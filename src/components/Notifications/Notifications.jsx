import { purple } from '@mui/material/colors';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notifications = () => {
  // 토스트 알림 함수
  const notify = (message) => {
    // `containerId`를 지정하여 특정 컨테이너에서 토스트를 표시합니다.
    toast(message, { containerId: 'notifications__inner' });
  };

  return (
    <div id="notifications" >
      <ToastContainer className="notifications__inner" 
      enableMultiContainer 
      containerId="notifications__inner"
      />
      <button onClick={() => notify('안녕하세요')} style={{padding:30}}>알림 표시</button>
    </div>
  );
};

export default Notifications;
