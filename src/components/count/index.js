import React, {useState, useEffect} from 'react'

export default function CountComponent (){

    const [count,setCount] = useState(0)
    const [isRunning,setIsRunning] = useState(true)

    let testInter;
    useEffect(()=>{
        if(count>10){
            console.log("count 10'u aştı")
        }else{
            console.log(count)
        }
        console.log('useEffet giriş')
        if(isRunning){
            testInter = setInterval(()=>{
                console.count('interval is working')
            },1000)
        }
        return () => clearInterval(testInter);
    },[isRunning])

    return <div>
        <button onClick={()=>{count===0 ? setCount(count) : setCount(count-1)}}>-</button>
        <span>{count}</span>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button onClick={()=>{setIsRunning(!isRunning)}}>Değiştir</button>

    </div>
}
