<template>
  <div>
    <el-row style="margin-bottom: 20px;">
      <el-col :span="24">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>系统设置</el-breadcrumb-item>
        <el-breadcrumb-item>角色设置</el-breadcrumb-item>
      </el-breadcrumb>
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
            label="角色"
            width="120">
            <template scope="scope">
              <!-- <el-icon name="time"></el-icon> -->
              <span style="margin-left: 10px">{{ scope.row.role }}</span>
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
          id:   '0',
          role: 'admin',
        },{
          id:   '1',
          role: '教师',
        },{
          id:   '2',
          role: '用户',
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
