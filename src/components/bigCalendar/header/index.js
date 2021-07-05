import React from 'react';
import {
    format,
} from 'date-fns';
import { IconButton } from '@material-ui/core';
import pt from 'date-fns/locale/pt-BR';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Header = (props) => {

    const getTime = (date) => {

        const formattedDate = format(
            date,
            "MMMM '-' yyyy", { locale: pt }
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
                <ChevronLeftIcon />
            </IconButton>
            <div>
                <p style={{ textTransform: 'capitalize', }}>{getTime(new Date(props.month))}</p>
            </div>
            <IconButton onClick={() => changeMonth('right')} aria-label="delete" size="small">
                <ChevronRightIcon />
            </IconButton>

            {/* <div style={styles.icon}>
                <ArrowBackIcon style={{ fontSize: 16, color: '#fff', }} />
            </div>
            <p style={{ textTransform: 'capitalize', width: 150, textAlign: 'center' }}>
                
            </p>
            <div  style={styles.icon}>
                <ArrowForwardIcon style={{ fontSize: 16, color: '#fff' }} />
            </div> */}
        </div>
    )
}

export default Header;

const styles = {
    icon: {
        marginLeft: 10,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: '50%',
        padding: 2,
        cursor: 'pointer'
    }
};