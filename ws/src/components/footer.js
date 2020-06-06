import React,{Component} from 'react';
var styleFooter={
    height:200,
    backgroundColor:'#00f',
    color:'#fff',
    fontSize:50
}
export default class Footer extends Component{   //导出Footer组件
    render(){
        return(
            <footer style={styleFooter}>我是Footer组件</footer>
        )
    }
}