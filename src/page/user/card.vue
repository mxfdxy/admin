<template>
    <div>
        <el-row style="margin-bottom: 20px;">
            <el-col :span="24">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                    <el-breadcrumb-item>打卡管理</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>

        <el-row style="margin-bottom: 20px;">
            <el-col :span="24">

                <el-form :inline="true" :model="formInline" class="demo-form-inline">

                    <el-form-item label="单位">
                        <el-select v-model="formInline.user" placeholder="请选择时间单位">
                            <el-option label="天" value="shanghai"></el-option>
                            <el-option label="月" value="shanghai"></el-option>
                            <el-option label="年" value="shanghai"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="日期">
                      <el-date-picker type="date" placeholder="选择日期" v-model="date1"></el-date-picker>
                      -
                      <el-date-picker type="date" placeholder="选择日期" v-model="date1"></el-date-picker>
                    </el-form-item>

                    <el-form-item style="margin-bottom: 0;">
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>

            </el-col>
        </el-row>

        <el-row style="margin-bottom: 20px;">
            <el-col :span="24">
                <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                label="#"
                width="100">
                <template scope="scope">
                    <!-- <el-icon name="time"></el-icon> -->
                    <span >{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column
            label="打卡人数">
            <template scope="scope">
                <!-- <el-icon name="time"></el-icon> -->
                <span style="margin-left: 10px">{{ scope.row.count }}</span>
            </template>
        </el-table-column>
        <el-table-column
        label="时间">
            <template scope="scope">
                <!-- <el-icon name="time"></el-icon> -->
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
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,
            formInline: {
                user: '',
                region: ''
            },
            radio3: '全部',
            tableData: [{
                id: 0,
                date: '2016-05-02',
                count: '1200'
            },{
                id: 1,
                date: '2016-05-03',
                count: '688'
            },{
                id: 2,
                date: '2016-05-04',
                count: '755'
            },{
                id: 3,
                date: '2016-05-05',
                count: '324'
            },{
                id: 4,
                date: '2016-05-06',
                count: '123'
            },{
                id: 0,
                date: '2016-05-02',
                count: '1200'
            },{
                id: 1,
                date: '2016-05-03',
                count: '688'
            },{
                id: 2,
                date: '2016-05-04',
                count: '755'
            },{
                id: 3,
                date: '2016-05-05',
                count: '324'
            },{
                id: 4,
                date: '2016-05-06',
                count: '123'
            },{
                id: 0,
                date: '2016-05-02',
                count: '1200'
            },{
                id: 1,
                date: '2016-05-03',
                count: '688'
            },{
                id: 2,
                date: '2016-05-04',
                count: '755'
            },{
                id: 3,
                date: '2016-05-05',
                count: '324'
            },{
                id: 4,
                date: '2016-05-06',
                count: '123'
            }]
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>
