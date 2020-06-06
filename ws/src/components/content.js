import React from 'react';
var styleContent={
    height:400,
    backgroundColor:'#0ff',
    color:'#fff',
    fontSize:50
}
export default class Content extends React.Component{   //导出Content组件
    render(){
        return(
            <div style={styleContent}>我是Content内容部分</div>
        )
    }
}
