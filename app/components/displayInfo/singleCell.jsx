
import React from "react"
import ReactDOM from "react-dom"

class SingleCell extends React.Component{
	constructor(){
		super(...arguments)
		this.mouseOverEvent = this.mouseOverEvent.bind(this)
		this.state = {
			picActive: false,
		}

	}

	mouseOverEvent(e){
		// console.log(e.target,e.type)
		const type = e.target.attributes.type;
		if( type && type.value==='shadow' && e.type==='mouseout' ){
			this.setState( () => {
				return {
					picActive: false
				}
			} );
		}
		if( type && type.value==='noshadow' && e.type==='mouseover' ){
			this.setState( () => {
				return {
					picActive: true
				}
			} );
		}

		/*if(e && (e.target.className === 'cell-pic') ){
			switch(e.type){
				case 'mouseover':
					this.setState( () => {
						return {
							picActive: true
						}
					} );
					break;
				case 'mouseout':
					this.setState( () => {
						return {
							picActive: false
						}
					} );
					break;
				default:
					break;
			}
			
		}*/
	}

	render(){
		let cellPicActive = 'cell-pic-active';
		if(this.state.picActive){
			cellPicActive = 'cell-pic-active show-z'
		}else{
			cellPicActive = 'cell-pic-active hide-z'
		}

		const cellData = this.props.cellData;

		return(
			<div className="single-wrap">
				<div className="cell-pic" onMouseOver={this.mouseOverEvent} onMouseOut={this.mouseOverEvent} >
					<div type="shadow" className={cellPicActive}>
						<p>{cellData.lyric}</p>
					</div>
					<img type="noshadow" src={cellData.url} />
				</div>
				<div className="cell-info">
					<span>{cellData.name}</span>
					<span>{cellData.style}</span>
				</div>
			</div>
		)
	}
}

export {SingleCell}