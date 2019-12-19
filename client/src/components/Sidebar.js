import React, { Component } from "react"
import axios from "axios"
import "../css/Sidebar.css"

class Sidebar extends Component{

   constructor(props){
      super(props)
      this.state = {
         data: []
      }
   }

   componentDidMount(){

      const url = `http://localhost:9000/${this.props.name.toLowerCase()}`

      axios.get(url, {
         params: {  }
      })
         .then((response) => {
            if (response.data === "") {
               console.log("axios.get not in the db")
            } else {
               console.log("axios.get /beer params: {}, response: ", response)
               this.setState({
                  data: response.data
               })
            }
         })
         .catch((err) => console.log(err))
   }

   render(){

      const display = this.state.data.map( (item, i) => {
         return(
            <div>
               <p className="Sidebar-p">{item.name}</p>
               <img
                  src={item.image}
                  alt={item.name}
                  className="Sidebar-img"
               />
               {i < this.state.data.length - 1 ? <hr /> : ""}
            </div>
         )
      } )

      return(
         <div className="Sidebar-main-container">
            {display}
         </div>
      )
   }
}

export default Sidebar