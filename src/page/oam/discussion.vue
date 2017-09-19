<template>
  <div>
    <el-row style="margin-bottom: 20px;">
      <el-col :span="24">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>运营维护</el-breadcrumb-item>
        <el-breadcrumb-item>讨论管理</el-breadcrumb-item>
      </el-breadcrumb>
      </el-col>
    </el-row>



    <el-form :inline="true" :model="formInline" class="demo-form-inline">

      <el-form-item label="用户">
        <el-input v-model="formInline.user" placeholder="用户昵称"></el-input>
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
      <el-form-item label="时间" style="margin-bottom: 0;">
        <el-date-picker type="date" placeholder="选择日期" v-model="date1"></el-date-picker>
        -
        <el-date-picker type="date" placeholder="选择日期" v-model="date1"></el-date-picker>
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
              label="讨论内容"
              width="180">
              <template scope="scope">
                <span style="margin-left: 10px">{{ scope.row.discussion }}</span>
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
              label="课程"
              width="180">
              <template scope="scope">
                <span style="margin-left: 10px">{{ scope.row.course }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="发表时间"
              width="180">
              <template scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                  <el-button size="small" type="danger" @click="open2">删除</el-button>
                  <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">禁言</el-button>
              </template>
            </el-table-column>
          </el-table>
      </el-col>
    </el-row>



    <el-row style="margin-bottom: 20px;">
      <el-col :span="24">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000">
        </el-pagination>
      </el-col>
    </el-row>



  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        tableData: [{
          id: 0,
          discussion: '张雪峰老师讲的很好',
          user: '张三',
          course: '三角函数专项训练',
          date: '2017-07-23 09:22'
        },{
          id: 1,
          discussion: '张雪峰老师讲的很好',
          user: '张三',
          course: '三角函数专项训练',
          date: '2017-07-23 09:22'
        },{
          id: 2,
          discussion: '张雪峰老师讲的很好',
          user: '张三',
          course: '三角函数专项训练',
          date: '2017-07-23 09:22'
        },{
          id: 3,
          discussion: '张雪峰老师讲的很好',
          user: '张三',
          course: '三角函数专项训练',
          date: '2017-07-23 09:22'
        },{
          id: 4,
          discussion: '张雪峰老师讲的很好',
          user: '张三',
          course: '三角函数专项训练',
          date: '2017-07-23 09:22'
        },{
          id: 5,
          discussion: '张雪峰老师讲的很好',
          user: '张三',
          course: '三角函数专项训练',
          date: '2017-07-23 09:22'
        },{
          id: 6,
          discussion: '张雪峰老师讲的很好',
          user: '张三',
          course: '三角函数专项训练',
          date: '2017-07-23 09:22'
        },{
          id: 7,
          discussion: '张雪峰老师讲的很好',
          user: '张三',
          course: '三角函数专项训练',
          date: '2017-07-23 09:22'
        },{
          id: 8,
          discussion: '张雪峰老师讲的很好',
          user: '张三',
          course: '三角函数专项训练',
          date: '2017-07-23 09:22'
        },{
          id: 9,
          discussion: '张雪峰老师讲的很好',
          user: '张三',
          course: '三角函数专项训练',
          date: '2017-07-23 09:22'
        }]
      }
    },
    methods: {
        open2() {
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          }).catch(() => {
            // this.$message({
            //   type: 'info',
            //   message: '已取消删除'
            // });
          });
        },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.$message.success('已禁言！');
      },
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
