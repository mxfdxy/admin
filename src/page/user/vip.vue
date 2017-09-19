<template>

    <div class="">
        <el-row style="margin-bottom: 20px">
            <el-col :span="24">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                    <el-breadcrumb-item>会员管理</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row style="margin-bottom: 20px">
            <el-col :span="24">
                <el-table
                  :data="tableData"
                  border
                  style="width: 100%">
                  <el-table-column
                    label="#"
                    width="120">
                    <template scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.id }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="付费类型"
                    width="180">
                    <template scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="价格"
                    width="180">
                    <template scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.price }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="权限"
                    width="180">
                    <template scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.permissions }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template scope="scope">
                      <el-button size="small" @click="dialogTableVisible=true">编辑</el-button>
                    </template>
                  </el-table-column>
                </el-table>
            </el-col>
        </el-row>

        <el-dialog title="编辑" :visible.sync="dialogTableVisible">
            <el-form ref="addform" :model="addform" label-width="80px">
                <el-form-item label="月费价格">
                    <el-input v-model="addform.name"></el-input>
                </el-form-item>
            </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogTableVisible = false">取消</el-button>
            <el-button type="primary" @click="add">立即添加</el-button>
          </div>
        </el-dialog>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogTableVisible: false,
        addform: {

        },
        tableData: [{
          id: '0',
          name: '月费',
          price: '9.9',
          permissions: '1、观看会员课程 2、9折购买付费课程'
      },{
        id: '1',
        name: '年费',
        price: '99',
        permissions: '1、观看会员课程 2、8折购买付费课程'
      }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      add() {
          this.dialogTableVisible = false
          this.$message.success('编辑成功！');
      }
    }
  }
</script>
