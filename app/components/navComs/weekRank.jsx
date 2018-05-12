
import React from "react"
import ReactDOM from "react-dom"

import './weekRank.css'

export default class WeekRank extends React.Component{
	constructor(){
		super(...arguments)
		this.state = {
			curStyle:'pop'
		}
	}

	render(){
		// 标题部分的渲染
		const titleArr = ['流行','电子','爵士','蓝调','乡村','摇滚'];
		let titleItems = titleArr.map( (item,index)=>{
			let temCell = null;
			if(index === titleArr.length-1){
				temCell = (<li key={index}>{item}</li>);
			}else{
				temCell = (<li key={index}>{item}<span>|</span></li>);
			}
			return temCell;
		} )

		// list部分渲染
		const weekRankData = this.props.jsonData.weekRank;
		const curStyleData = weekRankData[this.state.curStyle];
		let curStyleItems = curStyleData.map( (item,index)=>{
			return (<li key={index}>
						<img className="weekrank-pics" src={item.url}></img>
						<div className="weekrank-info">
							<span>{item.title}</span>
							<span>{item.name} / {item.num}次播放</span>
						</div>
						<div className="weekrank-num">
							{index+1}
						</div>
					</li>
			);
		} );

		return (
			<div className="weekrank-wrap">
				<div className="weekrank-title">
					<p>本周单曲榜</p>
					<ul>
						{titleItems}
					</ul>
				</div>
				<div className="weekrank-content">
					<ul>
						{curStyleItems}
					</ul>
					<div style={ {clear:'both'} }></div>
				</div>
			</div>
		);
	}
}