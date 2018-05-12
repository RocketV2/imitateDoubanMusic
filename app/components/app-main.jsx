

import React from "react"
import ReactDOM from "react-dom"

// 引入组件
import {DisplayInfo} from "./displayInfo/index"
import SliderSimple from "./sliderSimple/index"
import SliderPro from "./sliderPro/index"

import TopInfo from "./navComs/topInfo"
import MusicanGroup from "./navComs/musicanGroup"
import WeekRank from "./navComs/weekRank"
// 导入json5
import jsonData from '../jsons/singerInfo.json5'

class MainFrame extends React.Component{
	constructor(){
		super(...arguments)

	}

	render(){

		return(
			<div className="main-wrap">
				{/*中间内容展示区*/}
				<div className="main-content">
					<SliderSimple jsonData={jsonData}/>
					<DisplayInfo jsonData={jsonData} comType="artists" />
					<SliderPro jsonData={jsonData}/>
					<DisplayInfo jsonData={jsonData} comType="newSongs"/>
					<DisplayInfo jsonData={jsonData} comType="hotSongs"/>
				</div>

				{/*侧边导航展示区*/}
				<div className="main-sidebar">
					<TopInfo />
					<MusicanGroup />
					<WeekRank jsonData={jsonData}/>
				</div>

				{/*底部信息区*/}
				<div className="main-bottom">
					bottom
				</div>
			</div>
		)
	}
}

export {MainFrame}