// import React, {Component} from "react";

// class Clock extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { date: New Date() };
//     }

//     componentDidMount() {
//         this.timerID = setInterval(() => this.tick(), 1000)

//     }

//     componentWillUnmount(){
//         clearInterval(this.timerID)
//     }

//     tick() {
//         this.setState([
//             date: New Date()
//         ])
//     }

//     render() {
//         return(
//             <div>
//                 <h1>Hello, World!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeSting()}.</h2>
//             </div>
//         )
//     }

// }