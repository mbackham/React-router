import React, { Component } from 'react';
class List
 extends Component {
    constructor(props) {
        super(props);
        this.state = { id:0 }
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        let matchId=this.props.match.params.id
        this.setState({
            id:matchId

        })
        
    }
    render() {
    return ( <h1>this is List{this.state.id}</h1> );
    }
}

export default List
;