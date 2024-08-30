import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Home } from '../pages';
import { HiDotsVertical } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";




function Header() {
    const [categories,setCategories] = useState([]);
    const [showCategories, setshowCategories] = useState(false);
    const [favorites, setfavorites] = useState();

  return (
    <nav>
        <div className='relative flex gap-4 justify-between items-center mb-2'>
            <Link to="/" className='flex gap-2'>
            <img src="/logo.svg" className='w-8'/>
            <h1 className='text-5xl font-bold tracking-tight cursor-pointer'>GIPHY</h1></Link>

            <Link className='px-4 py-1 border-b-4 hover:gradient hidden lg:block'>Reactions</Link>
            <button onClick={()=>setshowCategories(!showCategories)}><HiDotsVertical size={35}
              className={`py-0.5 transition ease-in-out hover:gradient ${
                showCategories ? "gradient" : ""
              } border-b-4 cursor-pointer hidden lg:block`}/></button>

            <button className="h-9 bg-gray-700  px-6 cursor-pointer rounded ">Favorite GIFs</button>  

            <button><HiMenuAlt3 className='text-sky-400 block lg:hidden'size={30}/></button>
        </div>
        {showCategories && <div>
            <span>Categories</span>
            <hr />
            

            </div>}
       
    </nav>
  )
}

export default Header