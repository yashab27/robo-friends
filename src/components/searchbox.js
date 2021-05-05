import React from 'react';

const Searchbox=({searchfield,searchChange})=>{
    return(
        <div className='pa2'>
            <input 
            className="pa2 ba b--blue bg-lightest-blue br-pill bw2" 
            type="search" placeholder="Search Robots...."
             onChange={searchChange}/>

        </div>
    )
}

export default Searchbox;