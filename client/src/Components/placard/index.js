import "./style.css";
import { useEffect, useRef, useState } from 'react';
import List from '../../Pages/lists'

const Placard = (props) => {
    const containerRef = useRef(null);
    const [editingId, setEditingId] = useState(null);
    const [editValue, setEditValue] = useState('');
    const [items, setItems] = useState(props.items);
    const [title, setTitle] = useState(props.title)
    function handleEdit(id, value){
    setEditingId(id);
    setEditValue(value);
    }
    function handleEditOnChange(value){
    setEditValue(value);
    }
    function handleSave(){
        console.log(items)
        console.log(editingId)
        console.log(editValue)
        setItems(items.map((item)=>{
            if(item.id===editingId){
                return({...item, task: editValue})
            }
            return(item);
        }));
        setEditingId(null);
        setEditValue('');
    }
    function handleDelete(id){
        setItems(items.filter((item)=>item.id!== id));
        
    }
    useEffect(()=>{
        setItems(props.items);
        setTitle(props.title)
    }, [props.items, props.title])
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
                    <h1>{title}</h1>
                    <div className="placard-header-active">

                    </div>
                </div>
                <div ref={containerRef} className="placard-body">
                    {items.map((item, index) =>{
                        item.id = item.id ?? `${title}-${index}`;
                        if(item.id === editingId){
                            return(
                                <div key={item.id}>
                                    <input 
                                        type="text" 
                                        value={editValue}
                                        onChange={(e)=>handleEditOnChange(e.target.value)}
                                    />
                                    <button onClick={()=>handleSave()}>save</button>
                                </div>
                            )
                        }
                        return(
                            <div key={item.id}>
                                <p>{item.task}</p>
                                <button onClick={()=>handleEdit(item.id, item.task)}>edit</button>
                                <button onClick={()=>handleDelete(item.id)}>delete</button>
                            </div>
                            
                        )
                    })}


                </div>
                {/* <h1>asd</h1> */}

            </div>
        </div>
    )
}

export default Placard;