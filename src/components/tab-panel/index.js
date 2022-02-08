import React, {useState, useEffect} from "react"
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchTabHeaders} from '../../service/tab-panel/action'
import "./index.scss"

function TabPanel(props){
    
    const [selectedIndex,setSelectedIndex] = useState(0)
    const [selectedMenuIndex,setSelectedMenuIndex] = useState(0)

    useEffect(()=>{
        props.fetchTabHeaders()
    },[])

    const handleLeftClick = (e)=>{
        setSelectedIndex(e)
    }

    const handleTopClick = (e)=>{
        setSelectedMenuIndex(e)
    }

    const exArr = [0,1,2,3,4,5,6]

    return <div className="tabPanelContainer">
        <div className="leftPanel">
            <ul>
                {
                props.tabs && props.tabs[selectedMenuIndex] && props.tabs[selectedMenuIndex].subTabs.map((item,index)=>{
                    return <li key={index} onClick={()=>handleLeftClick(index)}>{item}</li>
                })
                }
            </ul>
        </div>
        <div className="topPanel">
             <ul>
             {
                props.tabs && props.tabs.map((item,index)=>{
                    return <li key={index} onClick={()=>handleTopClick(index)}>{item.title}</li>
                })
            } 
            </ul>
        </div>
        <div className="panelDisplay">
            {
            exArr.map((item,index)=>{
                    return <div key={index} className={selectedIndex === index ? "panel selected" : "panel"} >{item}</div>
                })
                }
        </div>
    </div>
}

TabPanel.propTypes={
    fetchTabHeaders: PropTypes.func
}

function mapStateToProps(state){
    return{
        tabs:state.tabs.tabs
    }
}

export default connect(mapStateToProps,{fetchTabHeaders})(TabPanel)