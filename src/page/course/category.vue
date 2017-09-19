<template>
  <div>
      <el-row style="margin-bottom: 20px;">
          <el-col :span="24">
              <el-breadcrumb separator="/">
                  <el-breadcrumb-item>课程管理</el-breadcrumb-item>
                  <el-breadcrumb-item>分类管理</el-breadcrumb-item>
              </el-breadcrumb>
          </el-col>
      </el-row>

      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="年级分类" name="first">

            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="年级">
                <el-input v-model="formInline.user" placeholder="年级名称"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="add = true">添加</el-button>
              </el-form-item>
            </el-form>

            <el-table
              :data="tableData1"
              border
              style="width: 100%">
              <el-table-column
                label="#"
                width="180">
                <template scope="scope">
                  <!-- <el-icon name="time"></el-icon> -->
                  <span style="margin-left: 10px">{{ scope.row.id }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="分类名"
                width="180">
                <template scope="scope">
                  <!-- <el-icon name="time"></el-icon> -->
                  <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="课程数量"
                width="180">
                <template scope="scope">
                  <!-- <el-icon name="time"></el-icon> -->
                  <span style="margin-left: 10px">{{ scope.row.count }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template scope="scope">
                  <el-button
                    size="small"
                    @click="edit = true">编辑</el-button>
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="学科分类" name="second">

            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="学科">
                <el-input v-model="formInline.user" placeholder="年级名称"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="add = true">添加</el-button>
              </el-form-item>
            </el-form>

            <el-table
              :data="tableData2"
              border
              style="width: 100%">
              <el-table-column
                label="#"
                width="180">
                <template scope="scope">
                  <!-- <el-icon name="time"></el-icon> -->
                  <span style="margin-left: 10px">{{ scope.row.id }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="分类名"
                width="180">
                <template scope="scope">
                  <!-- <el-icon name="time"></el-icon> -->
                  <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="课程数量"
                width="180">
                <template scope="scope">
                  <!-- <el-icon name="time"></el-icon> -->
                  <span style="margin-left: 10px">{{ scope.row.count }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template scope="scope">
                  <el-button
                    size="small"
                    @click="edit = true">编辑</el-button>
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
        </el-tab-pane>
      </el-tabs>

      <el-dialog title="添加" :visible.sync="add">
          <el-form ref="addform" :model="addform" label-width="80px">
              <el-form-item label="分类名称">
                  <el-input v-model="addform.name"></el-input>
              </el-form-item>
          </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="add = false">取消</el-button>
          <el-button type="primary" @click="added">立即添加</el-button>
        </div>
      </el-dialog>

      <el-dialog title="编辑" :visible.sync="edit">
          <el-form ref="addform" :model="addform" label-width="80px">
              <el-form-item label="分类名称">
                  <el-input v-model="addform.name"></el-input>
              </el-form-item>
          </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="edit = false">取消</el-button>
          <el-button type="primary" @click="edited">保存</el-button>
        </div>
      </el-dialog>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        edit: false,
        add: false,
        addform: {},
        activeName: 'first',
        formInline: {
          user: '',
          region: ''
        },
        tableData1: [{
          id: '0',
          name: '小学',
          count: '15'
        },{
          id: '1',
          name: '初中',
          count: '15'
        },{
          id: '2',
          name: '高中',
          count: '15'
        }],
        tableData2: [{
          id: '0',
          name: '语文',
          count: '15'
        },{
          id: '1',
          name: '英语',
          count: '15'
        },{
          id: '2',
          name: '数学',
          count: '15'
        },{
          id: '3',
          name: '化学',
          count: '15'
        },{
          id: '4',
          name: '物理',
          count: '15'
        },{
          id: '5',
          name: '生物',
          count: '15'
        },{
          id: '6',
          name: '地理',
          count: '15'
        },{
          id: '7',
          name: '历史',
          count: '15'
        },{
          id: '8',
          name: '政治',
          count: '15'
        }]
      }
    },
    methods: {
      edited() {
        this.edit = false
        this.$message.success('保存成功')
      },
      added() {
        this.add = false
        this.$message.success('添加成功！')
      },
      onSubmit() {
        console.log('submit!');
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.$message.success('删除成功！')
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
