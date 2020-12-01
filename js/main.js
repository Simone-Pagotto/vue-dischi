const myDischi = new Vue ({
	el:"#root",
	data:{
		cds:[],
		filteredCds:[],
		selected: ""
	},
	mounted(){
		axios
			.get("https://flynn.boolean.careers/exercises/api/array/music")
			.then((result) => {
				for(let i=0; i<result.data.response.length; i++){
					/* console.log(result.data.response[i]); */
					this.cds.push(result.data.response[i]);
				}
			})

			Promise.all(this.cds);
			
	},
	methods: {
		filterCds(){
			this.filteredCds.splice(0,this.filteredCds.length);
			for(let i=0; i<this.cds.length; i++){
				if(this.cds[i].genre.toLowerCase()===this.selected){
					this.filteredCds.push(this.cds[i]);
				}

			}
		}
	}		
});