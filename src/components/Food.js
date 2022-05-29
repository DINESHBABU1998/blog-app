import React,{ useContext } from 'react'
import { res4 } from '../api/Apid'

const Food = () => {
  const [food, setFood] = useContext(res4)
  console.log(food);
  return (
    <>
      <div className="page">
      
      {food.map((item) => {
        return (
            <div className="card">
              <img src={item.ImageAsset} alt="Nothing" />
              <p>{item.Title}</p>
              <p>{item.BlogContent}</p>
              <p>{item.PublishedDate}</p>
              <hr />
            </div>
        );
      })}
    </div>
      <div className="right"></div>
    </>
  )
}

export default Food;