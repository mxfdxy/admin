<template>
  <div>

      <el-row style="margin-bottom: 20px;">
        <el-col :span="24">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>营收管理</el-breadcrumb-item>
                <el-breadcrumb-item>财务管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
      </el-row>

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="创建时间">
        <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 140px"></el-date-picker>
        <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 140px;"></el-date-picker>
      </el-form-item>
      <el-form-item label="产品类型">
        <el-select v-model="formInline.region" placeholder="产品类型">
          <el-option label="课程" value="shanghai"></el-option>
          <el-option label="会员" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-row style="margin-bottom: 20px;">
      <el-col :span="24">
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
        date1: '',
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
      onSubmit() {
        console.log('submit!');
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
