import React, {Component} from 'react';

class App extends Component{
	state = {
		
	}
	render(){
		return (
			<div className="App">
        <div className = "container">
          <div className="box">
            <header>
              详情头部
            </header>
            <div className = "content">
               
            </div>
          </div>
        </div>
        <footer>
          <ul>
            <li>
              <a href="#">
                <p>收藏</p>
              </a>
            </li>
            <li>
               <a href="#">
              <p>店铺</p>
               </a>
            </li>
            <li>
             <a href="#">
              <p>加入购物车</p>
               </a>
            </li>
            <li>
             <a href="#">
              <p>立即购买</p>
               </a>
            </li>
          </ul>
        </footer>
      </div>
		)
	}
	componentDidMount(){
		
	}
}
export default App;