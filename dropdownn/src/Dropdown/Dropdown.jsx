import React from 'react'
import { useState  , useRef}  from 'react';
import { FaGlobeAmericas } from "react-icons/fa";
import './Dropdown.css'
import photo from './download.png'
 
const Dropdown = () => {
    const [open, setOpen]=useState(false);
    const Menu=["Profile" , "your apps", "Settings", "LogOut"];

    //Solution
    const menuRef = useRef();
    const imgRef = useRef();
    window.addEventListener('click', (e)=> {
        if(e.target !== menuRef.current &&  e.target !== imgRef.current) {
            setOpen(false);
        }
    });
    return (
        <div className="main_div">
            <div className="scnd_div">
                <img
                ref={imgRef}
                onClick={()=> setOpen(!open)}
                src={<FaGlobeAmericas />}
                alt=''
                className="imgg" >
                </img >
                {/* <FaGlobeAmericas size={22} ref={imgRef} onClick={()=> setOpen(!open)}  /> */}
                {
                    open &&
               
                    <div  ref={menuRef}
                    className="list">
                        <ul  >
                            {
                                Menu.map((menu) =>(
                                    <li onClick={()=>setOpen(false)}
                                    className="list_item" Key={menu}>{menu}
                                    </li>

                                ))
                                
                            }
                            
                        </ul>

                        </div>
                }
            </div>
        </div>
       

    );
};

export default Dropdown