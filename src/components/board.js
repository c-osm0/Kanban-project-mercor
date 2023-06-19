
import addmore from '../images/addmore.svg'
import './board.css';
import Card from './card'

function Board(props) {
  return (
    <div className="board">
        <div className="headings">
          <div className="icon"><img src={props.board.icon} alt="" /></div>
          <p className="namelist">{props.board.namelist}</p>
          <div className="quantity"><p className="val">{` ${props.board?.cards?.length}`}</p></div>
          {props.board.namelist=== "To Do" && <div className="addicon"><img src={addmore} alt="" /></div>}
        </div>
        <div className="hr_line" style={{borderColor: props.board.color}}></div>
        {
          props.board?.cards?.map((item)=> (
            <Card key={item.if} card={item} boardId={props.board?.id} handleDragEnter={props.handleDragEnter} handleDragEnd={props.handleDragEnd}/>
          ))
        }
      
    </div>
    
  );
}

export default Board;
