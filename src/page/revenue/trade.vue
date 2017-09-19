<template>
  <div>
    <el-row style="margin-bottom: 20px;">
      <el-col :span="24">
          <el-breadcrumb separator="/">
              <el-breadcrumb-item>营收管理</el-breadcrumb-item>
              <el-breadcrumb-item>交易记录</el-breadcrumb-item>
          </el-breadcrumb>
      </el-col>
    </el-row>

   <el-row style="margin-bottom: 20px;">
     <el-col :span="24">
         <el-form :inline="true" :model="formInline" class="demo-form-inline">
         <el-form-item label="交易状态">
           <el-select v-model="formInline.region" placeholder="交易状态">
             <el-option label="区域一" value="shanghai"></el-option>
             <el-option label="区域二" value="beijing"></el-option>
           </el-select>
         </el-form-item>
         <el-form-item label="流水号">
           <el-input v-model="formInline.user" placeholder="课程名称"></el-input>
         </el-form-item>
         <el-form-item label="课程">
           <el-input v-model="formInline.user" placeholder="课程名称"></el-input>
         </el-form-item>
         <el-form-item label="用户">
           <el-input v-model="formInline.user" placeholder="用户昵称"></el-input>
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
            label="流水号"
            width="180">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.course }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="课程名"
            width="180">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.course }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="价格"
            width="80">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.price }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="付款时间"
            width="180">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.payment }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="用户名"
            width="180">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.user }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">退款</el-button>
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
          number: 201707062376378,
          course: '三角函数专项训练',
          price: '9.9',
          create: '2017-07-06 08:30',
          payment: '2017-07-06 08:31',
          user: '张三'
        },{
          id: 0,
          number: 201707062376378,
          course: '三角函数专项训练',
          price: '9.9',
          create: '2017-07-06 08:30',
          payment: '2017-07-06 08:31',
          user: '张三'
        },{
          id: 0,
          number: 201707062376378,
          course: '三角函数专项训练',
          price: '9.9',
          create: '2017-07-06 08:30',
          payment: '2017-07-06 08:31',
          user: '张三'
        },{
          id: 0,
          number: 201707062376378,
          course: '三角函数专项训练',
          price: '9.9',
          create: '2017-07-06 08:30',
          payment: '2017-07-06 08:31',
          user: '张三'
        },{
          id: 0,
          number: 201707062376378,
          course: '三角函数专项训练',
          price: '9.9',
          create: '2017-07-06 08:30',
          payment: '2017-07-06 08:31',
          user: '张三'
        },{
          id: 0,
          number: 201707062376378,
          course: '三角函数专项训练',
          price: '9.9',
          create: '2017-07-06 08:30',
          payment: '2017-07-06 08:31',
          user: '张三'
        },{
          id: 0,
          number: 201707062376378,
          course: '三角函数专项训练',
          price: '9.9',
          create: '2017-07-06 08:30',
          payment: '2017-07-06 08:31',
          user: '张三'
        },{
          id: 0,
          number: 201707062376378,
          course: '三角函数专项训练',
          price: '9.9',
          create: '2017-07-06 08:30',
          payment: '2017-07-06 08:31',
          user: '张三'
        },{
          id: 0,
          number: 201707062376378,
          course: '三角函数专项训练',
          price: '9.9',
          create: '2017-07-06 08:30',
          payment: '2017-07-06 08:31',
          user: '张三'
        },{
          id: 0,
          number: 201707062376378,
          course: '三角函数专项训练',
          price: '9.9',
          create: '2017-07-06 08:30',
          payment: '2017-07-06 08:31',
          user: '张三'
        },{
          id: 0,
          number: 201707062376378,
          course: '三角函数专项训练',
          price: '9.9',
          create: '2017-07-06 08:30',
          payment: '2017-07-06 08:31',
          user: '张三'
        },{
          id: 0,
          number: 201707062376378,
          course: '三角函数专项训练',
          price: '9.9',
          create: '2017-07-06 08:30',
          payment: '2017-07-06 08:31',
          user: '张三'
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
          this.$confirm('此操作将永久对用户进行退款', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '操作成功!'
            });
          }).catch(() => {
            this.$message({
            //   type: 'info',
            //   message: '已取消删除'
            });
          });
      }
    }
  }
</script>
