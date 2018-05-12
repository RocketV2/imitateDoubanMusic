
import React from "react"
import ReactDOM from "react-dom"

import './musicanGroup.css'

export default class MusicanGroup extends React.Component{

	constructor(){
		super(...arguments)
	}

	render(){
		let typeLists = ['流行','轻音乐','摇滚','古典','电子','世界音乐','民谣','说唱','爵士','原声']
		let typeItem = typeLists.map( (item,index)=>{
			return (<li key={index}>{item}</li>)
		} )
		return(
			<div className="musican-wrap">
				<div className="musican-title">
					<h3>热门音乐人分类</h3>
					<a herf="javascript:;">更多</a>
				</div>
				<ul className="musican-list">
					{typeItem}
				</ul>
				<div style={ {clear:'both'} }></div>
			</div>
		)
	}

}