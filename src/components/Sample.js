import { useEffect, useState } from "react";

function Sample(){
    const [count,setCount]=useState(0)
    const [name,setName]=useState("swathi")
    let number=0;
    // function setNumber(num){
    //     number = number + num
    //     console.log(number)
    // }
    console.log("clicked")
    useEffect(()=>{
        console.log(number)
        number=number+10
        console.log("changed number=",number)
           },[count,name])
    return (
        <div>
            <p>count:{count} name:{name} number:{number}</p>
            <button onClick={()=> setCount(count+1)}>+</button>
            <button onClick={()=> setCount(count-1)}>-</button>
            <button onClick={()=> setName("naga")}>change name</button>
        </div>
    )
}

export default Sample;