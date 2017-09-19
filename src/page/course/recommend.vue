<template>
    <div>
        <el-row style="margin-bottom: 20px;">
            <el-col :span="24">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>课程管理</el-breadcrumb-item>
                    <el-breadcrumb-item>推荐课程</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-rom>
            <el-col :span="24">
                <el-form ref="form" :inline="true" :model="form" label-width="60px">
                    <el-form-item label="关键词">
                      <el-input v-model="form.user" placeholder="课程名"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-rom>
        <el-row style="margin-bottom: 20px">
            <el-col :spam="24">
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
                    label="课程名"
                    width="180">
                    <template scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="分类"
                    width="180">
                    <template scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.category }}</span>
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
                    label="发布状态"
                    width="120">
                    <template scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.status }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="创建人"
                    width="120">
                    <template scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.creater }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="创建日期"
                    width="180">
                    <template scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="购买人数"
                    width="120">
                    <template scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.students }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template scope="scope">
                      <el-button
                          size="small"
                          type="danger"
                          @click="handleDelete(scope.$index, scope.row)">取消推荐</el-button>
                    </template>
                  </el-table-column>
                </el-table>
            </el-col>
        </el-row>

        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000"></el-pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    
                },
                tableData: [{
                    id: 0,
                    name: '三角函数专项训练',
                    category: '初中-语文-免费',
                    price: '0.00',
                    status: '已发布',
                    creater: '张雪峰',
                    date: '2017-07-20 08:30',
                    students: '121'
                },{
                    id: 0,
                    name: '三角函数专项训练',
                    category: '初中-语文-免费',
                    price: '0.00',
                    status: '已发布',
                    creater: '张雪峰',
                    date: '2017-07-20 08:30',
                    students: '121'
                },{
                    id: 0,
                    name: '三角函数专项训练',
                    category: '初中-语文-免费',
                    price: '0.00',
                    status: '已发布',
                    creater: '张雪峰',
                    date: '2017-07-20 08:30',
                    students: '121'
                },{
                    id: 0,
                    name: '三角函数专项训练',
                    category: '初中-语文-免费',
                    price: '0.00',
                    status: '已发布',
                    creater: '张雪峰',
                    date: '2017-07-20 08:30',
                    students: '121'
                },{
                    id: 0,
                    name: '三角函数专项训练',
                    category: '初中-语文-免费',
                    price: '0.00',
                    status: '已发布',
                    creater: '张雪峰',
                    date: '2017-07-20 08:30',
                    students: '121'
                },{
                    id: 0,
                    name: '三角函数专项训练',
                    category: '初中-语文-免费',
                    price: '0.00',
                    status: '已发布',
                    creater: '张雪峰',
                    date: '2017-07-20 08:30',
                    students: '121'
                },{
                    id: 0,
                    name: '三角函数专项训练',
                    category: '初中-语文-免费',
                    price: '0.00',
                    status: '已发布',
                    creater: '张雪峰',
                    date: '2017-07-20 08:30',
                    students: '121'
                },{
                    id: 0,
                    name: '三角函数专项训练',
                    category: '初中-语文-免费',
                    price: '0.00',
                    status: '已发布',
                    creater: '张雪峰',
                    date: '2017-07-20 08:30',
                    students: '121'
                },{
                    id: 0,
                    name: '三角函数专项训练',
                    category: '初中-语文-免费',
                    price: '0.00',
                    status: '已发布',
                    creater: '张雪峰',
                    date: '2017-07-20 08:30',
                    students: '121'
                },{
                    id: 0,
                    name: '三角函数专项训练',
                    category: '初中-语文-免费',
                    price: '0.00',
                    status: '已发布',
                    creater: '张雪峰',
                    date: '2017-07-20 08:30',
                    students: '121'
                },{
                    id: 0,
                    name: '三角函数专项训练',
                    category: '初中-语文-免费',
                    price: '0.00',
                    status: '已发布',
                    creater: '张雪峰',
                    date: '2017-07-20 08:30',
                    students: '121'
                },{
                    id: 0,
                    name: '三角函数专项训练',
                    category: '初中-语文-免费',
                    price: '0.00',
                    status: '已发布',
                    creater: '张雪峰',
                    date: '2017-07-20 08:30',
                    students: '121'
                },{
                    id: 0,
                    name: '三角函数专项训练',
                    category: '初中-语文-免费',
                    price: '0.00',
                    status: '已发布',
                    creater: '张雪峰',
                    date: '2017-07-20 08:30',
                    students: '121'
                },{
                    id: 0,
                    name: '三角函数专项训练',
                    category: '初中-语文-免费',
                    price: '0.00',
                    status: '已发布',
                    creater: '张雪峰',
                    date: '2017-07-20 08:30',
                    students: '121'
                },]
            }
        },
        methods: {
            handleDelete() {
                this.$message.success('操作成功！');
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
        }
    }
</script>
