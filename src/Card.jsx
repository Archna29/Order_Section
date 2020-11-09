
//Page is about the sturcture of order information ...
//</div> </div> 
import React from 'react';
const Info=(props)=>{
 return (
   <>
  <li className="list-group-item">
  <div className="row no-gutters">

  <div className="col-md-2">
      <img src={props.image} className="card-img " alt="..." style={{width:"100px"}}/>
    </div>
    <div className="card-body">  
  <div className="row grid-row">
  <div className="col-sm-5">
   {props.name}
    <p className="card-text"><small className="text-muted">{props.date}</small></p>
    </div>
    <div className="col-sm-2" >
    <h5 className="card-title"> {props.price}</h5>
    </div>
    <div className="col-sm-2">
   <h6> <a href="view" style={{color:'black'}} >View</a></h6>
   </div>
    <div className="col-sm-2">
<h6> <a href="reorder" style={{color:'black'}} >Reorder </a></h6>
    </div>
  
    <div className="col-sm-1">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    <p className="card-text"> <a href="review"><small className="text-muted" >Write a product review</small></a></p>
    </div>
  </div>
</div>
  </div>
</li>
   </>
);
};

   export default Info;