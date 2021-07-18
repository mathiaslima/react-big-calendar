import React, { useEffect, useState } from 'react';
import Day from '../day';

const Week = ({ index, data, month, rmDays, weekCount, small, selectDay, onEventMore, onClickDay, clickEvent, onClickFooter }) => {

    const [weekindex, setWeekIndex] = useState(index);
    const [events, setEvents] = useState([]);

    function diasNoMes(mes, ano) {
        var data = new Date(ano, mes, 0);
        return data.getDate();
    }
    useEffect(() => {
        if (!!data.events) {
            let array = [];
            [1, 2, 3, 4, 5, 6, 7].map(item => {
                array.push({})
            })

            let date = new Date(month);
            date.setDate(1);
            // if (date.getMonth() === month.getMonth())
            if (weekindex === 0) {
                [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                    if (date.getDay() > (index)) {

                        array[index] = {
                            noView: true,
                        }
                    }
                })
            }

            date.setDate(diasNoMes(date.getMonth() + 1, (date.getFullYear())))
            // if (date.getMonth() === month.getMonth())
            if (weekindex === (weekCount - 1)) {
                [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                    if (date.getDay() < (index))

                        array[index] = {
                            noView: true,

                        }
                })
            }

            data.events.map((item, index) => {
                array[new Date(item.date).getDay()] = { item }
            })
            setEvents(array)
        }

    }, [data, weekCount])

    return (
        <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: '16px', paddingRight: '16px' }}>
            {events.map((item, index) => {

                return (
                    <Day
                        DayEvent={item}
                        small={small}
                        month={month}
                        selectDay={selectDay}
                        onEventMore={(a, b) => onEventMore(a, b)}
                        onClickDay={(a) => onClickDay(a)}
                        clickEvent={(a) => clickEvent(a)}
                        rmDays={rmDays}
                        indexWeek={weekindex}
                        index={index}
                        onClickFooter={onClickFooter}
                    />
                )
            })
            }
        </div>
    )
}

export default Week;