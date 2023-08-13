
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';





function Dashboard() {

    let navigate=useNavigate()

    useEffect(()=>{
      if(sessionStorage.getItem('token')){
         navigate('/dashboard')
      } else {
        navigate('/login');
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






// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Dashboard() {
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Check if token is present in sessionStorage
//         if (!sessionStorage.getItem('token')) {
//             navigate('/login'); // Redirect to login if no token
//         }
//     }, [navigate]);

//     return (
//         <div>
//             <div style={{ "marginLeft": "1270px", "marginTop": "20px" }}>
//                 <button onClick={() => navigate('/login')} style={{ "color": "white", "backgroundColor": "red" }}>Logout</button>
//             </div>
//             <div style={{ "color": "white", "marginLeft": "500px", "marginTop": "300px", "fontSize": "30px" }}>
//                 User Login Successful!!!
//             </div>
//         </div>
//     );
// }

// export default Dashboard;
