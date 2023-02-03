import { useState } from "react";
import "./numberGame.css"

const dataValue = [14,11,12,5,3,4,2,1,6,7,8,9,10,13,'', 15];

function NumberGame() {
    const [selectedIndex, setSelectedIndex] = useState();
    const [data,setData] = useState(dataValue) 

    const handleMove = (index) => {
        debugger;
        let dataValue = data[index]
        if(dataValue){
            setSelectedIndex(index)
        } else {
            let selectedDataValue = data[selectedIndex]
            let tempData = data.map((item,indexValue) => {
                if(indexValue === selectedIndex){
                    return ''
                } else if(!item){
                    return selectedDataValue
                }
                return item
            })
            setData(tempData)
            setSelectedIndex('')
        }
    }

    return (
            <div className="numberGameWrap">
                <div className="heading">
                    Number Game
                </div>
                <div className="main">
                    {data.map((item, index) => {
                        return (
                            <div 
                            key={index} 
                            className={`item ${index === selectedIndex ? 'active' : '' }`}  
                            onClick={() => handleMove( index)}
                            >{item}</div>
                        )
                    })}
                </div>
            </div>
    )
}

export default NumberGame;