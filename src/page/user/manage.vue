<template>
  <div>
    <el-row style="margin-bottom: 20px;">
      <el-col :span="24">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">

        <el-form :inline="true" :model="formInline" class="demo-form-inline">

          <el-form-item label="角色">
            <el-select v-model="formInline.region" placeholder="请选择角色">
              <el-option label="全部" value="shanghai"></el-option>
              <el-option label="用户" value="beijing"></el-option>
              <el-option label="教师" value="shanghai"></el-option>
              <el-option label="管理员" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="付费">
            <el-select v-model="formInline.region" placeholder="请选择角色">
              <el-option label="全部" value="shanghai"></el-option>
              <el-option label="普通" value="beijing"></el-option>
              <el-option label="会员" value="shanghai"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="创建时间">
            <el-date-picker type="date" placeholder="选择日期" v-model="date1"></el-date-picker>
            -
            <el-date-picker type="date" placeholder="选择日期" v-model="date1"></el-date-picker>
          </el-form-item>

          <el-form-item label="关键词">
            <el-input v-model="formInline.user" placeholder="搜索用户"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="dialogFormVisible = true">添加用户</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row style="margin-bottom: 20px;">
      <el-col :span="24">
          <el-table :data="tableData" border style="width: 100%">
          <el-table-column label="#" width="100">
            <template scope="scope">
              <span >{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column label="昵称" width="200">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.nick }}</span>
            </template>
          </el-table-column>
          <el-table-column label="性别" width="80">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.sex }}</span>
            </template>
          </el-table-column>
          <el-table-column label="手机号" width="125">
            <template scope="scope">
              <span>{{ scope.row.tel }}</span>
            </template>
          </el-table-column>
          <el-table-column label="角色" width="80">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.role }}</span>
            </template>
          </el-table-column>
          <el-table-column label="等级" width="80">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.grade }}</span>
            </template>
          </el-table-column>
          <el-table-column label="积分" width="120">
            <template scope="scope">
              <span style="margin-left: 10px">{{ scope.row.integral }}</span>
            </template>
          </el-table-column>
          <el-table-column label="注册时间" width="180">
            <template scope="scope">
              <el-icon name="time"></el-icon>
              <span style="margin-left: 10px">{{ scope.row.registTime }}</span>
            </template>
          </el-table-column>
          <el-table-column label="关注时间" width="180">
            <template scope="scope">
              <el-icon name="time"></el-icon>
              <span style="margin-left: 10px">{{ scope.row.fellowTime }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="140" fixed="right">
            <template scope="scope">
              <el-button size="small" @click="dialogFormVisible = true">编辑</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">停用</el-button>
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


    <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
        <el-form ref="addform" :model="addform" label-width="80px">
          <el-form-item label="用户昵称">
            <el-input v-model="addform.name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="addform.resource">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="角色">
            <el-checkbox-group v-model="addform.type">
              <el-checkbox label="用户" name="type"></el-checkbox>
              <el-checkbox label="教师" name="type"></el-checkbox>
              <el-checkbox label="管理员" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="addform.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="addform.name"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="addform.name"></el-input>
          </el-form-item>
        </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="add">立即添加</el-button>
      </div>
    </el-dialog>

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
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        },{
          id:   '1',
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        },{
          id:   '2',
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        },{
          id:   '3',
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        },{
          id:   '4',
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        },{
          id:   '5',
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        },{
          id:   '6',
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        },{
          id:   '7',
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        },{
          id:   '8',
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        },{
          id:   '9',
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        },{
          id:   '10',
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        },{
          id:   '11',
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        },{
          id:   '12',
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        },{
          id:   '13',
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        },{
          id:   '14',
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        },{
          id:   '15',
          nick: '张雪峰',
          sex:  '男',
          tel:  '11011011011',
          role: '用户',
          grade: '1',
          integral: '20',
          registTime: '2016-05-04 21:20',
          fellowTime: '2016-05-04 21:19'
        }],
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
        addform: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
        // formLabelWidth: '200px'
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
      },
      handleDelete() {
          this.$message.success('操作成功！')
        //   this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   this.$message({
        //     type: 'success',
        //     message: '删除成功!'
        //   });
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '已取消删除'
        //   });
        // });
      },
      add() {
          this.dialogFormVisible = false
          this.$message.success('添加用户成功！');
      }
    }
  }
</script>
