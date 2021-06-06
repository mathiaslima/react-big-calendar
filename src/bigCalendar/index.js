import React, { useEffect, useState } from 'react';
import Header from './header';
import Week from './week';
import WeekNames from './weekNames';
import PropTypes from "prop-types";
import Skeleton from '@material-ui/lab/Skeleton';

const BigCalendar = ({ eventsData, small, onChangeMonth, selectDate, clickDay, onEventMore, onClickEvent }) => {

    const [events, setEvents] = useState({
        '1': {

        },
        '2': {

        },
        '3': {

        },
        '4': {

        },
        '5': {

        }
    })
    const [month, setMonth] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [selectDateChange, setSelectDateChange] = useState(selectDate)
    const [rmDays, setRmDays] = useState(0);
    const [weekCount, setWeekCount] = useState([]);

    function weekOfMonth(dt) { // recebe um Date e retorna a semana do mês, baseado no valor numérico do dia
        return Math.ceil(dt.getDate() / 7);
    }

    Date.prototype.getWeekOfMonth = function (exact) {
        var month = this.getMonth()
            , year = this.getFullYear()
            , firstWeekday = new Date(year, month, 1).getDay()
            , lastDateOfMonth = new Date(year, month + 1, 0).getDate()
            , offsetDate = this.getDate() + firstWeekday - 1
            , index = 1 // start index at 0 or 1, your choice
            , weeksInMonth = index + Math.ceil((lastDateOfMonth + firstWeekday - 7) / 7)
            , week = index + Math.floor(offsetDate / 7)
            ;
        if (exact || week < 2 + index) return week;
        return week === weeksInMonth ? index + 5 : week;
    };

    function diasNoMes(mes, ano) {
        var data = new Date(ano, mes, 0);
        return data.getDate();
    }

    useEffect(() => {
        getEvents()
    }, [])

    const getEvents = () => {

        setLoading(true)
        let temp = {
            '1': {
                events: []
            },
            '2': {
                events: []
            },
            '3': {
                events: []
            },
            '4': {
                events: []
            },
            '5': {
                events: []
            },
            '6': {
                events: []
            }
        };
        let date = new Date(month);
        let rm = 0;
        date.setDate(1);
        [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
            if (date.getDay() > (index)) {
                rm = rm + 1
            }
        })
        setRmDays(rm);
        date.setDate(diasNoMes(date.getMonth() + 1, (date.getFullYear())))

        getCountWeek(date.getWeekOfMonth(true));

        eventsData.map(item => {
            temp = {
                ...temp, [(new Date(item.startDate)).getWeekOfMonth(true)]: {
                    events: [...temp[(new Date(item.startDate)).getWeekOfMonth(true)].events, item]
                }
            }
        })
        setEvents(temp)
    }

    const getCountWeek = (count) => {
        let array = [];
        for (let index = 0; index < count; index++) {
            array.push(index + 1);
        }
        setWeekCount(array);
    }

    useEffect(() => {
        getEvents()
    }, [month])

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false)
            }, 10000);


        }
    }, [events])



    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: "100%"
        }}>
            <Header month={month} small={small} onChange={(date) => {
                onChangeMonth(date)
                setMonth(date)
            }} />
            <WeekNames small={small} />
            {!loading ? <div style={{ display: 'flex', flexDirection: "column", width: '100%', flexWrap: "wrap" }}>
                {weekCount.map((item, index) => {
                    return (
                        <Week
                            small={small}
                            selectDay={new Date(selectDateChange).getDate()}
                            clickDay={(a) => {
                                setSelectDateChange(a)
                                clickDay(a)
                            }}
                            onEventMore={(a, b) => onEventMore(a, b)}
                            weekCount={weekCount.length}
                            clickEvent={(a) => onClickEvent(a)}
                            month={month}
                            rmDays={rmDays}
                            item={item}
                            data={events[item]}
                            index={index}
                        />
                    )
                })}
            </div>
                :
                <Skeleton variant="rect" width={"100%"} height={"100%"} />
            }
        </div>

    )
}

BigCalendar.defaultProps = {
    eventsData: [],
    small: false,
    onChangeMonth: () => { },
    selectDate: new Date(),
    clickDay: () => { },
    onEventMore: () => { },
    onClickEvent: () => { },
};

BigCalendar.propTypes = {
    eventsData: PropTypes.array,
    small: PropTypes.bool,
    onChangeMonth: PropTypes.func,
    selectDate: PropTypes.instanceOf(Date),
    clickDay: PropTypes.func,
    onEventMore: PropTypes.func,
    onClickEvent: PropTypes.func,
};

export default BigCalendar;