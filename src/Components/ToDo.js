import React, { useState } from 'react'
import '../Components/style.css'


const ToDo = () => {
  const [data, setData] = useState('');

  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!data) {

    } else {
      setItems([...items, data]); 
      setData('');
    }
  }
  const deleteItem = (id) =>{
    console.log(id);
     const updateItem = items.filter((i, d) =>{
      return d !==id;
     });
     setItems(updateItem);
  }

  const removeAll = () =>{
    setItems([]);
  }
  return (
    <>
      <div className="flex justify-center items-center  main_div">

        <div className="inner_div">
          <h1 className="text-4xl m-5">Welcome To My To Do List</h1>

          <div className="addList ml-8 ">
            <input type="text" className="todo-input" name='Enter Task' placeholder="Enter task's to do today"
              value={data} onChange={(e) => setData(e.target.value)}
            />
            <button className="add_btn" title='Add task'><i className="fa-solid fa-plus ml-2" onClick={addItem}></i></button>
          </div>

          <div className="show_lists">
            {items.map((item, index) => (
              <div key={index} className="item">
                <p>{item}</p>
                <i className="fa-solid fa-trash-can delete_icon" onClick={()=>{deleteItem(index)}}></i>
              </div>
            ))}
          </div>

          <div>
            <button className="remove_btn" onClick={removeAll}>Remove All<i className="ml-2 fa-solid fa-check"></i></button>
          </div>

        </div>

      </div>
    </>
  )

}

export default ToDo;
