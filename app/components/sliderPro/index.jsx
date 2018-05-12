

import React from 'react'
import ReactDOM from 'react-dom'

import './style.css'

import SingleInfo from './singleInfo'


export default class SliderPro extends React.Component{

	constructor(){
		super(...arguments)
		this.switchEvent = this.switchEvent.bind(this)
		this.state = {
			postMoveDis: 36,// 一开始默认值
			selectDirc: false, // 点击左侧为true，右侧为false
		}
	}

	switchEvent(e){
		
		if(e && e.target && e.target.dataset.type ){
			const type = e.target.dataset.type;
			switch(type){
				case 'left':
					this.movePos('left')
					break;
				case 'right':
					this.movePos('right')
					break;
				default:
					break;
			}
		}
	}

	movePos(type){
		this.setState( (prevState,props)=>{
			let temDis = 36 , temDirc = true;
			switch(type){
				case 'left':
					temDis = -648;
					temDirc = true;
					break;
				case 'right':
					temDis = 36;
					temDirc = false;
					break;
				default:
					break;
			}

			return {
				postMoveDis: temDis,
				selectDirc: temDirc
			}
		} );
	}


	render(){
		const editorItems = this.props.jsonData.editors.map( (item,index)=>{
			return <SingleInfo key={index} dataObj={item}/>
		} );

		let posMove = {
			left: parseInt(this.state.postMoveDis)
		};
		let dirLeft = '', dirRight = '';
		if(this.state.selectDirc){
			dirLeft = 'slider-pro-btn-active';
		}else{
			dirRight = 'slider-pro-btn-active';
		}

		return (
			<div className="slider-pro-wrap">
				<div className="slider-pro-title">
					<p>推荐编辑</p>
					<div className="slider-pro-btn" onClick={this.switchEvent}>
						<a data-type="left" href="javascript:;" className={dirLeft}></a>
						<a data-type="right" href="javascript:;" className={dirRight}></a>
					</div>
				</div>
				<div className="slider-pro-content-wrap">
					<div className="slider-pro-content" style={posMove}>
						{editorItems}
					</div>
				</div>
			</div>
		)
	}

}