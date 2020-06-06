import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import "antd/dist/antd.css";
import Home from './components/home';
import './css/index.css';
import Product from './components/product/product'; 
import {HashRouter,Switch,Route} from 'react-router-dom';
class Hello extends Component{
    render(){
        return(
            <HashRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/yxdxt" component={Product}/>
                </Switch>
            </div>
            </HashRouter>
        )
    }
}
ReactDOM.render(
    <Hello/>,
    document.getElementById("root")
)