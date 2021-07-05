import React, { useEffect, useState } from 'react';
import Day from '../day';

const Week = ({ index, data, month, rmDays, weekCount, small, selectDay, onEventMore, clickDay, clickEvent }) => {

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
            if (weekindex === (weekCount - 1)) {
                [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
                    if (date.getDay() < (index))

                        array[index] = {
                            noView: true,

                        }
                })
            }



            data.events.map((item, index) => {

                array[new Date(item.startDate).getDay()] = { item }

            })
            setEvents(array)
        }

    }, [data, weekCount])

    return (
        <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: '16px', paddingRight: '16px' }}>
            {events.map((item, index) => {

                return (
                    <Day
                        item={item}
                        small={small}
                        month={month}
                        selectDay={selectDay}
                        onEventMore={(a, b) => onEventMore(a, b)}
                        clickDay={(a) => clickDay(a)}
                        clickEvent={(a) => clickEvent(a)}
                        rmDays={rmDays}
                        indexWeek={weekindex}
                        index={index}
                    />
                )
            })
            }
        </div>
    )
}

export default Week;