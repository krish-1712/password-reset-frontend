
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';





function Dashboard() {

    let navigate=useNavigate()

    useEffect(()=>{
      if(sessionStorage.getItem('token')){
         navigate('/dashboard')
      } else {
        navigate('/');
      }
      
    },[navigate])

 
    return (
     
   
     <div>
         <div style={{"marginLeft":"1270px","marginTop":"20px"}}>
   <button onClick={()=> navigate('/login')} style={{ "color":"white","backgroundColor":"red"}} >Logout</button>
   </div>
     <div  style={{"color":"white", "marginLeft":"500px","marginTop":"300px", "fontSize":"30px"}}> User Login Successfull!!!
   </div>

      
      </div>
    
       
    );
  }
  
  export default Dashboard;




