
import React from "react"
import ReactDOM from "react-dom"

import './topInfo.css'

export default class TopInfo extends React.Component{

	constructor(){
		super(...arguments)
	}

	render(){
		const liArr = [
			{num:23831,type:'音乐人'},
			{num:8923,type:'播客'},
			{num:78123,type:'厂牌'}
		];
		let liItems = liArr.map( (item,index) => {
			return (
				<li key={index}>
					<span>{item.num}</span>
					<span>{item.type}</span>
				</li>
			);
		} );

		return(
			<div className="topinfo-wrap">
				<ul>
					{liItems}
				</ul>
				<div className="topinfo-btn">
					我要加入
				</div>

			</div>
		)
	}

}