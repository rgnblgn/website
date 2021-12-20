import React from 'react'
import style from './index.scss'

export default function TabPanel(props){
    return <div className='tabPanelContainer'>
        <div className='leftPanel'>
            <ul>
                <li>Sol Seçenek</li>
                <li>Sol Seçenek</li>
                <li>Sol Seçenek</li>
                <li>Sol Seçenek</li>
                <li>Sol Seçenek</li>
                <li>Sol Seçenek</li>
                <li>Sol Seçenek</li>
            </ul>
        </div>
        <div className='topPanel'>
             <ul>
                 <li>Üst Seçenek</li>
                 <li>Üst Seçenek</li>
                 <li>Üst Seçenek</li>
                 <li>Üst Seçenek</li>
                 <li>Üst Seçenek</li>
                 <li>Üst Seçenek</li>
                 <li>Üst Seçenek</li>   
            </ul>
        </div>
        <div className='panelDisplay'></div>
    </div>
}