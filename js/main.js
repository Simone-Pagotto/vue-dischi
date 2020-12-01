const myDischi = new Vue ({
	el:"#root",
	data:{
		cds:[{'a':2,'b':3}]
	},
	mounted(){
		axios
			.get("https://flynn.boolean.careers/exercises/api/array/music")
			.then(function(result) {
				for(let i=0; i<result.data.response.length; i++){
					
				
					this.cds.push(result.data.response[i]);
				}
			})
	}		
});