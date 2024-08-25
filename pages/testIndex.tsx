import Head from 'next/head'
import type { NextPage } from "next";


const Test: NextPage = () => {
    return (
        <div className=''>
    
          <form action="./api/data" method="post">
    
              <label className='bg-white' htmlFor="name">Enter Name </label>
              <input type="text" name="name" id="name" />
    
    
              <label className='bg-white' htmlFor="age"> Enter Age </label>
              <input type="text" name="age" id="age" />
    
              <input className='bg-white' type="submit" value="submit" />
    
          </form>
        </div>
      )
};

export default Test;
