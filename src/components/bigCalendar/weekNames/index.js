import React from 'react';
import {
    format,
} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
const names = [
    '2021-07-25',
    '2021-07-26',
    '2021-07-27',
    '2021-07-28',
    '2021-07-29',
    '2021-07-30',
    '2021-07-31',
]

const WeekNames = ({ small, locale = pt }) => {

    const getWeekName = (date) => {


        const formattedDate = format(
            new Date(date.split("-")[0], date.split("-")[1] - 1, date.split("-")[2]),
            small ? "EEEEE" : "EEEE", { locale }
        );
        return formattedDate;


    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', borderBottom: !small ? '0.5px solid #D6D6D6' : 'none', paddingLeft: '16px', paddingRight: '16px', marginBottom: 10, marginTop: 10, paddingTop: 8, paddingBottom: 8 }}>


            {names.map(item => {
                return (
                    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                        <span style={{ fontSize: 14, fontWeight: '400', textTransform: "capitalize" }}>{getWeekName(item)}</span>
                    </div>
                )
            })}
        </div>
    )

}

export default WeekNames;