
import threedots from '../images/threedots.svg'
import message from '../images/message.svg'
import folder from '../images/folder.svg'
import './card.css';

function Card(props) {
  return (
    <div className="card" draggable
    onDragEnd={()=> props.handleDragEnd(props.card?.id,props.boardId)}
    onDragEnter={()=>props.handleDragEnter(props.card?.id,props.boardId)}
    >
       <div className="label" style={{backgroundColor: props.card.color,color: props.card.lcolor}}>{props.card.label}</div>
       <div className="three_dots"><img src={threedots} alt="" /></div>
    <div className="topic_name">{props.card.text}</div>
    <div className="contentdata">{props.card.content}</div>
    {props.card.contimg?.length >=1 && <div className="content_images">{props.card.contimg?.map(title=> {
            return <div key={title}><img src={title} alt="nhimila" /></div>
         })} </div>}
    <div className="allpersons">
        {props.card.arr.map(title=> {
            return <div key={title}><img src={title} /></div>
         })} 
        </div>
        <div className="bottomright">
        <div className="comments"><img src={message} alt="" />{props.card.comments} Comments</div>
        <div className="folder"><img src={folder} alt=""/>{props.card.folder} files</div>
        </div>
    </div>
    
  );
}

export default Card;
