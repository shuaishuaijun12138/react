import React,{Component} from 'react';
import Nav from './nav'; 
import Banner from './banner';
export default class Home extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <Banner/>
            </div>
        )
    }
}