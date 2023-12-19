<template>
	<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
		<div class="modal-content">
			<div class="modal-header">
				Header
			</div>
			<div class="modal-body">
				<div class="form-group">
					<label for="title">Title</label>
					<input
						type="text"
						id="title"
						class="form-control"
						v-model="dataObj.title"
					/>
				</div>
				<div class="form-group">
					<label for="body">Body</label>
					<textarea
						rows="5"
						id="body"
						class="form-control"
						v-model="dataObj.body"
					/>
				</div>
			</div>
			<div class="modal-footer">
				<button class="btn btn-success" @click="handleSave">
					Save
				</button>
				<button class="btn btn-secondary" @click="handleClose">
					Close
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Modal",
	data: function (){
		return{
			dataObj:{
				title: '',
				body:''
			}
		}
	},
	methods:{
		handleSave(){
      console.log(this.dataObj);
      this.handleClose();
		},
		handleClose(){
			this.$emit('close');
		}
	}
}
</script>