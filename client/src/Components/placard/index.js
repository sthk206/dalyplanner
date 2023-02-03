import "./style.css";
import { useEffect, useRef } from 'react';

const Placard = () => {
    const containerRef = useRef(null);

    useEffect(()=>{
        const container = containerRef.current;
        function handleMouseWheel(event) {
            event.stopPropagation();


            if (event.deltaY < 0) {
              container.scrollUp -= 500;
            } else {
              container.scrollUp += 500;
            }
        }
        container.addEventListener('wheel', handleMouseWheel);
        return () => {
            container.removeEventListener('wheel', handleMouseWheel);
        };

        
    },[]);

    return(
        <div  className="placard-container">
            <div className="placard-grid">
                <div className="placard-header">
                    <h1>Habits</h1>
                    <div className="placard-header-active">

                    </div>
                </div>
                <div ref={containerRef} className="placard-body">
                    <div className="child">sfsdlkjfdlks</div>
                    <div className="child">sfsdlkjfdlks</div>
                    <div className="child">sfsdlkjfdlks</div>
                    <div className="child">sfsdlkjfdlks</div>
                    <div className="child">sfsdlkjfdlks</div>
                    <div className="child">sfsdlkjfdlks</div>
                    <div className="child">sfsdlkjfdlks</div>
                </div>
                {/* <h1>asd</h1> */}

            </div>
        </div>
    )
}

export default Placard;