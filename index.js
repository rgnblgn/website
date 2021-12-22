import React from 'react'
import style from './index.scss'

export default function TabPanel(props){

    const handleLeftClick = (e)=>{
        console.log(e)
    }

    const handleTopClick = (e)=>{
        console.log(e)
    }

    const exArr = [0,1,2,3,4,5,6]

    return <div className='tabPanelContainer'>
        <div className='leftPanel'>
            <ul>
                {
                exArr.map((item,index)=>{
                    return <li key={index} onClick={()=>handleLeftClick(index)}>Sol Seçenek</li>
                })
            }
            </ul>
        </div>
        <div className='topPanel'>
             <ul>
             {
                exArr.map((item,index)=>{
                    return <li key={index} onClick={()=>handleTopClick(index)}>Üst Seçenek</li>
                })
            } 
            </ul>
        </div>
        <div className='panelDisplay'>

        </div>
    </div>
}