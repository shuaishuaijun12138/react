import React,{Component} from 'react';
import "../css/index.css";
import {NavLink} from 'react-router-dom';
export default class Nav extends Component{
  constructor(props){
    super(props);
    this.state={
      nav:[]
    }
  }
  componentDidMount(){
    fetch('src/components/test.json').then(res=>{
      return res.json()
    }).then(res=>{
      this.setState({
        nav:res
      })
      console.log(this.state.nav)
    })
  }
    render(){
        return(
          <nav>
            <div>
              <img src="src/assets/logo.png"/>
              <ul id="nav">
                {
                  this.state.nav.map((items)=>{
                    return(
                      <li key={items.id}><NavLink to={items.path}>{items.firstNav}</NavLink></li>
                    )
                  })
                }
              </ul>
            </div>
          </nav>
        )
    }
}