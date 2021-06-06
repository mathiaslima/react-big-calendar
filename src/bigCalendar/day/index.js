import React, { useEffect, useState } from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Tooltip } from '@material-ui/core';

const Day = ({ item, index, indexWeek, rmDays, clickEvent, clickDay, onEventMore, month, small, selectDay }) => {


    const [colors, setColors] = useState({
        border: "#fff",
        background: "#fff",
    })

    const [offers, setOffers] = useState([])

    useEffect(() => {
        if (!!item.item) {
            let status;

            setOffers(item.item.offers)
            item.item.offers.map(item => {
                if (!!item.jobstarted && !item.jobdone) {
                    status = {
                        border: '#72DEC9',
                        background: '#D9FFF8',
                    }
                } else if (!!item.jobstarted && !!item.jobdone) {
                    status = {
                        border: '#000000',
                        background: '#F0F0F0',
                    }
                } else {
                    status = {
                        border: '#B0F82D',
                        background: '#EDFFCB',
                    }
                }
            })
            setColors(status)
        }


    }, [])

    const getStatus = (offer) => {
        if (!!offer.jobstarted && !offer.jobdone) {
            return 'Iniciado'
        } else if (!!offer.jobstarted && !!offer.jobdone) {
            return 'Finalizado';
        } else {
            return 'Agendado';
        }
    }

    const dotColor = (status) => {
        if (!!status.jobstarted && !status.jobdone) {
            return '#72DEC9'
        } else if (!!status.jobstarted && !!status.jobdone) {
            return '#000000'
        } else {
            return '#B0F82D'
        }
    }

    const listRender = () => {
        let len = 0
        return (
            <>
                {
                    offers.map(item => {
                        len = len + item.role.name.length;

                        if (len < 51)
                            return (
                                <div onClick={() => {
                                    if (offers.length === 1)
                                        clickEvent(item.pk)
                                }} style={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                                    <div style={{ height: 6, width: 6, borderRadius: "50%", backgroundColor: dotColor(item), marginTop: '5px', }}></div>
                                    <span style={{
                                        fontSize: '12px',
                                        width: "100%",
                                        overflow: 'hidden',
                                        marginLeft: 10,
                                        textOverflow: 'ellipsis'
                                    }}>{item.role.name}</span>

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
                    if (!item.noView) {
                        if (!!item.item) {
                            let item = new Date(month)
                            item.setDate((((7) * (indexWeek) + index + 1) - rmDays))
                            onEventMore(item, !!item.item)
                        } else {
                            let item = new Date(month)
                            item.setDate((((7) * (indexWeek) + index + 1) - rmDays))
                            // onEventMore(item, !!item.item)
                            clickDay(item)
                        }
                    }

                }}
                style={!item.noView ? {
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
                {selectDay === (((7) * (indexWeek) + index + 1) - rmDays) ?

                    <div style={{
                        height: "30px", width: "30px", backgroundColor: "#4A0D77", borderRadius: '15px', color: '#fff', display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <p>
                            {!item.noView && (((7) * (indexWeek) + index + 1) - rmDays)}
                        </p>
                        <div style={{ height: 6, width: 6, borderRadius: 3, }} />
                    </div>
                    :
                    <>
                        <p>
                            {!item.noView && (((7) * (indexWeek) + index + 1) - rmDays)}
                        </p>
                        <div style={{ height: 6, width: 6, borderRadius: 3, backgroundColor: colors.background.includes("#fff") ? colors.background : '#4A0D77', }} />
                    </>
                }
            </div>
            :

            <div
                onClick={() => {
                    if (!item.noView) {
                        if (!!item.item) {
                            let item = new Date(month)
                            item.setDate((((7) * (indexWeek) + index + 1) - rmDays))
                            onEventMore(item)
                        } else {
                            let item = new Date(month)
                            item.setDate((((7) * (indexWeek) + index + 1) - rmDays))
                            clickDay(item)
                        }
                    }

                }}
                style={!item.noView ? {
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
                    {!item.noView && (((7) * (indexWeek) + index + 1) - rmDays)}
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
                    {!!item.item && (
                        <>
                            {listRender()}
                        </>
                    )}
                </div>

                {(!item.noView && !!item.item) &&
                    <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-between', padding: 5, paddingTop: 0, height: 20, alignItems: 'center', position: 'relative', }}>
                        <Tooltip title="Total de jobs" placement="top-center" arrow aria-label="add">
                            <div>
                                {/* <Icon icon={pin20Regular} /> */}
                                <span
                                    style={{
                                        fontSize: '12px',

                                        marginLeft: 5,

                                    }}
                                >{item.item.title} {offers.length === 1 ? "Job" : "Jobs"}</span>
                            </div>
                        </Tooltip>

                        <ChevronRightIcon style={{ fontSize: 18, }} />
                    </div>}
            </div >}
        </>
    )
}

export default Day;