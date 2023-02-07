import "./style.css";
import Placard from "../../Components/placard"
import { useEffect, useRef, useState } from 'react';

const Homepage = () => {
    const flexboxRef = useRef(null);
    const containerRef = useRef(null)
    const [placards, setPlacards] = useState([]);
    useEffect(()=>{
        fetch("/members")
            .then(
                res=>res.json()
            )
            .then(
                data => {
                setPlacards(data.placards)
                console.log('blablabla')
                }
            )
        // setPlacards(placardMock.placards)
        // const target = document.querySelector('.homepage-flexbox')

        // function handleWheel(event) {
        //     event.preventDefault();
        //     if (event.deltaY < 0) {
        //       target.scrollLeft -= 500;
        //     } else {
        //       target.scrollLeft += 500;
        //     }
        // }
        // target.addEventListener("wheel", handleWheel);
        // return ()=>{
        //     target.removeEventListener('wheel', handleWheel)
        // }
        const container = flexboxRef.current;
        function handleMouseWheel(event) {
            event.preventDefault();
            if (event.deltaY < 0) {
              container.scrollLeft -= 500;
            } else {
              container.scrollLeft += 500;
            }
        }
        // flexboxRef.current = document.querySelector('.homepage-container');
        
        containerRef.current.addEventListener('wheel', handleMouseWheel);
        return () => {
            containerRef.current.removeEventListener('wheel', handleMouseWheel);
        };

        
    },[]);



    return(
        <div ref={containerRef} className="homepage-container">
            <div ref={flexboxRef} className="homepage-flexbox">
                {placards.map((placard, index)=>{
                    return(<Placard key={placard.id || index} title={placard.title} items={placard.items}/>)
                })}
            </div>

        </div>
    )
}

export default Homepage;