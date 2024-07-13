import React, { useState } from 'react';
import { useParams } from 'react-router';
import './index.css'


const MealInfo = () => {
  const { idMeal } = useParams();
  const [data, setData] = useState([]);


  console.log(idMeal);
  const myFun = async () => {
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    const jsonData = await get.json();
    setData(jsonData.meals)
    console.log(data);



  }
  myFun();
  return (
    <div className=''>
      {
        data.map((curVal, index) => {
          return (
            <div className='meals'>
              <img src={curVal.strMealThumb} alt="" />
              <p>{curVal.strInstructions}</p>
              <button>{curVal.strMeal}</button>

            </div>
          )

        })
      }
    </div>
  );
}

export default MealInfo;
