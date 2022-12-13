import { useRef, useEffect } from 'react';
import './App.css'
import Scrollbars from 'react-custom-scrollbars'
import { MdDelete } from "react-icons/md";
import { MdOutlineFilterList } from "react-icons/md";
const Card = ({ Todo, HandleFilter, setChecked, HandleDelete }) => {
    let Total = Todo.length
    let Completed = 0
    let Pending = 0
    Todo.map((item) => {
        item.checkers ? Completed += 1 : Pending += 1
    })
    return (
        <div className="Card">
            <div className='Card_wrap'>
                <div className="text">
                    <h1>Todo's</h1>
                    <div className="text1">
                        <p>{Total} Total, {Completed} Complete and {Pending} Pending</p>
                        <MdOutlineFilterList onClick={(e) => { HandleFilter() }} style={{ fontSize: 25, fontWeight: 9000 }} />
                    </div>


                </div>
                <div className="card">
                    <div className="card_head">
                        <div className='card_top'>
                            <div className='wrap'>
                                <div className='parent'>
                                    <p>#</p>
                                    <p>Todo Title</p>
                                </div>
                                <p> Status</p>
                            </div>
                        </div>
                    </div>
                    <Scrollbars className='scroll'>
                        {Todo?.map((item) => <div key={item.id} className="Main_card">
                            <div className='Main_cardtop' style={{ backgroundColor: item.checkers ? '#b9f4b7' : "#fff" }} >
                                <div className='wrap'>
                                    <div className='parent'>
                                        <input
                                            type="checkbox"
                                            onChange={() => setChecked(item.id)}
                                        />
                                        <p>{item.todo}</p>
                                    </div>
                                    <div className='status'><p>{item.checkers ? "completed" : "pending"}
                                    </p> <MdDelete onClick={() => { HandleDelete(item) }} /></div>
                                </div>
                            </div>
                        </div>)}
                    </Scrollbars>
                </div>
            </div>

        </div>
    )
}

export default Card 