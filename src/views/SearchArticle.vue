<template>
	<div class="row">
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			articles: [],
			keywords: ''
		};
	},
	created() {
		this.keywords = this.$route.query.keywords;
		console.log(this.keywords);
		this.axios
			.get('http://localhost:8080/api/article', {
				params: {
					keywords: this.keywords
				}
			})
			.then(res => {
				this.articles = res.data.data
			});
	},
	methods: {}
};
</script>
<style>
	
</style>