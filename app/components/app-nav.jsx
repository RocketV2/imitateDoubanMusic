
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 上部导航、搜索等
 */

class Nav extends React.Component{
	constructor(){
		super(...arguments);
	}

	render(){
		const topicsArr = ['我听', '音乐人', '潮潮豆瓣音乐周', '金羊毛计划', '专题', '排行榜', '分类浏览', '乐评', '豆瓣FM', '歌单', '阿比鹿音乐奖'];
		const topicItems = topicsArr.map( (item,index) => {
			return (
				<li key={index}>
					<a href="#">{item}</a>
				</li>
			)
		} );
		return (
			<div className="nav-wrap">
				{/*上部搜索*/}
				<div className="nav-top-wrap">
					<div className="nav-logo">
						<a herf="#" target="_blank">豆瓣音乐</a>
					</div>
					
					<div className="nav-search-wrap">
						<form method="get" action="/">
							<div className="search-input">
								<input placeholder="唱片名、表演者、条码、ISRC" />
							</div>
							<div className="search-input-icon"></div>
						</form>
					</div>
				</div>
				<hr />
				{/*各个话题列表*/}
				<div className="nav-list-wrap">
					<ul>
						{topicItems}
					</ul>
				</div>
			</div>
		)
	}

}

export {Nav};