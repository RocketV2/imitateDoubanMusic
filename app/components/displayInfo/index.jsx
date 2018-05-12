

import React from "react"
import ReactDOM from "react-dom"

// 引入组件的样式
import './style/index'

import {SingleCell} from './singleCell'


class DisplayInfo extends React.Component{
	constructor(){
		super(...arguments)
		this.clickLiEvent = this.clickLiEvent.bind(this)
		this.state = {
			orderType:'weekBest'
		}
	}

	clickLiEvent(e){
		if(e.target.tagName === 'LI' && e.target.attributes.type){
			switch(e.target.attributes.type.value){
				case 'weekBest':
					this.setState( (prevState,props)=>{
						return {
							orderType: 'weekBest'
						}
					} )
					break;
				case 'weekProgress':
					this.setState( (prevState,props)=>{
						return {
							orderType: 'weekProgress'
						}
					} )
					break;
				default:
					break;
			}
		}
	}

	render(){
		const cellDataObj = this.props.jsonData.artists;
		let itemsArr = null;
		let weekBestCla = 'disfo-title-active', weekProgressCla = '';
		switch(this.state.orderType){
			case 'weekBest':
				weekBestCla = 'disfo-title-active';
				weekProgressCla = '';
				itemsArr = cellDataObj.weekBest.map( (item,index)=>(
					<SingleCell key={index} cellData={item} />
				) );
				break;
			case 'weekProgress':
				weekBestCla = '';
				weekProgressCla = 'disfo-title-active';
				itemsArr = cellDataObj.weekProgress.map( (item,index)=>(
					<SingleCell key={index} cellData={item} />
				) );
				break;
			default:
				break;
		}

		return(
			<div className="disfo-wrap">
				<ul onClick={this.clickLiEvent}>
					<li type="weekBest" className={weekBestCla}>本周流行音乐人</li>
					<span>|</span>
					<li type="weekProgress" className={weekProgressCla}>上升最快音乐人</li>
				</ul>
				<div className="disfo-list">
					{itemsArr}
				</div>
			</div>
		)
	}
}

export {DisplayInfo}