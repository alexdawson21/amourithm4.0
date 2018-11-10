import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Suitors.css';
import Suitorprofile from "../Suitorprofile";
import Navbar from "../Navbar";
import axios from 'axios';
     
    
class Suitors extends Component {
    state = {
        profile: {
            image:"",
            seeking: "",
            name: "",
            bio: "",
            favBooks: [1,2,3,4,5],
            favGraphics: [1,2,3,4,5],
            favMovies: [1,2,3,4,5],
            favShows: [1,2,3,4,5],
            favHobbies: [1,2,3,4,5],
            favMusic: [1,2,3,4,5],
            
        },
    }

    matcher = () =>{
        
    } 

openSuitor = () =>{
    axios.get("api/profile")
    .then(res=>this.setState({profile: res.data[3]}))
    setTimeout(()=>{
        console.log(this.state.profile)
    },2000)
    setTimeout(()=>{this.setState({showProfile: true})},2000)
}

    render(){
        return(
            <div>
            <Navbar
            suitorPage={this.props.suitorPage}
            profilePage={this.props.profilePage}
            matchPage={this.props.matchPage}/>             
    <div className="suitorbox"> 
          {this.props.suitors.map(suitor =>
            <div>
                <h1>Potential Matches</h1>
                <h3>{suitor.name}</h3>
            <img src = {suitor.image} onClick={this.openSuitor}></img>
            </div>
            )}

        </div>)
        {this.state.showProfile?
      <Suitorprofile
            image = {this.state.profile.image}
            name = {this.state.profile.name}
            movies={this.state.profile.favMovies}
            books={this.state.profile.favBooks}
            shows={this.state.profile.favShows}
            graphics={this.state.profile.favGraphics}
            hobbies={this.state.profile.favHobbies}
            music={this.state.profile.favMusic}
            bio={this.state.profile.bio}
            matcher={this.props.matcher}
      />
    :null}
            </div>
        )
    }
}


export default Suitors;