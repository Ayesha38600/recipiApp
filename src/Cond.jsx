import React, { useState } from 'react';
import './index.css'
import { NavLink } from 'react-router-dom';


const Cond = () => {
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);
  const change = (e) => {
    setSearch(e.target.value)
    console.log(search);
  }

  const myFun = async () => {
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const jsonData = await get.json();
    setData(jsonData.meals);
    // console.log(jsonData);
    // console.log(data);
  }

  const searchRecipi = () => {
    myFun();

  }


  return (
    <>
      <div>
        <input type="text" onChange={change} />
        <button onClick={searchRecipi}>recipi search</button>
      </div>

      <div className='meals'>
        {
          data.map((curVal, index) => {
            return (
              <div className='meals'>
                <img src={curVal.strMealThumb} />
                <p>{curVal.strMeal}</p>
                <NavLink to={`/${curVal.idMeal}`}><button>details</button></NavLink>

              </div>


            )

          })
        }
      </div>



    </>


  );
}

export default Cond;
