
import React from 'react'
import ReactDOM from 'react-dom'

// 引入样式
import './style/global'
import './style/header'
import './style/nav'
import './style/main'


import {Header as AppHeader} from './components/app-header'
import {Nav as AppNav} from './components/app-nav'
import {MainFrame} from './components/app-main'


class App extends React.Component{
	constructor(props){
		super(props);
	}

	render(){

		return(
			<div className="app-wrap">
				<AppHeader />
				<AppNav />
				<MainFrame />
			</div>
		)
	}
}





ReactDOM.render(<App></App>,document.getElementById('app'));