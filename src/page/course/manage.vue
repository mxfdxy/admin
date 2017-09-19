<template>
    <div>
        <el-row style="margin-bottom: 20px;">
            <el-col :span="24">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>课程管理</el-breadcrumb-item>
                    <el-breadcrumb-item>课程列表</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>

        <el-form ref="form" :inline="true" :model="form" label-width="60px">
            <el-form-item label="年级">
                <el-select v-model="form.region" placeholder="请选择年级">
                    <el-option label="全部" value="beijing"></el-option>
                    <el-option label="小学" value="shanghai"></el-option>
                    <el-option label="初中" value="beijing"></el-option>
                    <el-option label="高中" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="课程">
                <el-select v-model="form.region" placeholder="请选择课程">
                    <el-option label="全部" value="shanghai"></el-option>
                    <el-option label="数学" value="shanghai"></el-option>
                    <el-option label="英语" value="beijing"></el-option>
                    <el-option label="***" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="付费">
                <el-select v-model="form.region" placeholder="请选择付费类型">
                    <el-option label="全部" value="shanghai"></el-option>
                    <el-option label="免费" value="shanghai"></el-option>
                    <el-option label="会员" value="beijing"></el-option>
                    <el-option label="付费" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="发布">
                <el-select v-model="form.region" placeholder="请选择发布状态">
                    <el-option label="全部" value="shanghai"></el-option>
                    <el-option label="待发布" value="shanghai"></el-option>
                    <el-option label="已发布" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="推荐">
                <el-select v-model="form.region" placeholder="是否推荐">
                    <el-option label="全部" value="shanghai"></el-option>
                    <el-option label="推荐" value="shanghai"></el-option>
                    <el-option label="未推荐" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="上架">
                <el-select v-model="form.region" placeholder="是否上架">
                    <el-option label="全部" value="shanghai"></el-option>
                    <el-option label="上架" value="shanghai"></el-option>
                    <el-option label="下架" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="创建">
              <el-date-picker type="date" placeholder="选择日期" v-model="date1"></el-date-picker>
              -
              <el-date-picker type="date" placeholder="选择日期" v-model="date1"></el-date-picker>
            </el-form-item>
            <el-form-item label="关键词">
              <el-input v-model="form.user" placeholder="课程名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>

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
                  <el-table-column label="价格" width="80">
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
                    label="学习人数"
                    width="120">
                    <template scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.students }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="点赞人数" width="120">
                    <template scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.students }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" fixed="right" width="200">
                    <template scope="scope">
                      <el-button size="small" @click="dialogFormVisible = true">编辑</el-button>
                      <el-button size="small" @click="handleTuijian(scope.$index, scope.row)">推荐</el-button>
                      <el-button
                          size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">下架</el-button>
                    </template>
                  </el-table-column>
                </el-table>
            </el-col>
        </el-row>

        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000"></el-pagination>

        <el-dialog title="编辑课程" :visible.sync="dialogFormVisible">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="课程名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="课程简介">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <el-form-item label="年级分类">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="小学" value="shanghai"></el-option>
                  <el-option label="初中" value="beijing"></el-option>
                  <el-option label="高中" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="学科分类">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="数学" value="shanghai"></el-option>
                  <el-option label="语文" value="beijing"></el-option>
                  <el-option label="英语" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="付费类型">
                <el-radio-group v-model="form.resource">
                  <el-radio label="免费"></el-radio>
                  <el-radio label="会员"></el-radio>
                  <el-radio label="付费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="课程价格">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="发布">
                <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="下架">
                <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取消</el-button>
              <el-button type="primary" @click="save">保存</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
const grades = ['小学', '初中', '高中'];
const subjects = ['语文', '数学', '英语', '化学', '物理', '生物', '地理', '政治', '历史'];
const payments = ['免费', 'VIP', '付费'];
export default {
    data() {
        return {
            dialogFormVisible: false,
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            currentPage1: 5,
            checkAll: true,
            checkedCities: ['上海'],
            cities: cityOptions,
            grades: grades,
            checkedGrades: ['小学'],
            subjects: subjects,
            checkedSubjects: ['语文'],
            payments: payments,
            checkedPayments: ['免费'],
            isIndeterminate: true,
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
            },],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        };
    },
    methods: {
        save() {
            this.dialogFormVisible = false,
            this.$message.success('保存成功');
        },
        handleCheckAllChange(event) {
            this.checkedCities = event.target.checked ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },
        handleTuijian() {
            this.$message.success('推荐课程成功！');
        },
        handleDelete(index, row) {
            this.$message.success('课程下架成功！');
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        onSubmit() {
            console.log('submit!');
        }
    }
};
</script>
