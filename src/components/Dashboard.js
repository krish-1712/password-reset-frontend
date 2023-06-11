
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
     
   
     <div> User Login Successfull!!!
      </div>
       
    );
  }
  
  export default Dashboard;