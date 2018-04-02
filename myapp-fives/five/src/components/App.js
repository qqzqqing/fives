import React, { Component } from 'react';
import { Switch, Route, Redirect,NavLink  } from 'react-router-dom';

import Home from '@/components/main/Home/index.js';
import Cart from '@/components/main/Cart/index.js';
import GoShop from '@/components/main/GoShop/index.js';
import User from '@/components/main/User/index.js';
import Mall from '@/components/main/Mall/index.js';
import Services from '@/components/main/Services/index.js';


class App extends Component {
  render() {
    return (
      <div className="App">
       	<div className="container">
        		<Switch>
			          <Route path = "/home" component = { Home } />
			          <Route path = "/mall" component = { Mall } />
			          <Route path = "/services" component = {Services } />
			          <Route path = "/goshop" component = { GoShop } />
			          <Route path = "/user" component = { User } />
			          <Redirect to = {{pathname: "/home"}}  />
     			</Switch>
        	</div>
        	<footer>
        		 <ul>
            		<li>
            	 		<NavLink to="/home" activeClassName="active">
               			  <span className="iconfont icon-shouye"></span>
                          <p>首页</p>
              	        </NavLink>
                    </li>
                    <li>
                       <NavLink to="/mall" activeClassName="active">
                           <span className="iconfont icon-shangcheng"></span>
                           <p>商城</p>
                        </NavLink>
                    </li>
                    <li> 
             		  <NavLink to="/services" activeClassName="active">
             		     <span className="iconfont icon-quanqiu"></span>
                         <p>海外服务</p>
                      </NavLink>
                   </li>
                   <li>
                      <NavLink to="/goshop" activeClassName="active">
                          <span className="iconfont icon-daodianditu"></span>
                         <p>到店</p>
                     </NavLink>
                  </li>
                   <li>
                      <NavLink to="/user" activeClassName="active">
                          <span className="iconfont icon-wode"></span>
                         <p>我的</p>
                     </NavLink>
                  </li>
              </ul>
        	</footer>
      </div>
    );
  }
}

export default App;
