import { useRef, useReducer, useEffect } from 'react'
import './App.css'
import Card from './Card'
import data from './data.json'

function reducer(todos, action) {
  switch (action.type) {
    case 'Add':
      return [...todos, { id: action.payload.id, todo: action.payload.todo, checkers: false }]
    case "checked":
      return action.payload.Check
    case "Dele":
      return action.payload.dell
    case "Filter":
      return action.payload.filter
  }
}

function App() {
  const inputRef = useRef('')
  const [state, dispch] = useReducer(reducer, data)
  // const [test, setTest] = useState('')
  // ###############################################

  const setChecked = (id) => {
    const newArr = state.map((i) => i.id === id ? { ...i, checkers: !i.checkers } : { ...i });
    dispch({ type: "checked", payload: { Check: newArr } })
  }

  const HandleDelete = (item) => {
    let newList = state.filter((val) => { return val.id !== item.id })
    console.log(newList)
    dispch({ type: "Dele", payload: { dell: newList } })
  }

  const HandleFilter = () => {
    let newfilter = state.filter((i) => { return !i.checkers })
    dispch({ type: "Filter", payload: { filter: newfilter } })
  }

  const handleClick = () => {
    if (inputRef.current.value) {
      dispch({ type: 'Add', payload: { todo: inputRef.current.value, id: state.length + 1 } })
    }
  }

  useEffect(() => {
    inputRef.current.value = ''
  }, [state])

  return (
    <div className="Todo">
      <div className='Head_wrap'>
        <div className='Head'>
          <input required ref={inputRef} placeholder='Add new Todo...' />
          <button onClick={() => { handleClick(); }}>+</button>
        </div>
      </div>
      <Card Todo={state} setChecked={setChecked} HandleDelete={HandleDelete} HandleFilter={HandleFilter} />
    </div>
  )
}

export default App
