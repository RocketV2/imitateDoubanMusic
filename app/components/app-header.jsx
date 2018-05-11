
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 组件能写成 函数式组件的 就不用class创建有状态的组件
 * 
 * 头部
 */

class Header extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			'switchTips':false,
		};

		this.handlerTip = this.handlerTip.bind(this);
	}

	handlerTip(e){
		switch(e.type){
			case 'mouseover':
				this.setState({'switchTips':true});break;
			case 'mouseout':
				this.setState({'switchTips':false});break;
			default:
				break;
		}
	}

	render(){
		var navArr = ['豆瓣','读书','电影','音乐','同城','小组','阅读','时间','FM','集市','更多'];
		var listItems = navArr.map( (item,index) => { 
			return (
				<li key={index.toString()}>
					<a href="https://movie.douban.com/" target='_blank'>{item}</a>
				</li>
			)
		});

		// '下载豆瓣客户端提示'
		var classNameTips = 'header-tip-wrap show';
		if(this.state.switchTips){
			classNameTips = 'header-tip-wrap show';
		}else{
			classNameTips = 'header-tip-wrap hide';
		}

		return(
			<div className='header'>
				<div className='header-info'>
					<a herf='#' target='_blank'>登录</a>
					<a herf='#' target='_blank'>注册</a>
				</div>
				<div className='header-tip' onMouseOver={this.handlerTip} onMouseOut={this.handlerTip} >
					<a herf='#' target='_blank' >下载豆瓣客户端</a>
					<div className={classNameTips}>
						<p></p>
						<span>豆瓣</span>
					</div>
				</div>
				<div className='header-list'>
					<ul>{listItems}</ul>
				</div>
			</div>
		);
	}

}

// 必须放在所要到处对象定义的后面
export {Header}
// export {Header as AppHeader}