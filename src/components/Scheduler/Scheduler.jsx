import React, { useState } from "react";
import { Scheduler as MyScheduler } from "@aldabil/react-scheduler";
import { ko } from "date-fns/locale";
import axios from "axios";


const Scheduler = () => {
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]); 


  // 새 태스크를 추가하고 상태를 업데이트하는 함수
  const addTask = (newTask) => { 
    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  // 새 이벤트를 추가하고 상태를 업데이트하는 함수
  const addEvent = (newEvent) => {
    setEvents((currentEvents) => [...currentEvents, newEvent]);
  };

  // 태스크를 서버에 추가하는 함수
  const handleTaskSubmit = async (taskData) => { 
    try{
      const response = await axios.post('/api/tasks', taskData)
      if(response.status===200 && response.data){
        addTask(response.data);
      }
    }catch(error) {
      console.log('태스크 추가 중 에러', error);
    }
  };

  // 이벤트를 서버에 추가하는 함수
  const handleEventFormSubmit = async (formData) => {
    // 에러 처리
  };

  // 이벤트를 확인하고 서버에 생성하거나 수정하는 핸들러
  const handleConfirm = async (event, action) => {
    // 서버와 통신하는 로직 처리 및 상태 업데이트
  };

  // 이벤트를 서버에서 삭제하고 상태를 업데이트하는 핸들러
  const handleDelete = async (deletedId) => {
    // 서버와 통신하는 로직 처리 및 상태 업데이트
  };


  return (
    <div id="scheduler">
      <div className="scheduler__header">일정 관리</div>
      <div className="scheduler__container">
        <MyScheduler 
          height={300}
          view="week"
          locale={ko}
          events={events} 
          tasks={tasks}
          resourceViewMode="tabs"
          resourceFields={{
            idField: "member_id",
            textField: "title",
            colorField: "color",
          }}
          fields={[
            {
              name:"member_id",
              type:"select",
              options: [
                { id: 1, text: "김길동", value: 1 },
                { id: 2, text: "박길동", value: 2 }
              ],
              config:{ label:"member", required: true}
            }
          ]}
          day={{
            startHour: 9,
            endHour: 17,
            step: 120,
          }}
          week={{
            weekDays: [0, 1, 2, 3, 4, 5, 6],
            weekStartOn: 1,
            startHour: 9,
            endHour: 17,
            step: 120,
          }}
          month={{
            weekDays: [0, 1, 2, 3, 4, 5, 6],
            weekStartOn: 0,
            startHour: 9,
            endHour: 17,
            step: 60,
          }}
        />
        {/* 기타 필요한 컴포넌트 */}
      </div>
    </div>
  );
};

export default Scheduler;