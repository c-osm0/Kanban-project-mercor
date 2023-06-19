
import colosquare from '../images/colosquare.png'
import appdesignpic from '../images/appdesignpic.svg'
import todocolor from '../images/todo_color.svg'
import donecolor from '../images/donecolor.svg'
import onprogress from '../images/onprogresscolor.svg'
import illusimg from '../images/illusimg.svg'
import moodimg1 from '../images/moodimg1.svg'
import moodimg2 from '../images/moodimg2.svg'
import write from '../images/write.png'
import link from '../images/link.png'
import filter from '../images/filter.png'
import downarrow from '../images/downarrow.png'
import people1 from '../images/people1.png'
import people2 from '../images/people2.png'
import people3 from '../images/people3.png'
import people4 from '../images/people4.png'
import blank from '../images/blank.png'
import share from '../images/share.svg'
import pauseout from '../images/pauseout.svg'
import pausein from '../images/pausein.svg'
import upperdots from '../images/upperdots.svg'
import yellowman from '../images/yellowman.svg'
import yellowblackwoman from '../images/yellowblackwoman.svg'
import yellowwhitewoman from '../images/yellowwhitewoman.svg'
import bluebackman from '../images/bluebackman.svg'
import whiteblackman from '../images/whiteblackman.svg'
import lowerdots from '../images/lowerdots.svg'
import calendar from '../images/calendar.svg'
import './mainPage.css';
import Board from './board'
import { useState } from 'react'

function MainPage() {
    
    const [boards,setBoards]=useState([{
        id: Date.now()+Math.random()*2,
        namelist:"To Do",
        icon:todocolor,
         color:"#800080",
        cards:[
            {
                id: Date.now()+Math.random(),
                text: "Brain Storming",
                color: "rgba(223, 168, 116, 0.2)",
                lcolor: "#D58D49",
                label: "Low",
                content: "Brainstorming bring team members' diverse experience into play.",
                arr : [
                    bluebackman,whiteblackman,yellowman
                  ],
                comments:"12",
                 folder:"0"

            },
            {
                id: Date.now()+Math.random(),
                text: "Research",
                color: "rgba(216, 114, 125, 0.1)",
                label: "High",
                lcolor: "#D8727D",
                content: "User research helps you to create an optimal product for users",
                arr : [
                    yellowwhitewoman,yellowblackwoman
                  ],
                comments:"12",
                 folder:"0"

            },
            {
                id: Date.now()+Math.random(),
                text: "Wireframes",
                color: "rgba(216, 114, 125, 0.1)",
                label: "High",
                lcolor: "#D8727D",
                content: "Low fidelity wireframes include the most basic content and visuals",
                arr : [
                    yellowwhitewoman,yellowblackwoman
                  ],
                comments:"12",
                 folder:"0"

            }
        ]
    },
{
    id: Date.now()+Math.random()*2,
    namelist:"On Progress",
    icon:onprogress,
     color:"#FFA500",
    cards:[
        {
            id: Date.now()+Math.random(),
            text: "Onboarding Illustrations",
            color: "rgba(223, 168, 116, 0.2)",
            label: "Low",
            lcolor: "#D58D49",
            contimg: [
                illusimg
            ],
            arr : [
               yellowman,whiteblackman,bluebackman
              ],
            comments:"14",
             folder:"15"

        },
        {
            id: Date.now()+Math.random(),
            text: "Moodboard",
            color: "rgba(223, 168, 116, 0.2)",
            label: "Low",
            lcolor: "#D58D49",
            contimg: [
                moodimg1,moodimg2
            ]
            ,   
            arr : [
               bluebackman
              ],
            comments:"12",
             folder:"0"

        }
        
    ]
 
},
{
    id: Date.now()+Math.random()*2,
    namelist:"Done",
    icon:donecolor,
     color:"#8BC48A",
    cards:[
        {
            id: Date.now()+Math.random(),
            text: "Mobile App Design",
            color: "rgba(131, 194, 157, 0.2)",
            lcolor: "#68B266",
            label: "Completed",
            contimg: [
                appdesignpic
            ],
            arr : [
                yellowwhitewoman,whiteblackman
              ],
            comments:"12",
             folder:"5"

        },
        {
            id: Date.now()+Math.random(),
            text: "Design System",
            color: "rgba(131, 194, 157, 0.2)",
            lcolor: "#68B266",
            label: "Completed",
            content: "It just needs to adapt the UI from what you did before",
            arr : [
                whiteblackman,bluebackman,yellowman
              ],
            comments:"12",
             folder:"5"

        }
        
    ]
}]
)

const [target,setTarget]=useState({
    cid:"",
    bid:"",
})
const handleDragEnter=(cid,bid)=>{
    setTarget({
        cid,
        bid,
    });
}
const handleDragEnd=(cid,bid)=>{
     let s_bIndex,s_cIndex,t_bIndex,t_cIndex
     s_bIndex=boards.findIndex(item=> item.id===bid)
     if(s_bIndex<0)return
     s_cIndex=boards[s_bIndex].cards?.findIndex(item=>item.id===cid)
     if(s_cIndex<0)return


     t_bIndex=boards.findIndex(item=> item.id===target.bid)
     if(t_bIndex<0)return
     t_cIndex=boards[t_bIndex].cards?.findIndex(item=>item.id===target.cid)
     if(t_cIndex<0)return

     const tempBoards=[...boards]
     const tempCard=tempBoards[s_bIndex].cards[s_cIndex]
     tempBoards[s_bIndex].cards.splice(s_cIndex,1)
     tempBoards[t_bIndex].cards.splice(t_cIndex,0,tempCard)
setBoards(tempBoards)


}
  return (
    <div className="mainpage">
        <div className="bigtitle">
            <div className="mobtext">Mobile App</div>
            <div className="writelogo"><img src={write} alt="" /></div>
            <div className="linklogo"><img src={link} alt="" /></div>
        </div>
        <div className="invite">
            <div className="downlog"><img src={colosquare} alt="" /></div>
            <div className="invitetext">Invite</div>
            <div className="people1 peoples"><img src={people1} alt="" /></div>
            <div className="people2 peoples"><img src={people2} alt="" /></div>
            <div className="people3 peoples"><img src={people3} alt="" /></div>
            <div className="people4 peoples"><img src={people4} alt="" /></div>
            <div className="blank peoples"><img src={blank} alt="" /><p>+2</p></div>

        </div>
        <div className="filteroptions">
            <div className="filter">
                <div className="logo"><img src={filter} alt="" /></div>
                <div className="fotext">Filter</div>
                <div className="downarrow"><img src={downarrow} alt="" /></div>
            </div>
            <div className="filter">
                <div className="logo"><img src={calendar} alt="" /></div>
                <div className="fotext">Today</div>
                <div className="downarrow"><img src={downarrow} alt="" /></div>
            </div>
            <div className="share">
                <div className="logo"><img src={share} alt="" /></div>
                <div className="fotext">Share</div>
            </div>
        <div className="hr"></div>
        <div className="pause">
            <div className="pauseout"><img src={pauseout} alt="" /></div>
            <div className="pausein"><img src={pausein} alt="" /></div>
        </div>
        <div className="dotsm">
            <div className="upperdot"><img src={upperdots} alt="" /></div>
            <div className="lowerdot"><img src={lowerdots} alt="" /></div>
        </div>
        </div>
        <div className="boards content">
            {boards.map((item)=> <Board key={item.id} board={item} handleDragEnd={handleDragEnd} handleDragEnter={handleDragEnter}/>)}
            </div>
    </div>
    
  );
}

export default MainPage;
