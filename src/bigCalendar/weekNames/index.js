import React from 'react';

const names = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
]

const namesSmall = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const WeekNames = ({ small }) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'row', borderBottom: !small ? '0.5px solid #D6D6D6' : 'none', paddingLeft: '16px', paddingRight: '16px', marginBottom: 10, marginTop: 10, paddingTop: 8, paddingBottom: 8 }}>
            {!small ?
                <>
                    {names.map(item => {
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                                <span style={{ fontSize: 14, fontWeight: '400' }}>{item}</span>
                            </div>
                        )

                    })}
                </>
                :
                <>
                    {namesSmall.map(item => {
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                                <span style={{ fontSize: 14, fontWeight: '400' }}>{item}</span>
                            </div>
                        )

                    })}
                </>
            }
        </div>
    )

}

export default WeekNames;