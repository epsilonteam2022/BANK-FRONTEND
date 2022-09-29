import { createContext, useState } from "react";

export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
function GlobalProvider({children}){

    const [transHistory, setTransHistory] = useState([])

    const getTransHistory = () => {
        setTimeout(() => {
            setTransHistory([
                {
                    id: 0,
                    date: new Date('Jun 25, 2022 23:15:30'),
                    name: "Pablo",
                    mount: '256,80',
                    isSent: true,
                    balance: '14.743,20'
                },
                {
                    id: 1,
                    date: new Date('July 2, 1975 23:15:30'),
                    name: "Gimena",
                    mount: '6.859,54',
                    isSent: false,
                    balance: '21.602,74'
                },
                {
                    id: 2,
                    date: new Date('July 24, 1975 23:15:30'),
                    name: "Juan Pablo",
                    mount: '458,45',
                    isSent: true,
                    balance: '21.144,29'
                },
                {
                    id: 3,
                    date: new Date('July 24, 1975 23:15:30'),
                    name: 'Moe\'s Bar',
                    mount: '966,00',
                    isSent: true,
                    balance: '20.178,29'
                },
                {
                    id: 4,
                    date: new Date('August 18, 1975 23:15:30'),
                    name: 'Juan',
                    mount: '881,65',
                    isSent: false,
                    balance: '21.059,94'
                },
                {
                    id: 5,
                    date: new Date('September 17, 1975 23:15:30'),
                    name: 'Alberto',
                    mount: '985,00',
                    isSent: false,
                    balance: '22.017,94'
                },
                {
                    id: 6,
                    date: new Date('September 17, 1975 23:15:30'),
                    name: 'Gimena',
                    mount: '798,00',
                    isSent: true,
                    balance: '21.219,94'
                },
                {
                    id: 7,
                    date: new Date('September 17, 1975 23:15:30'),
                    name: 'Alberto',
                    mount: '1.569,56',
                    isSent: false,
                    balance: '22.789,50'
                },
                {
                    id: 8,
                    date: new Date('Oct 1, 1975 23:15:30'),
                    name: 'Juan',
                    mount: '2.358,00',
                    isSent: true,
                    balance: '20.431,50'
                },
                {
                    id: 9,
                    date: new Date('August 30, 1975 23:15:30'),
                    name: 'Mos\'s Bar',
                    mount: '500,00',
                    isSent: true,
                    balance: '19.931,50'
                }
            ])
        }, 20)
    }

    return(
        <GlobalContext.Provider value={{
            transHistory,
            getTransHistory
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider