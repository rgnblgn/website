import React, {useState, useEffect} from 'react'

export default function CountComponent (){

    const [count,setCount] = useState(0)
    const [isRunning,setIsRunning] = useState(false)

    let testInter;

    const setCountValue = (e)=>{
        if(e.currentTarget.value<0){
            setCount(0)
        }else {
            setCount(e.currentTarget.value)
        }
        console.log(count)
    }

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
    },[isRunning,count])

    return <div className='count-container'>
        <button onClick={()=>{count===0 ? setCount(count) : setCount(parseInt(count)-1)}}>-</button>
        <input type="number" value={count} onChange={setCountValue} />
        <button onClick={()=>{setCount(parseInt(count)+1)}}>+</button>
        <button onClick={()=>{setIsRunning(!isRunning)}}>Değiştir</button>

    </div>
}
