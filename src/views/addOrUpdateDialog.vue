<template>
  <el-dialog v-loading="loading" title="添加" center :visible.sync="dialogVisible" width="420px" :close-on-click-modal="false">
    <el-form :model="addOrUpdateForm" :rules="rules" ref="addOrUpdateForm" label-width="80px" label-suffix="：">
      <el-form-item label="金额" prop="expense">
        <el-input class="formItem-width-defalut" v-model.number="addOrUpdateForm.expense"></el-input>
      </el-form-item>

      <el-form-item label="时间" prop="time">
        <el-date-picker class="formItem-width-defalut" v-model="addOrUpdateForm.time" type="datetime" placeholder="请选择日期时间"></el-date-picker>
      </el-form-item>

      <el-form-item label="备注" prop="remark">
        <el-input class="formItem-width-defalut" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="addOrUpdateForm.remark"></el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button @click="doClose">关 闭</el-button>
      <el-button type="primary" @click="doSave">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import axios from "axios";

const addOrUpdateModel = {
  _id: "",
  expense: "",
  time: "",
  remark: ""
};

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
        remark: ""
      },
      rules: {
        expense: [
          { required: true, message: "不能为空", trigger: "[change, blur]" },
          { type: "number", message: "请输入数字", trigger: "[change, blur]" }
        ],
        time: [
          { required: true, message: "不能为空", trigger: "[change, blur]" }
        ],
        remark: [
          { required: true, message: "不能为空", trigger: "[change, blur]" }
        ]
      }
    };
  },
  mounted() {},
  computed: {},
  methods: {
    onShow() {
      this.dialogVisible = true;
    },
    handleForm() {
      return { ...this.addOrUpdateForm };
    },
    doSave() {
      this.$refs.addOrUpdateForm.validate(isValid => {
        if (isValid) {
          let form = this.handleForm();
          axios.post("/api/money/add", form).then(res => {
            console.log("res = ", res);
            this.$emit("success")
            this.dialogVisible = false
          });
        }
      });
    },
    doClose() {
      this.dialogVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
  .formItem-width-defalut {
    width: 240px;
  }
</style>
