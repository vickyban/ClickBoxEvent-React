import React, {Component} from "react"
import Box from './Box'

class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            boxes:[]
        }
        this.nextId  = this.nextId.bind(this)
        this.add = this.add.bind(this)
        this.dangerBox = this.dangerBox.bind(this)
        this.setClassName = this.setClassName.bind(this)
        this.boxesList = this.boxesList.bind(this)
    }
    componentWillMount(){
        this.dangerBox();
        this.boxesList(this.props.count)
    }
    dangerBox(){
        this.danger = Math.floor(Math.random() * 4);
    }
    boxesList(count){
        while(count-- > 0){
            let id = this.nextId()
            this.state.boxes.push({id: id, className: this.setClassName(id) })
        }
    }
    nextId(){
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++
    }
    add(box,text){
        return <Box  key={box.id} index={box.id} className={ box.className }>{text}</Box>
    }
    setClassName(id){
        return id === this.danger? 'boom' : 'safe'
    }
    render(){
        return <div className="center-div">
            {this.state.boxes.map(box => this.add(box, "hi"))}
        </div>
    }
}
export default Container;