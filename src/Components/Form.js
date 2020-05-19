import React,{useState} from 'react';
import{useSelector,useDispatch} from "react-redux";
import { book } from "../statemanagement/Actions/index"

function Form (props){
  const[userInfo,setUserInfo]=useState({
      name:"",
      gender:"",
      contact:"",
  });
  const dispatch = useDispatch();
    const seats = useSelector(store => store.seats);
    const data=useSelector(state=>state.data);
    console.log("data",data)
  

const handleChange=(e)=>{
  let userInfoCopy={...userInfo};
  userInfoCopy[e.target.id]=e.target.value;
  setUserInfo(userInfoCopy)
  console.log(userInfoCopy);
}

  
    return (
      <div>
        <div>
        <div>
        <h4>Total Seats:{seats}</h4>
        </div>
        <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
            <input name="Name"  id="name" type="text" placeholder="Name" onChange={handleChange} required/>
          </div>
          </div>
          <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Gender</label>
            <div class="col-sm-10">
            <select id="gender" onChange={handleChange}>
            <option value="Select">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            </div>
        </div>
        <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Contact</label>
            <div class="col-sm-10">
            <input name="contact" id="contact" type="number" placeholder="Contact NO" onChange={handleChange} required/>
          </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
           <button type="button"class="btn btn-primary btn-sm" onClick={() => {
          dispatch(book(userInfo));
        }} >Buy Ticket</button>
        </div>
        </div>
        </div>
        <h4>Reservation List</h4>
        <div>
        <div class="col-md-8">
         <table class="table" >
            <thead class="thead-dark">
            <tr >
            <th>Seat No</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                 <th scope="col"> Contact No.</th>
                 </tr>
                 </thead>
                 {data.map((item, index) => (
        <tbody >
          <tr>
              <td>B{1+index*12}Z{1+index*11}C{1+index}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
            <td>{item.contact}</td>
            </tr>
           </tbody>
                ))}
              </table>
              </div>
            </div> 
      </div>
    )
  }


export default Form;
