
export default {
    // components: {
    // },
    // data() {
    //     return {
    //     }
    // },
    methods: {
        validateForm(value, required){
        console.log("validating.......")
        for(let x=0;x<required.length;x++){
				if(!value[required[x]]){
					return false
					break;
				}
			}
			return true
		}
    },
}