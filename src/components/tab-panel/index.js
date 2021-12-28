import React, {useState} from 'react'
import style from './index.scss'

export default function TabPanel(props){
    
    const [selectedIndex,setSelectedIndex] = useState(0)
    const [selectedMenuIndex,setSelectedMenuIndex] = useState(0)


    const handleLeftClick = (e)=>{
        setSelectedIndex(e)
    }

    const handleTopClick = (e)=>{
        setSelectedMenuIndex(e)
    }

    const exArr = [0,1,2,3,4,5,6]

    const topMenus = ['Men','Women','Shoes','Tech','Kids','Car','Home']

    const menSubmenus = ['Shirt','Jacket','Shorts','Jeans','Suits','Underwear','Coats']
    const womenSubmenus = ['Dresses','Skirts','Shorts','Jeans','Blouse','Underwear','Coats']
    const shoesSubmenus = ['Men','Women','Kids','Sport','Classic','Winter','Summer']
    const techSubmenus = ['PC','Mobile','Television','Game','White','Drones','Accessory']
    const kidsSubmenus = ['Shirts','Shorts','Shoes','Toys','Baby','Furniture','Etc.']
    const carsSubmenus = ['Cars1','Cars2','Cars3','Cars4','Cars5','Cars6','Cars7']
    const homeSubmenus = ['Home1','Home2','Home3','Home4','Home5','Home6','Home7']

    const subMenuArr = [menSubmenus,womenSubmenus,shoesSubmenus,techSubmenus,kidsSubmenus,carsSubmenus,homeSubmenus]

    return <div className='tabPanelContainer'>
        <div className='leftPanel'>
            <ul>
                {
                subMenuArr[selectedMenuIndex].map((item,index)=>{
                    return <li key={index} onClick={()=>handleLeftClick(index)}>{item}</li>
                })
                }
            </ul>
        </div>
        <div className='topPanel'>
             <ul>
             {
                topMenus.map((item,index)=>{
                    return <li key={index} onClick={()=>handleTopClick(index)}>{item}</li>
                })
            } 
            </ul>
        </div>
        <div className='panelDisplay'>
            {
            exArr.map((item,index)=>{
                    return <div key={index} className={selectedIndex === index ? "panel selected" : 'panel'} >{item}</div>
                })
                }
        </div>
    </div>
}
