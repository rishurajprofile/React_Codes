
import './Video.css'
//components are the functions that returns the UI (user interface);
function Video ({title,bgColor,channel,views,time}){
  let bg = 'dark'
  return(
   <><div className='container'>
    <div className ="pic">
    <img src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?semt=ais_hybrid&w=74&q=80" alt='Dummy'>
    </img>
   </div>
    <div className='title'>{title}</div>
    <div className ='channel'>{channel}</div>
    <div className='views'>{views}views <span>.</span>{time}</div>
    </div>
   </> 
    
    );
}
export default Video;
