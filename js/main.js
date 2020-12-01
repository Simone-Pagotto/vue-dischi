const myDischi = new Vue ({
	el:"#root",
	data:{
		cds:[]
	},
	mounted(){
		axios
			.get("https://flynn.boolean.careers/exercises/api/array/music")
			.then((result) => {
				for(let i=0; i<result.data.response.length; i++){
					
					this.cds.push(result.data.response[i]);
				}
			})
	}		
});