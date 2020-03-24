export const types={
  ADD:"ADD",
  REMOVE:"REMOVE"
}

export const actionCreators={
  add: item => ({ type: types.ADD, payload: item }),
}

const initialState={
  content:[{campaignName:"第九屆全國大學生電子商務創業挑戰賽（杭州）",userName:"mingFung123",campaignDeadLine:"4/3/2018",number:1,numberIcon:1,campaignLink:"http://www.3chuang.net/",comment:"希望能找有熱情的朋友一起組隊吧",teammateRequirement:["手機程式","網頁制作","市場營銷"]},{campaignName:"2018-19年有問有答《基本法》問答比賽 (香港)",userName:"Ryanscp",campaignDeadLine:"26/12/2019",number:0,numberIcon:2, campaignLink:"https://www.cpce.gov.hk/basiclaw2018-19/",comment:"能一起組隊是一種緣分吧,希望與大家有緣",teammateRequirement:["會計","財務管理","市場營銷"]}]    
} 
 
export const reducer=function(state=initialState,action){
  const { content } = state
  const { type, payload } = action

	switch (type) {
    case types.ADD: {
			return {
				content: [payload, ...content],
			}
		}
    default:
    return state
  }
}    