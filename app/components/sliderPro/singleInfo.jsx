
import React from 'react'
import ReactDOM from 'react-dom'

export default class SingleInfo extends React.Component{

	constructor(){
		super(...arguments)
		this.state = {
			shadowStatus: false,// 图片部分 是否显示阴影蒙层
		};
		this.transformEvent = this.transformEvent.bind(this)
	}
	transformEvent(e){
		

		if(e && e.target.dataset && e.target.dataset.type){
			const type = e.target.dataset.type;
			switch(type){
				case 'image':
					if(e.type === 'mouseover'){
						this.setState( (prevStatus,props)=>{
							return {
								shadowStatus: true
							}
						} );
					}
					break;
				case 'shadow':
					if(e.type === 'mouseout'){
						this.setState( (prevStatus,props)=>{
							return {
								shadowStatus: false
							}
						} );
					}
					break;
				default:
					break;
			}
		}

	}

	render(){

		let shadowCla = 'single-info-shadow';
		if(this.state.shadowStatus){
			shadowCla = 'single-info-shadow show';
		}else{
			shadowCla = 'single-info-shadow hide';
		}

		const dataObj = this.props.dataObj;

		return (
			<div className="single-info-wrap">
				<div className="single-info-img" onMouseOver={this.transformEvent} onMouseOut={this.transformEvent}>
					<img data-type="image" src={dataObj.url} />
					<div data-type="shadow" className={shadowCla}>
						{dataObj.info}
					</div>
				</div>
				<div className="single-info-singer">
					<span>【专辑】</span>
					<p>{dataObj.name}</p>
				</div>
				<div className="single-info-detail">
					<p>
						{dataObj.profile}
					</p>
				</div>
			</div>
		)
	}

}