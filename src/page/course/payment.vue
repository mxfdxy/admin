<template>
  <div>
      <el-row style="margin-bottom: 20px;">
          <el-col :span="24">
              <el-breadcrumb separator="/">
                  <el-breadcrumb-item>课程管理</el-breadcrumb-item>
                  <el-breadcrumb-item>付费管理</el-breadcrumb-item>
              </el-breadcrumb>
          </el-col>
      </el-row>

    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        label="#"
        width="180">
        <template scope="scope">
          <!-- <el-icon name="time"></el-icon> -->
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="付费类型"
        width="180">
        <template scope="scope">
          <!-- <el-icon name="time"></el-icon> -->
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="课程数量"
        width="180">
        <template scope="scope">
          <!-- <el-icon name="time"></el-icon> -->
          <span style="margin-left: 10px">{{ scope.row.count }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="说明">
        <template scope="scope">
          <!-- <el-icon name="time"></el-icon> -->
          <span style="margin-left: 10px">{{ scope.row.caption }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '0',
          name: '免费',
          count: 12,
          caption: '普通用户和VIP用户免费学习'
        },{
          id: '1',
          name: 'VIP',
          count: 12,
          caption: '普通用户付费，VIP用户免费'
        },{
          id: '2',
          name: '付费',
          count: 12,
          caption: '普通用户和VIP用户需要付费学习，VIP用户享受折扣价格'
        },]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
