

import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

// 引入组件的样式
import './style.css'

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

		// 判断组件类型，这个组件有两种风格
		let comTitle = null;
		switch(this.props.comType){
			case 'artists':
				comTitle = (
					<ul onClick={this.clickLiEvent}>
						<li type="weekBest" className={weekBestCla}>本周流行音乐人</li>
						<span>|</span>
						<li type="weekProgress" className={weekProgressCla}>上升最快音乐人</li>
					</ul>
				);
				break;
			case 'newSongs':
				comTitle = (
					<ul onClick={this.clickLiEvent}>
						<h3>新曲榜</h3>
						<li type="hot">最热</li>
						<span>|</span>
						<li type="chinese">华语</li>
						<span>|</span>
						<li type="uropeAmerica">欧美</li>
						<span>|</span>
						<li type="japanKorean">日韩</li>
						<span>|</span>
						<li type="singleSong">单曲</li>
					</ul>
				);
				break;
			case 'hotSongs':
				comTitle = (
					<ul onClick={this.clickLiEvent}>
						<h3>热门榜</h3>
						<li type="hot">最热</li>
						<span>|</span>
						<li type="pop">流行</li>
						<span>|</span>
						<li type="rock">摇滚</li>
						<span>|</span>
						<li type="folk">民谣</li>
						<span>|</span>
						<li type="origin">原生</li>
					</ul>
				);
				break;
			default:
				break;
		}

		return(
			<div className="disfo-wrap">
				{/* 标题部分 */}
				{comTitle}

				{/* 内容部分 */}
				<div className="disfo-list">
					{itemsArr}
				</div>
			</div>
		)
	}
}

DisplayInfo.propTypes = {
	jsonData: PropTypes.object.isRequired,
	comType: PropTypes.string.isRequired
}
export {DisplayInfo}