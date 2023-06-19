import category from '../images/category.png'
import message from '../images/message.png'
import task from '../images/task-square.png'
import profile from '../images/profile-2user.png'
import settings from '../images/setting-2.png'
import addsquare from '../images/add-square.png'
import mobilelogo from '../images/Ellipse 8.png'
import dots from '../images/dots.png'
import yellowdot from '../images/yellowdot.png'
import greydot from '../images/greydot.png'
import bluedot from '../images/bluedot.png'
import bulb from '../images/bulb.png'
import thoughts from '../images/thoughts.png'
import './leftPanel.css';

function Leftside() {
  return (
    <div className="App">
     <div className="border">
        <div className="category">
            <div className="img"><img src={category} alt="" /></div>
            <div className='text'>Home</div>
        </div>
        <div className="category">
            <div className="img"><img src={message} alt="" /></div>
            <div className='text'>Messages</div>
        </div>
        <div className="category">
            <div className="img"><img src={task} alt="" /></div>
            <div className='text'>Tasks</div>
        </div>
        <div className="category">
            <div className="img"><img src={profile} alt="" /></div>
            <div className='text'>Members</div>
        </div>
        <div className="category">
            <div className="img"><img src={settings} alt="" /></div>
            <div className='text'>Settings</div>
        </div>
        <div className="line"></div>
        <div className="category">
            <div className="titleproject">MY PROJECTS</div>
            <div className="logoproject"><img src={addsquare} alt="" /></div>
        </div>
        <div className="options">
            
            <div className="mobileapp">
                <div className="mobilelogo"><img src={mobilelogo} alt="" />
                    </div>
                    <div className="mobiletext">Mobile App</div>
                    <div className="dots"><img src={dots} alt="" /></div></div>
            <div className="websitere">
                <div className="weblogo"><img src={yellowdot} alt="" /></div>
                <div className="webtext">Website Redesign</div>
            </div>
            <div className="designsys">
                <div className="designlogo"><img src={greydot} alt="" /></div>
                <div className="designtext">Design System</div>
            </div>
            <div className="wireframes">
                <div className="wirelogo"><img src={bluedot} alt="" /></div>
                <div className="wiretext">Wireframes</div>
            </div>
        </div>
        
            <div className="bulb"><img src={thoughts} alt="" /></div>
            

       
     </div>
     
    </div>
    
  );
}

export default Leftside;
