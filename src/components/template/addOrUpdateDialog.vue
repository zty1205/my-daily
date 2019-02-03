<template>
    <el-dialog v-loading="loading" :visible.sync="dialogVisible" :close-on-click-modal="false">

        <el-form :model="addOrUpdateForm" :rules="rules" ref="addOrUpdateForm" 
            label-width="100px" label-suffix=":">


        </el-form>        

        <div slot="footer" class="dialog-footer">
            <el-button @click="doClose">关 闭</el-button>
            <el-button type="primary" @click="doSave">确 定</el-button>
        </div>
    </el-dialog>

    
</template>

<script>
import axios from "axios"

const addOrUpdateModel = {
	_id: "",
	expense: "",
	time: "",
	remark: "",
}

export default {
    name: "addOrUpdateDialog",
    data() {
        return {
            loading: false,
            dialogVisible: false,
            isEdit: false,
            addOrUpdateForm: {
				_id: "",
				expense: "",
				time: "",
				remark: "",
			},
			rules: {
				
			}
        }
    },
    mounted() {

    },
    computed: {

    },
    methods: {
        onShow() {},
        doSave() {},
        doClose() {}
    }
}
</script>

<style lang="scss" scoped>

</style>


