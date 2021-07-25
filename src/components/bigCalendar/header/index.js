import React from 'react';
import {
    format,
} from 'date-fns';
import { IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Header = (props) => {

    const getTime = (date) => {

        const formattedDate = format(
            date,
            "MMMM '-' yyyy", { locale: props.locale }
        );
        return formattedDate;


    }

    const changeMonth = (direction) => {
        let item;
        if (direction === 'left') {
            item = new Date(props.month);
            item.setMonth(item.getMonth() - 1);
        } else {
            item = new Date(props.month);
            item.setMonth(item.getMonth() + 1);
        }
        props.onChange(item);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <IconButton onClick={() => changeMonth('left')} aria-label="delete" size="small">
                {props.leftIcon ? props.leftIcon : <ChevronLeftIcon />}
            </IconButton>
            <div>
                <p style={{ textTransform: 'capitalize', }}>{getTime(new Date(props.month))}</p>
            </div>
            <IconButton onClick={() => changeMonth('right')} aria-label="delete" size="small">
                {props.rightIcon ? props.rightIcon : <ChevronRightIcon />}
            </IconButton>
        </div>
    )
}

export default Header;