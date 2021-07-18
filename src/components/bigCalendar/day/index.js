import React, { useEffect, useState } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ThemeProvider, useTheme, createTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
        keys.reduce((output, key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key));
            return !output && matches ? key : output;
        }, null) || 'xs'
    );
}

const Day = ({ DayEvent, index, indexWeek, rmDays, clickEvent, onClickDay, onEventMore, month, small, selectDay, onClickFooter }) => {

    const width = useWidth();
    const [colors, setColors] = useState({
        border: "#fff",
        background: "#fff",
    })

    const [eventsDay, setEventsDay] = useState([])

    useEffect(() => {
        if (!!DayEvent.item) {
            let status = {
                border: "#fff",
                background: "#fff",
            };
            if (DayEvent.item.eventsDay) {
                status = {
                    border: DayEvent.item.borderColor,
                    background: DayEvent.item.backgroundColor,
                };
            } else {
                status = {
                    border: "#fff",
                    background: "#fff",
                };
            }

            setEventsDay(DayEvent.item.eventsDay)
            setColors(status)
        }


    }, [])

    const listRender = () => {
        let len = 0
        return (
            <>
                {
                    eventsDay.map(item => {
                        return (
                            <div
                                onClick={() => {
                                    clickEvent(item)
                                }}
                                style={{
                                    display: "flex",
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                }}>
                                <div
                                    style={{
                                        height: 6,
                                        width: 6,
                                        borderRadius: "50%",
                                        backgroundColor: item.dotColor,
                                        marginTop: '5px',
                                    }}
                                />
                                <span style={{
                                    fontSize: '12px',
                                    width: "100%",
                                    overflow: 'hidden',
                                    marginLeft: 10,
                                    textOverflow: 'ellipsis'
                                }}>{item.title}</span>

                            </div>
                        )

                    })
                }
            </>)
    }


    return (
        <>{small ?
            <div
                onClick={() => {
                    if (!DayEvent.noView) {
                        let item = new Date(month)
                        item.setDate((((7) * (indexWeek) + index + 1) - rmDays))
                        onClickDay({
                            date: item,
                            events: DayEvent.item
                        })
                    }

                }}
                style={!DayEvent.noView ? {
                    height: 30,
                    width: '100%',
                    margin: '4px',
                    //  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '50%',
                    // borderLeft: `3px solid ${colors.border}`,
                    // backgroundColor: colors.background,
                    cursor: 'pointer',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'

                } : {
                    height: 30,
                    width: '100%',
                    margin: '4px 4px',
                }}
            >
                {/* {selectDay === (((7) * (indexWeek) + index + 1) - rmDays) ?

                    <div style={{
                        height: "30px", width: "30px", backgroundColor: "#4A0D77", borderRadius: '15px', color: '#fff', display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <p>
                            {!DayEvent.noView && (((7) * (indexWeek) + index + 1) - rmDays)}
                        </p>
                        <div style={{ height: 6, width: 6, borderRadius: 3, }} />
                    </div>
                    : */}
                <div style={!DayEvent.noView ? {
                    height: "30px",
                    width: "30px",
                    backgroundColor: colors.border,
                    borderRadius: '15px',
                    color: colors.border.includes("#fff") ? "#000" : '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
                    justifyContent: 'center',
                    alignItems: 'center'
                } : {
                    height: 30,
                    width: '100%',
                    margin: '4px 4px',
                }}>
                    <p>
                        {!DayEvent.noView && (((7) * (indexWeek) + index + 1) - rmDays)}
                    </p>
                    <div style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: colors.background }} />
                </div>
                {/* } */}
            </div>
            :

            <div
                onClick={() => {
                    if (!DayEvent.noView) {
                        let item = new Date(month)
                        item.setDate((((7) * (indexWeek) + index + 1) - rmDays))
                        onClickDay({
                            date: item,
                            events: DayEvent.item
                        })
                    }

                }}
                style={!DayEvent.noView ? {
                    height: 120,
                    width: '100%',
                    margin: '8px 4px',
                    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '5px 3px 5px 5px',
                    borderLeft: `3px solid ${colors.border}`,
                    backgroundColor: colors.background,
                    cursor: 'pointer',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'

                } : {
                    height: 120,
                    width: '100%',
                    margin: '8px 4px',
                }}
            >

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', fontSize: 12, padding: 8, paddingBottom: 0, height: 20 }}>
                    {!DayEvent.noView && (((7) * (indexWeek) + index + 1) - rmDays)}
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 6,
                        paddingTop: 0,
                        height: 80,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}>
                    {!!DayEvent.item && (
                        <>
                            {listRender()}
                        </>
                    )}
                </div>

                {(!DayEvent.noView && !!DayEvent.item && DayEvent.item.footerView) &&
                    <div
                        onClick={() => onClickFooter(DayEvent.item)}
                        style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', padding: 5, paddingTop: 0, height: 20, alignItems: 'center', position: 'relative', }}
                    >

                        <div>
                            {/* <Icon icon={pin20Regular} /> */}
                            <span
                                style={{
                                    fontSize: '12px',

                                    marginLeft: 5,

                                }}
                            >{DayEvent.item.footerTitle}</span>
                        </div>


                        {DayEvent.item.footerIcon ? DayEvent.item.footerIcon : <ChevronRightIcon style={{ fontSize: 18, }} />}
                    </div>
                }
            </div >}
        </>
    )
}

export default Day;