

import React from "react"
import ReactDOM from "react-dom"

import './style.css'

export default class SliderSimple extends React.Component{
	constructor(){
		super(...arguments);
		this.timer = null; // 定时器

		this.state = {
			moveDistance:{
				left: 0
			},
			activeMarkId:1,//标记当前图片的下标
		};

		this.changePicEvent = this.changePicEvent.bind(this)
	}

	componentDidMount(){
		this.timer = setInterval( ()=>{
			let temDistance = 0, temMarkId = 1;
			this.setState( (prevState,props)=>{
				if(prevState.moveDistance.left <= -2880){
					temDistance = 0;
					temMarkId = 1;
				}else{
					temDistance = prevState.moveDistance.left - 720;
					temMarkId = prevState.activeMarkId + 1;
				}
				return {
					moveDistance:{
						left: temDistance
					},
					activeMarkId: temMarkId
				};
			} );
		} , 1500)
	}

	/**
	 * [changePicEvent 点击切换图片触发事件]
	 * @param  {[type]} e [description]
	 * @return {[type]}   [description]
	 */
	changePicEvent(e){
		if(e && e.target && e.target.dataset){
			const curDOMType = e.target.dataset.type;
			switch(curDOMType){
				case 'left':
					// 移动图片
					this.movePics('left');
					break;
				case 'right':
					// 移动图片
					this.movePics('right');
					break;
				case 'btmIndex':
					// 移动图片 通过底部序号
					this.movePics('btmIndex',e.target.dataset.numid);
					break;
				default:
					break;
			}
			// 只要点击切换图片功能的按钮，就停止定时器
			if(curDOMType==='left' || curDOMType==='right' || curDOMType==='btmIndex'){
				clearInterval(this.timer);
			}
		}
	}
	/**
	 * [movePics 事件具体处理程序]
	 * @param  {[type]} type  [description]
	 * @param  {Number} numid [点击底部标点时传入的序号]
	 * @return {[type]}       [description]
	 */
	movePics(type,numid=1){
		let temDistance = 0, temMarkId = 1;
		this.setState( (prevState,props)=>{
			switch(type){
				case 'right':
					if(prevState.moveDistance.left === -2880){
						temDistance = -2880;
						temMarkId = 5;
					}else{
						temDistance = prevState.moveDistance.left - 720;
						temMarkId = prevState.activeMarkId + 1;
					}
					break;
				case 'left':
					if(prevState.moveDistance.left === 0){
						temDistance = 0;
						temMarkId = 1;
					}else{
						temDistance = prevState.moveDistance.left + 720;
						temMarkId = prevState.activeMarkId - 1;
					}
					break;
				case 'btmIndex':
					numid = parseInt(numid);
					temDistance = -720 * (numid-1);
					temMarkId = numid;
					break;
				default:
					break;
			}
			return{
				moveDistance:{
					left: temDistance
				},
				activeMarkId: temMarkId
			}
		} );
	}

	render(){
		// 图片
		const picsItems = this.props.jsonData.topSliderData.map( (item,index)=>{
			let temLi = null;
			let temStyle = {backgroundImage:"url("+item+")"};
			return (<li key={index} style={temStyle} ></li>)
		} );


		// 底部下标
		const indexLiItems = this.props.jsonData.topSliderData.map( (item,index)=>{
			let temEle = null,
				numid  = (index +1)-0;
			if( numid === parseInt(this.state.activeMarkId) ){
				temEle = (<li data-type="btmIndex" data-numid={numid} key={index} className="slider-index-active"></li>);
			}else{
				temEle = (<li data-type="btmIndex" data-numid={numid} key={index}></li>);
			}
			return temEle;
		} );
		
		return(
			<div className="slider-sim-wrap">
				<div className="slider-simple" onClick={this.changePicEvent}>
					<ul className="slider-content" style={ this.state.moveDistance }>
						{picsItems}
					</ul>
					<a href="javascript:;" data-type="left"></a>
					<a href="javascript:;" data-type="right"></a>
					<ul className="slider-index">
						{indexLiItems}
					</ul>
				</div>
			</div>
		)
	}
}

