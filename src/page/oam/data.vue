<template>
  <div>
    <el-row style="margin-bottom: 20px;">
      <el-col :span="24">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>运营维护</el-breadcrumb-item>
        <el-breadcrumb-item>数据统计</el-breadcrumb-item>
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

    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        label="日期"
        width="180">
        <template scope="scope">
          <el-icon name="time"></el-icon>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        width="180">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

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
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
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
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
