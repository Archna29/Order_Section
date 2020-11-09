//THis page is about the components of list of from where we can
import React from 'react';
const Text=()=>{
return(
<>
<div >
  <div >
    <h6 className="card-title text-secondary mt-4 ml-4">From here you can :</h6>
    <ul className="list mt-3 ml-5" >
    <li>Find the estimated delivery date for your recent purchase</li>
    <li>Track any returns for your order</li>
    <li >See where the order is being shipped</li>
  </ul>
  <div className="text-center">
    <a href ="shop" className="btn text-white mt-5 shopping ">Start Shopping</a></div>
  </div>
</div>
</>
);
};
export default Text;