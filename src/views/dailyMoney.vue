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


        <el-table :data="tableData" ref="table" style="width: 100%;">
            <el-table-column prop="_id" label="ID" align="center"></el-table-column>

            <el-table-column prop="time" label="时间" align="center">
                <template slot-scope="scope">
                    <div>{{ scope.row.time | simpleFormatTime }}</div>
                </template>
            </el-table-column>

            <el-table-column prop="expense" label="花费" align="center"></el-table-column>

            <el-table-column prop="remark" label="备注" align="center"></el-table-column>

            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <div v-if="scope.row.status">
                        <el-button type="text" @click="onEdit(scope.row)">编辑</el-button>
                    </div>
                </template>
            </el-table-column>

        </el-table>

        <add-or-update-dialog ref="addOrUpdateDialog" @success="handleSuccess"></add-or-update-dialog>
    </div>
</template>

<script>
import axios from "../api/axiosConfig.js"
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
        console.log("this = ", this)
        this.onSearch(1, true)
    },
    methods: {
        onSearch(page, goTop) {
            // axios.get("/api/dailyExpense/find").then(res => {
            //     console.log("res = ", res)
            //     this.tableData = res.data.list
            // })
            axios.doGet({
                url: "/dailyExpense/find",
                loadingTarget: this.$refs.table.$el || ""
            }).then(res => {
                this.tableData = res.list
            })
        },
        onAdd() {
            this.$refs.addOrUpdateDialog.onShow()
        },
        onEdit(row) {
           this.$refs.addOrUpdateDialog.onShow(row) 
        },
        handleSuccess(goTop) {
            this.onSearch()
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        margin-top: 20px;
    }
</style>


