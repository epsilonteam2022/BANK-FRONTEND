import { useEffect } from "react";
import { createContext, useState } from "react";

export const GlobalContext = createContext();

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
        }, 2000)
    }

    const [metodos, setMetodos] = useState([
        {
            id: 1,
            entity: "Naranja",
            acountNmr: "34548321-548/546",
            financial: "visa",
            titular: "Mariana Gomez",
            tipo: "credito",
            last4: "4568",
            color: ["#ff9318", "#e0ab6d"]
        },
        {
            id: 2,
            entity: "CMR",
            acountNmr: "456968753-48/568",
            financial: "mastercard",
            titular: "Mariana Gomez",
            tipo: "credito",
            last4: "6875",
            color: ["#153b10", "#375a33"]
        },
        {
            id: 3,
            entity: "Santander",
            acountNmr: "89765468-6886/845",
            financial: "visa",
            titular: "Mariana Gomez",
            tipo: "debito",
            last4: "1389",
            color: ["#e41717", "#d85c5c"]
        }
    ])

    const [actualPos, setActualPos] = useState(0)
    const [actualMet, setActualMet] = useState(0)

    const shift = (dir) =>{
        const ele = document.getElementById("metodos")
        console.log(ele.scrollWidth);
        console.log(ele.scrollLeft)
        console.log(ele.offsetLeft);
        const padd = parseInt(window.getComputedStyle(ele).getPropertyValue("padding-left").split("px")[0])
        const nro = metodos.length
        const paso = (ele.scrollWidth - padd*2)/nro
        console.log(padd);

        if(dir === "right" && actualPos < (ele.scrollWidth - padd*2 - paso)){ 
            let actualP = actualPos + paso 
            let actualM =  actualMet + 1    
            ele.scroll({left: actualP, behavior:"smooth"})
            console.log(ele.scrollLeft)
            setActualPos(actualP)
        }

        if(dir === "left" && actualPos > 0){ 
            let actualP = actualPos - paso   
            let actualM =  actualMet - 1
            ele.scroll({left: actualP, behavior:"smooth"})
            console.log(ele.scrollLeft)
            setActualPos(actualP)
        }
    }

    useEffect(() => {
        console.log(actualPos);
    }, [actualPos])

    return(
        <GlobalContext.Provider value={{
            transHistory,
            metodos,
            getTransHistory,
            shift
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
