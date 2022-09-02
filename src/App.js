import React,{useState,useEffect} from 'react';
import './App.css';

function Card (props){
  return(
    <div className="col d-flex flex-column align-items-center justify-content-center m-5">
        <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
         
        </div>
        <div>
        <div className='d-flex align-items-center'>
        <span className="font-icon bg-danger">{props.data.title[0]}</span>
          <h4 > {props.data.title}</h4>
        </div>
          <p>You can Download Your Assignment from here <span className='bi bi-arrow-down-circle'></span></p>
          <a href={props.data.link} className="btn btn-danger">
            View
          </a>
        </div>
        
      </div>
  )
}
// https://docs.google.com/spreadsheets/d/1oRV96xKLtNpLF9y7t4AbGrXx3eKKTVQixykKGehOpFI/edit?usp=sharing
function App() {
  const [cardData, setCardData] = useState([]);
  const [apiReload, setApiReload] = useState(false);
  useEffect(() => {
    const apiCall = async() => {
      setApiReload(true);
      const res = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=P_0ICan4n98u_v9rGnn3HfStZSfIOqTTCjsm-g_nMnOcx6ZUtT_rKc9BFe3wCf1kVU2N-Fsod_IXSRoghOkCAir9Ypdv9aEim5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJNOmlOjzxzctlb-ELYz0Xg90L5yOhncZPplwHu-WvREkQB4Sn_CFmtZIPBYz4I1jsRSEUto5A396Desj5DYZKDuq3iZmBp-UNz9Jw9Md8uu&lib=M5XRe1-6RlgQq50VjpJxwNt2tyvDIBjj-');
      const resData = await res.json();
      setCardData(resData.data);
    }
    apiCall();
  }, [apiReload]);
  return (
    <div className="container">
      <div className="container px-4 py-5" id="hanging-icons">
    <h2 className="pb-2 border-bottom text-center">Assignment Viewer</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">

{cardData.map((e,index)=>{
  return(
    <Card key={index} data={e} />
  )
})}

      
    </div>
    <h2 className="pb-2 border-top text-center">Made By Rupin</h2>
  </div>
    </div>
  );
}

export default App;
