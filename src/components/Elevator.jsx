import { useContext,useEffect } from "react"
import ElevatorContext from "../Hooks/elevatorContext"

function Elevator(){
    const {value,floorsState,callElevator,checkElevatorstate}=useContext(ElevatorContext)
    useEffect(()=>{
        checkElevatorstate()
    },[callElevator])

    return(<>
        <div>
            
            <div className="border col" id="floor-div"><p className={floorsState[9].isElv?"d-inline":"d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[8].isElv?"d-inline":"d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[7].isElv?"d-inline":"d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[6].isElv?"d-inline":"d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[5].isElv?"d-inline":"d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[4].isElv?"d-inline":"d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[3].isElv?"d-inline":"d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[2].isElv?"d-inline":"d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[1].isElv?"d-inline":"d-none"}>zz</p></div>
            <div className="border col" id="floor-div"><p className={floorsState[0].isElv?"d-inline":"d-none"}>zz</p></div>

        </div>
    </>)
}
export default Elevator