import React, { useState } from 'react';

const List = () => {
    const [items, setItems] = useState([
    { id: 1, value: 'Item 1' },
    { id: 2, value: 'Item 2' },
    { id: 3, value: 'Item 3' },
    ]);

    const [editingId, setEditingId] = useState(null);
    const [editValue, setEditValue] = useState('');

    function handleEdit(id, value){
    setEditingId(id);
    setEditValue(value);
    }
    function handleEditOnChange(value){
    setEditValue(value);
    }
    function handleSave(){
        setItems(items.map((item)=>{
            if(item.id===editingId){
                return({...item, value: editValue})
            }
            return(item);
        }));
        setEditingId(null);
        setEditValue('');
    }
    function handleDelete(id){
        setItems(items.filter((item)=>item.id!== id));
        
    }

  return(
    <ul>
        {items.map((item) =>{
            if(item.id === editingId){
                return(
                    <div>
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
                <div>
                    <p>{item.value}</p>
                    <button onClick={()=>handleEdit(item.id, item.value)}>edit</button>
                    <button onClick={()=>handleDelete(item.id)}>delete</button>
                </div>
                
            )
        })}


    </ul>
  )
}
export default List;

// const handleEdit = (id, value) => {
//     setEditingId(id);
//     setEditValue(value);
//   };

//   const handleSave = (id) => {
//     setItems(
//       items.map((item) => {
//         if (item.id === id) {
//           return { ...item, value: editValue };
//         }
//         return item;
//       })
//     );
//     setEditingId(null);
//   };

//   const handleDelete = (id) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   return (
//     <ul>
//       {items.map((item) => {
//         if (item.id === editingId) {
//           return (
//             <li key={item.id}>
//               <input
//                 type="text"
//                 value={editValue}
//                 onChange={(e) => setEditValue(e.target.value)}
//               />
//               <button onClick={() => handleSave(item.id)}>Save</button>
//             </li>
//           );
//         }

//         return (
//           <li key={item.id}>
//             {item.value}
//             <button onClick={() => handleEdit(item.id, item.value)}>
//               Edit
//             </button>
//             <button onClick={() => handleDelete(item.id)}>Delete</button>
//           </li>
//         );
//       })}
//     </ul>
//   );