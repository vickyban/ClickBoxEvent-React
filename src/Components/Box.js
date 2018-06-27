import React, {Component} from 'react'

class Box extends Component{
    constructor(props){
        super(props);
        this.state = {
            className: 'boxes'
        }
        this.changeColor = this.changeColor.bind(this)
    }
    changeColor(){
        this.setState( {className: this.state.className + " " + this.props.className} )
    }
    render(){
        return <div id= {this.props.id} className={this.state.className} onClick={this.changeColor}>{this.props.children}</div>
    }
}

export default Box;