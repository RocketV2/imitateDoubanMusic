

import React from "react"
import ReactDOM from "react-dom"

class MainFrame extends React.Component{
	constructor(){
		super(...arguments)

	}

	render(){

		return(
			<div className="main-wrap">
				{/*中间内容展示区*/}
				<div className="main-content">
					main
				</div>

				{/*侧边导航展示区*/}
				<div className="main-sidebar">
					side
				</div>
			</div>
		)
	}
}

export {MainFrame}