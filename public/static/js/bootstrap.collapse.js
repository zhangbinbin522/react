//列表一点全收回功能
$("[data-parent][data-toggle='collapse']").each(function(i,v){
	let idAll=$(v).attr("data-parent"),
		bool=$(v).hasClass("in")
	let dom=$(v).attr("href")
		
		$(v).on("click",function(){
			
			$(idAll).find(`[data-parent='${idAll}'][data-toggle='collapse']`).each(function(i,v){
				let id=$(v).attr("href")
				if(id!=dom&&$(id).hasClass("in")){
					v.click()
				}
			})
			
		})
})