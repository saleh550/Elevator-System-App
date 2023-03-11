import { createContext, useState } from 'react';

const ElevatorContext = createContext();


export const ElevatorProvider = (props) => {
const [value,setValue] =useState("test") 
const [floorsState,setFloorsState]=useState([
    {isElv:false,position:0,isCalled:false},
    {isElv:false,position:1,isCalled:false},
    {isElv:false,position:2,isCalled:false},
    {isElv:false,position:3,isCalled:false},
    {isElv:true,position:4,isCalled:false},
    {isElv:false,position:5,isCalled:false},
    {isElv:false,position:6,isCalled:false},
    {isElv:false,position:7,isCalled:false},
    {isElv:false,position:8,isCalled:false},
    {isElv:false,position:9,isCalled:false},
])

const callElevator=(floorNumberCalled)=>{



floorsState.map((floor)=>{
    // console.log(floor.isElv)
    if(floor.isElv){
        if(floor.position<floorNumberCalled){
            console.log('up')
            setFloorsState(prevstate=>prevstate.map((floor2)=>{
                if(floor.position+1===floor2.position){
                    return { ...floor2, isElv: true };
                }else{
                    return { ...floor2, isElv: false };
                }
            }))
            setFloorsState(prevstate=>prevstate.map((floor2)=>{
                if(floorNumberCalled===floor2.position){
                    return {...floor2, isCalled: true };
                }else{
                    return floor2;
                }
            }))
            // checkElevatorstate(floorNumberCalled)
            console.log(floorsState)
            return
        }else if(floor.position===floorNumberCalled){
            console.log('dont move')
        }else{
            console.log('down')
        }
    }
})
}
const checkElevatorstate=()=>{
    floorsState.map((floor)=>{
        if(floor.isCalled){
            if(!floor.isElv){
                callElevator(floor.position)
            }

        }
    })

}

  return (
    <ElevatorContext.Provider value={{value,floorsState,callElevator,checkElevatorstate}}>    
      {props.children}
    </ElevatorContext.Provider>
  );
};


export default  ElevatorContext ;



