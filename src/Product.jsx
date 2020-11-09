//This page is about the components inside the container in order Section...
import React from 'react';
import Data from './Data';
import Info from './Card';
import Text from './Text.jsx';
//This function will make our compnents set inside a div .. and also map the data in data.json 
const Product=()=> {
  return (
    <>
<div className="container p-2 my-5 border border-danger border-3 " >
      <h3 className="heading mt-5 ml-5">
     Recent Purchases</h3>
      <ul className="list-group list-group-flush">
          {Data.map((val, ind) => {
            return (
              <>
           <Info key={ind} image={val.image} 
                date={val.date} price={val.price} 
        //Here we will map through the title objects.
                name={ 
                     <ul className="lists">
      {val.title.map((sub,index)=>
       <li>
    {sub.info}
      </li>
  )}
</ul> }
/>
</>
);
          })}
          <Text/>  
          </ul>  
          
          </div>
    </>
  );
}
export default Product;