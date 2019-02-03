<template>
    <div class="container">
        <div class="search-form">
            <el-form :inline="true" :model="searchForm" class="demo-form-inline">
                <el-form-item label="审批人">
                    <el-input v-model="searchForm.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="searchForm.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
                    <el-button type="primary" icon="el-icon-plus" @click="onAdd">添加</el-button>
                </el-form-item>
            </el-form>
        </div>


        <el-table :data="tableData" v-loading="loading" style="width: 100%;">
            <el-table-column prop="_id" label="ID" align="center"></el-table-column>

            <el-table-column prop="time" label="时间" align="center"></el-table-column>

            <el-table-column prop="expense" label="花费" align="center"></el-table-column>

            <el-table-column prop="remark" label="备注" align="center"></el-table-column>

        </el-table>

        <add-or-update-dialog ref="addOrUpdateDialog" @success="handleSuccess"></add-or-update-dialog>
    </div>
</template>

<script>
import axios from "axios"
import addOrUpdateDialog from "./addOrUpdateDialog"
export default {
    name: "dailyMoney",
    components: {addOrUpdateDialog},
    data() {
        return {
            searchForm: {},
            tableData: null,
            loading: false
        }
    },
    mounted() {
        this.onSearch(1, true)
    },
    methods: {
        onSearch(page, goTop) {
            axios.get("http://localhost:4000/money/find").then(res => {
                console.log("res = ", res)
                this.tableData = res.data.list
            })
        },
        onAdd() {
            this.$refs.addOrUpdateDialog.onShow()
        },
        handleSuccess(goTop) {

        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        margin-top: 20px;
    }
</style>


