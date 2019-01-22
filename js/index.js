//Initilize theapp
var app = new Vue({
	el:".container",
	data: {
		employees: [
			{
				name: '',
				job: '',
				about: ''
			}
		]
	},
	methods: {
		addNewEmployeeForm () {
			this.employees.push({
				name: '',
				job: '',
				about: ''
			})
		}
	}
})















