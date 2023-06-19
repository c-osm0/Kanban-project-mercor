
import colorfilter from '../images/colorfilter.png'
import group from '../images/Group 639.png'
import search from '../images/searchbar.png'
import calendar from '../images/calendar-2.png'
import msg from '../images/message-question.png'
import noti from '../images/notification.png'
import image from '../images/image 1.png'
import arrowdown from '../images/arrow-down.png'
import './nav.css';

function Nav() {
  return (
    <div className="App">
     <div className="navbar">
      <div className="left">
      <div><img src={colorfilter} alt="" className="nav1logo"/></div>
      <div className="title"><p>Project M.</p></div>
      <div className="logo2"><img src={group} alt="" className="group"/></div>
      </div>

      <div className="searchbar">
        <img src={search} alt="" className='searchicon'/>
        <input type="text" placeholder='Search for anything...'/></div>
        <div className="group2"><img src={calendar} alt="" />
        <img src={msg} alt="" />
        <img src={noti} alt="" /></div>
        <div className="name"><p>Anima Agarwal</p></div>
        <div className="add"><p>U.P, India</p></div>
        <div className="image"><img src={image} alt="" /></div>
        <div className="arrow"><img src={arrowdown} alt="" /></div>
     </div>
    </div>
  );
}

export default Nav;
