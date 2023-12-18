import React, { useState } from 'react';
import { Scheduler as MyScheduler } from "@aldabil/react-scheduler";
import { ko } from 'date-fns/locale';

const Scheduler = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Meeting",
      start: new Date(),
      end: new Date(new Date().setHours(new Date().getHours() + 1)),
      resourceId: 1,
      admin_id: 300,
    }
  ]);

  const { handleEventsChange, handleCellClick, handleEventClick } = UseSchedulerEvents(events, setEvents);

  return (
    <div id='scheduler'>
      <div className='scheduler__header'>안녕하세요</div>
      <div className='scheduler__container'>
        <MyScheduler
          view="day"  
          locale={ko}
          week={{
            weekDays: [0, 1, 2, 3, 4, 5, 6],
            weekStartOn: 1,
            startHour: 9,
            endHour: 17,
            step: 60,
          }}
          month={{
            weekDays: [6, 0, 1, 2, 3, 4, 5],
            weekStartOn: 1,
            startHour: 9,
            endHour: 17,
            step: 60,
          }}
          events={events}
          onEventDrop={(event) => handleEventsChange({ event, action: 'update' })}
          onEventResize={(event) => handleEventsChange({ event, action: 'update' })}
          onEventEdit={(event) => handleEventClick(event.id)} // 수정은 클릭 이벤트로 처리
          onEventDelete={(event) => handleEventsChange({ event, action: 'delete' })}
          onCellClick={handleCellClick}
          onEventView={(eventId) => handleEventClick(eventId)} // onEventView를 handleEventClick으로 대체
          viewerExtraComponent={(fields, event) => (
            <ViewerExtra fields={fields} event={event} />
          )}
          className="scheduler__calendar"
        />
      </div>
    </div>
  );
};

export default Scheduler;