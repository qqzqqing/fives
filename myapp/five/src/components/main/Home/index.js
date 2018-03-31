import React, {Component} from 'react';

import store from '@/store/index.js';
import homeData from '@/api/homeData.js';

import { Carousel, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';
class Model extends Component{
	state = {
		homebanner:[],
		homenav:[],
	    data: ['1', '2', '3','4','5','6','7'],
	    imgHeight: 176,
	    slideIndex: 0,
	    autoplay:true
    
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI','AiyWuBfffklrrUDlFignR', 'TekJsssVCjLFexlOCuWn', 'IJOtIlfsYtttaDTRVrLI', 'TekaaaRVCjLFexlOCuWn'],
      });
    }, 100);
  }
	render(){
		return (
			<div className="box">
			 <header>
			   <Carousel 
		          autoplay={true}
		          infinite
		          selectedIndex={1}
		          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
		          afterChange={index => console.log('slide to', index)}
		        >
		          {this.state.homebanner.map(val => (
		            <a
		              key={val}
		              href={val.slide_url}
		              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
		            >
		              <img
		                src={val.silde_original}
		                alt=""
		                style={{ width: '100%', verticalAlign: 'top' }}
		                onLoad={() => {		                
		                  window.dispatchEvent(new Event('resize'));
		                  this.setState({ imgHeight: 'auto' });
		                }}
		              />
		            </a>
		          ))}
		        </Carousel>
		       	<div className = "search">
		       		 <input type="text" className="home-search" placeholder="5LUX.com" />
		       		   <span className="iconfont icon-iconset0316"></span>
		       	</div>
			 </header>
			  <div className = "content">
				  			 <ul className="homenav">
	            {
	              this.state.homenav.map((item, index) => {
	                return (
	                  <li key = { item._id }>
	                   <a href= { item.ad_link }>                     
	                      <span>{item.ad_name}</span>
	                      <img src={ item.ad_code }/>
	                   </a>
	                  </li>
	                )
	              })
	            }
	          </ul>			  
			  </div>
			</div>
		)
	}
	componentDidMount() {
		homeData.homeBanner((data)=>{
			//console.log(data)
			this.setState({
				homebanner:store.dispatch({
					type:"GET_BANNER",
					data:data
				}).data
			})
			
		}),
		homeData.homeNav((data)=>{
			this.setState({
				homenav:store.dispatch({
					type:"GET_NAV",
					data:data
				}).data
			})
		})
	}
}
export default Model;