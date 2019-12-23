<template>
	<div style="width: 600px;position: center">
		<el-form ref="form" :model="form" label-width="100px">
			<el-form-item label="头像">
				<el-avatar :size="100">
					<img :src="form.avater" />
				</el-avatar>
			</el-form-item>
			<el-form-item label="昵称">
				<input type="text" v-model="form.userNickname" />
			</el-form-item>
			<el-form-item label="账号">
				<input type="text" v-model="form.userAccount" />
			</el-form-item>
			<el-form-item label="密码">
				<el-input type="password" v-model="form.pass" />
			</el-form-item>
			<el-form-item label="类别">
				<input type="text" v-model="form.genre" />
			</el-form-item>
			<el-form-item label="省份">
				<input type="text" v-model="form.provincename" />
			</el-form-item>
			<el-form-item label="城市">
				<input type="text" v-model="form.cityname" />
			</el-form-item>
			<el-form-item label="qq号">
				<input type="text" v-model="form.qq" />
			</el-form-item>
			<el-form-item label="微信">
				<input type="text" v-model="form.wechat" />
			</el-form-item>
			<el-form-item label="微博">
				<input type="text" v-model="form.blog" />
			</el-form-item>
			<el-form-item label="电子邮箱">
				<input type="text" v-model="form.eMail" />
			</el-form-item>
			
			
			
			<el-form-item>
				<el-button type="primary" style="background-color: #009688;border: #009688;color: #ffffff" @click="onSubmit">
					保存
				</el-button>
				<!--        <el-button style="background-color: #009688;border: #009688;color: #ffffff" @click="onSubmit">保存</el-button>-->
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					userId: 10,
					userNickname: '',
					userAccount: '',
					pass: '',
					avater: '',
					genre: '',
					provincename: '',
					cityname: '',
					qq: '',
					wechat: '',
					blog: '',
					eMail: '',
				}
			}
		},
		methods: {
			init() {
				this.axios.get('http://localhost:8080/api/user/10' ).then(res => {
				const user = res.data.data
				this.form.userNickname=user.userNickname
				this.form.userAccount=user.userAccount
				this.form.pass=user.pass
				this.form.avater=user.avater
				this.form.genre=user.genre
				this.form.provincename=user.provincename
				this.form.cityname=user.cityname
				this.form.qq=user.qq
				this.form.wechat=user.wechat
				this.form.blog=user.blog
				this.form.eMail=user.eMail
			});
			},
			onSubmit() {
				
				
				this.axios({
					method: 'post',
					url: 'http://localhost:8080/api/user/update',
					data: {
						userNickname:his.form.userNickname,
						userAccount:this.form.userAccount,
						pass:this.form.pass,
						avater:this.form.avater,
						genre:this.form.genre,
						provincename:this.form.provincename,
						cityname:this.form.cityname,
						qq:this.form.qq,
						wechat:this.form.wechat,
						blog:this.form.blog,
						eMail:this.form.eMail,
						
					}
				}).then(() => {
					this.init()
				})
			}
		},
		mounted() {
			this.init()
		},
		created() {

		},
		computed: {},

	};
</script>

<style>
</style>
