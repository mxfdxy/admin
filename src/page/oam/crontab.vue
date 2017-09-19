<template>
    <div class="">
        <el-row style="margin-bottom: 20px;">
            <el-col :span="24">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>运营维护</el-breadcrumb-item>
                    <el-breadcrumb-item>页面管理</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="#" width="80">
            </el-table-column>
            <el-table-column prop="name" label="任务名称">
            </el-table-column>
            <el-table-column prop="cycle" label="执行周期">
            </el-table-column>
            <el-table-column prop="date" label="下次执行时间">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                id: '3',
                name: '自动退款',
                cycle: '1天',
                date: '2016-05-02'
            },{
                id: '2',
                name: '自动退款',
                cycle: '1天',
                date: '2016-05-02'
            },{
                id: '1',
                name: '自动退款',
                cycle: '1天',
                date: '2016-05-02'
            },]
        }
    },
    methods: {
        formatter(row, column) {
            return row.address;
        },
        filterTag(value, row) {
            return row.tag === value;
        }
    }
}
</script>
