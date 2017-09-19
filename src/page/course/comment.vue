<template>
  <div>

    <el-row style="margin-bottom: 20px;">
      <el-col :span="24">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>课程管理</el-breadcrumb-item>
        <el-breadcrumb-item>评价管理</el-breadcrumb-item>
      </el-breadcrumb>
      </el-col>
    </el-row>

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="评分" style="width: 240px;">
        <el-select placeholder="请选择">
           <el-option label="五星评分" value="5"></el-option>
           <el-option label="四星评分" value="4"></el-option>
           <el-option label="三星评分" value="3"></el-option>
           <el-option label="二星评分" value="2"></el-option>
           <el-option label="一星评分" value="1"></el-option>
         </el-select>
       </el-form-item>
      <el-form-item label="课程">
        <el-input v-model="formInline.user" placeholder="课程名称"></el-input>
      </el-form-item>
      <el-form-item label="教师">
        <el-input v-model="formInline.user" placeholder="教师名称"></el-input>
      </el-form-item>
      <el-form-item label="关键词">
        <el-input v-model="formInline.user" placeholder="评价内容关键词"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>


    <el-row style="margin-bottom: 20px;">
        <el-col :span="24">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                label="#"
                width="80">
                <template scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.id }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="课程名称"
                width="180">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="教师"
                width="180">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.creater }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="用户"
                width="180">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.user }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="评价"
                width="240">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.comment }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="时间"
                width="180">
                <template scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
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
        </el-col>
    </el-row>

    <el-dialog title="编辑评论" :visible.sync="edit">
      <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="评论内容">
              <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <label style="width: 80px; text-align: right; vertical-align: middle; float: left; font-size: 14px; color: #48576a; line-height: 1; padding: 3px 12px 11px 0; box-sizing: border-box;">
              评分
          </label>
          <el-rate label="asdf" v-model="value1" style="padding: 10px 0; display: inline;"></el-rate>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="edit = false">取 消</el-button>
        <el-button type="primary" @click="edited">保 存</el-button>
      </div>
    </el-dialog>



    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000"></el-pagination>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {

        },
        value1: null,
        edit: false,
        formInline: {
          user: '',
          region: ''
        },
        tableData: [{
          id: '0',
          name: '三角函数专项训练',
          creater: '张雪峰',
          user: '张三',
          comment: '*********',
          date: '2017-07-06 08:23'
        },{
          id: '0',
          name: '三角函数专项训练',
          creater: '张雪峰',
          user: '张三',
          comment: '*********',
          date: '2017-07-06 08:23'
        },{
          id: '0',
          name: '三角函数专项训练',
          creater: '张雪峰',
          user: '张三',
          comment: '*********',
          date: '2017-07-06 08:23'
        },{
          id: '0',
          name: '三角函数专项训练',
          creater: '张雪峰',
          user: '张三',
          comment: '*********',
          date: '2017-07-06 08:23'
        },{
          id: '0',
          name: '三角函数专项训练',
          creater: '张雪峰',
          user: '张三',
          comment: '*********',
          date: '2017-07-06 08:23'
        },{
          id: '0',
          name: '三角函数专项训练',
          creater: '张雪峰',
          user: '张三',
          comment: '*********',
          date: '2017-07-06 08:23'
        },{
          id: '0',
          name: '三角函数专项训练',
          creater: '张雪峰',
          user: '张三',
          comment: '*********',
          date: '2017-07-06 08:23'
        },{
          id: '0',
          name: '三角函数专项训练',
          creater: '张雪峰',
          user: '张三',
          comment: '*********',
          date: '2017-07-06 08:23'
        },{
          id: '0',
          name: '三角函数专项训练',
          creater: '张雪峰',
          user: '张三',
          comment: '*********',
          date: '2017-07-06 08:23'
        },{
          id: '0',
          name: '三角函数专项训练',
          creater: '张雪峰',
          user: '张三',
          comment: '*********',
          date: '2017-07-06 08:23'
        },]
      }
    },
    methods: {
      edited() {
        this.edit = false
        this.$message.success('保存成功！')
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
