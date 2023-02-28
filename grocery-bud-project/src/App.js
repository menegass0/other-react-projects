import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({
    show:false,
    msg:'',
    type:''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('1hrlo');
    if(!name){
      showAlert(true, 'danger', 'please enter value')
    }else if(name && isEditing){

    }
    else{
      showAlert(true, 'success', 'item added to the list');
      const newItem = {id: new Date().getTime().toString(),
      title:name,}
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show=false, type="", msg="") =>{
    setAlert({show, type, msg})
  }
  
  const removeItem = (id) =>{
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id))
  }
  return (
    <section className="section-center">
      <form action="" className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className='grocery' placeholder='e.g eggs' value={name} onChange={(e) => setName(e.target.value)}/>
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem}/>
          <button className='clear-btn' onClick={() => {
            setList([]);
            showAlert(true, 'danger', 'empyt list')
          }}>clear items</button>
        </div>
      )}
    </section>
  )
}

export default App