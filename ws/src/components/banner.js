import React,{Component} from 'react';
export default class Banner extends Component{
  componentDidMount(){
  }
    render(){
        return(
          <Carousel autoplay effect="fade">
            <div>
              <img ssrc="src/assets/19.jpg"/>
            </div>
            <div>
            <img ssrc="src/assets/20.jpg"/>
            </div>
            <div>
            <img ssrc="src/assets/21.jpg"/>
            </div>
            <div>
            <img ssrc="src/assets/22.jpg"/>
            </div>
            <div>
            <img ssrc="src/assets/23.jpg"/>
            </div>
          </Carousel>
        )
    }
}