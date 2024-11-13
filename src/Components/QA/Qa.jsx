/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import './Qa.css';
import data from './dummyData.js';


const Qa = () => {

    const [selected, setSelected] = useState(null);

    const handleSingleSelection = (currentId) => {
        console.log(currentId);

        // If the clicked item is already opened (i.e., currentId === selected), it closes that item by setting selected to null.
        setSelected(currentId === selected ? null : currentId);
    }

    return (

        <div className="parent-accord-container" id='qa'>
            <h1 className='que-ans-heading'>Q & A's</h1>


            <div className='accor-container'>
                <div className="accrodian">
                    {
                        data && data.length > 0 ?
                            data.map(dataItem => <div key={dataItem.id} className='item'>

                                <div onClick={() => handleSingleSelection(dataItem.id)} className='title'>
                                    <h2>{dataItem.question}</h2>

                                    {/* icons */}
                                    {
                                        //selected === dataItem.id means accordian is open so '_' sign will appers;
                                        //else '+' will appears;
                                        selected === dataItem.id ? <span className='icon'>-</span> : <span className='icon'>+</span>
                                    }

                                </div>

                                {/* for answers */}
                                {
                                    //selected === dataItem.id shows the open state of accordian 
                                    //so, show the anwers;
                                    selected === dataItem.id ? <div className='answers'>{dataItem.answer}</div> : null
                                }

                            </div>)
                            : <div>No Data Found!</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Qa;
