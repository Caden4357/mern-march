import React, {Component} from 'react'

class PlayerForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            position:''
        }
    }
    componentDidMount(){
        console.log('Component did mount');
    }

    componentDidUpdate(){
        console.log('Component updated');
    }
    render(){
        return(
            <div>
                <h2>Player Form</h2>
            </div>
        )
    }
}
export default PlayerForm;