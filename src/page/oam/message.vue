<template>
  <div>
    <el-row style="margin-bottom: 20px;">
      <el-col :span="24">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>运营维护</el-breadcrumb-item>
        <el-breadcrumb-item>通知管理</el-breadcrumb-item>
      </el-breadcrumb>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">

        <el-form :inline="true" :model="formInline" class="demo-form-inline">

          <el-form-item label="状态">
            <el-select v-model="formInline.region" placeholder="请选择状态">
              <el-option label="全部" value="shanghai"></el-option>
              <el-option label="待通知" value="beijing"></el-option>
              <el-option label="通知中" value="shanghai"></el-option>
              <el-option label="已过期" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="用户">
            <el-select v-model="formInline.region" placeholder="请选择角色">
              <el-option label="全部" value="shanghai"></el-option>
              <el-option label="用户" value="beijing"></el-option>
              <el-option label="教师" value="shanghai"></el-option>
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
              <el-button type="primary" @click="add = true">添加通知</el-button>
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
              width="80">
              <template scope="scope">
                <span style="margin-left: 10px">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="通知内容"
              width="280">
              <template scope="scope">
                <span style="margin-left: 10px">{{ scope.row.message }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="发布时间"
              width="180">
              <template scope="scope">
                <span style="margin-left: 10px">{{ scope.row.release }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="结束时间"
              width="180">
              <template scope="scope">
                <span style="margin-left: 10px">{{ scope.row.over }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="状态"
              width="180">
              <template scope="scope">
                <span style="margin-left: 10px">{{ scope.row.status }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="发布人"
              width="180">
              <template scope="scope">
                <span style="margin-left: 10px">{{ scope.row.creater }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-button
                  size="small"
                  @click="add = true">编辑</el-button>
                <el-button
                  size="small"
                  type="danger"
                  @click="stop">停用</el-button>
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

    <el-dialog title="添加用户" :visible.sync="add">
        <el-form ref="addform" :model="addform" label-width="80px">
          <el-form-item label="接收用户">
            <el-checkbox-group v-model="addform.type">
                <el-checkbox label="用户" name="type"></el-checkbox>
                <el-checkbox label="教师" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="启用">
            <el-switch v-model="addform.value1" on-text="" off-text=""></el-switch>
          </el-form-item>
          <el-form-item label="生效时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="addform.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="addform.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="通知内容">
            <el-input type="textarea" v-model="addform.desc"></el-input>
          </el-form-item>
        </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="add = false">取消</el-button>
        <el-button type="primary" @click="added">立即添加</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        addform: {},
        add: false,
        formInline: {
          user: '',
          region: ''
        },
        tableData: [{
            id: 0,
            message: '系统升级，暂停使用！',
            release: '2016-05-02 08:30',
            over: '2017-05-02 08:30',
            status: '通知中',
            creater: 'admin'
        },{
            id: 0,
            message: '系统升级，暂停使用！',
            release: '2016-05-02 08:30',
            over: '2017-05-02 08:30',
            status: '通知中',
            creater: 'admin'
        },{
            id: 0,
            message: '系统升级，暂停使用！',
            release: '2016-05-02 08:30',
            over: '2017-05-02 08:30',
            status: '通知中',
            creater: 'admin'
        },{
            id: 0,
            message: '系统升级，暂停使用！',
            release: '2016-05-02 08:30',
            over: '2017-05-02 08:30',
            status: '通知中',
            creater: 'admin'
        },{
            id: 0,
            message: '系统升级，暂停使用！',
            release: '2016-05-02 08:30',
            over: '2017-05-02 08:30',
            status: '通知中',
            creater: 'admin'
        },{
            id: 0,
            message: '系统升级，暂停使用！',
            release: '2016-05-02 08:30',
            over: '2017-05-02 08:30',
            status: '通知中',
            creater: 'admin'
        },{
            id: 0,
            message: '系统升级，暂停使用！',
            release: '2016-05-02 08:30',
            over: '2017-05-02 08:30',
            status: '通知中',
            creater: 'admin'
        },{
            id: 0,
            message: '系统升级，暂停使用！',
            release: '2016-05-02 08:30',
            over: '2017-05-02 08:30',
            status: '通知中',
            creater: 'admin'
        },{
            id: 0,
            message: '系统升级，暂停使用！',
            release: '2016-05-02 08:30',
            over: '2017-05-02 08:30',
            status: '通知中',
            creater: 'admin'
        },{
            id: 0,
            message: '系统升级，暂停使用！',
            release: '2016-05-02 08:30',
            over: '2017-05-02 08:30',
            status: '通知中',
            creater: 'admin'
        },{
            id: 0,
            message: '系统升级，暂停使用！',
            release: '2016-05-02 08:30',
            over: '2017-05-02 08:30',
            status: '通知中',
            creater: 'admin'
        },{
            id: 0,
            message: '系统升级，暂停使用！',
            release: '2016-05-02 08:30',
            over: '2017-05-02 08:30',
            status: '通知中',
            creater: 'admin'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      onSubmit() {
        console.log('submit!');
      },
      stop() {
          this.$message.success('操作成功！')
      },
      added() {
          this.add = false
          this.$message.success('添加通知成功！')
      }
    }
  }
</script>
