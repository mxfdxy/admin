<template>
  <div>
    <el-row style="margin-bottom: 20px;">
      <el-col :span="24">
          <el-breadcrumb separator="/">
              <el-breadcrumb-item>营收管理</el-breadcrumb-item>
              <el-breadcrumb-item>课程营收</el-breadcrumb-item>
          </el-breadcrumb>
      </el-col>
    </el-row>

   <el-row style="margin-bottom: 20px;">
     <el-col :span="24">
         <el-form :inline="true" :model="formInline" class="demo-form-inline">
         <el-form-item label="课程">
           <el-select v-model="formInline.region" placeholder="课程名称">
             <el-option label="全部" value="beijing"></el-option>
             <el-option label="课程名称1" value="shanghai"></el-option>
             <el-option label="课程名称2" value="beijing"></el-option>
             <el-option label="课程名称3" value="beijing"></el-option>
             <el-option label="课程名称4" value="beijing"></el-option>
           </el-select>
         </el-form-item>
         <el-form-item label="单位">
           <el-select v-model="formInline.region" placeholder="时间单位">
             <el-option label="日" value="beijing"></el-option>
             <el-option label="月" value="shanghai"></el-option>
             <el-option label="年" value="beijing"></el-option>
           </el-select>
         </el-form-item>
           <el-form-item label="时间">
             <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 140px"></el-date-picker>
             -
             <el-date-picker type="date" placeholder="选择日期" v-model="date1" style="width: 140px;"></el-date-picker>
           </el-form-item>
           <el-form-item>
             <el-button type="primary" @click="onSubmit">查询</el-button>
           </el-form-item>
         </el-form>

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
            label="课程">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.course }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="营收额">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.turnover }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="购买数量">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.count }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="时间">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
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
          id: 0,
          course: '三角函数专项训练',
          turnover: '10000',
          count: '2339',
          date: '2017-07-06'
        },{
          id: 0,
          course: '三角函数专项训练',
          turnover: '10000',
          count: '2339',
          date: '2017-07-06'
        },{
          id: 0,
          course: '三角函数专项训练',
          turnover: '10000',
          count: '2339',
          date: '2017-07-06'
        },{
          id: 0,
          course: '三角函数专项训练',
          turnover: '10000',
          count: '2339',
          date: '2017-07-06'
        },{
          id: 0,
          course: '三角函数专项训练',
          turnover: '10000',
          count: '2339',
          date: '2017-07-06'
        },{
          id: 0,
          course: '三角函数专项训练',
          turnover: '10000',
          count: '2339',
          date: '2017-07-06'
        },{
          id: 0,
          course: '三角函数专项训练',
          turnover: '10000',
          count: '2339',
          date: '2017-07-06'
        },{
          id: 0,
          course: '三角函数专项训练',
          turnover: '10000',
          count: '2339',
          date: '2017-07-06'
        },{
          id: 0,
          course: '三角函数专项训练',
          turnover: '10000',
          count: '2339',
          date: '2017-07-06'
        },{
          id: 0,
          course: '三角函数专项训练',
          turnover: '10000',
          count: '2339',
          date: '2017-07-06'
        },{
          id: 0,
          course: '三角函数专项训练',
          turnover: '10000',
          count: '2339',
          date: '2017-07-06'
        },]
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
