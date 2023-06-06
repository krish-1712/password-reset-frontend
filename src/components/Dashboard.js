
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
     
   
     <div>TEST
      </div>
       
    );
  }
  
  export default Dashboard;