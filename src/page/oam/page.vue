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

        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="首页轮播图" name="first">
            <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              label="#"
              width="180">
              <template scope="scope">
                <span style="margin-left: 10px">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="标题"
              width="180">
              <template scope="scope">
                <span style="margin-left: 10px">{{ scope.row.title }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="图片"
              width="180">
              <template scope="scope">
                <span style="margin-left: 10px">{{ scope.row.picture }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="链接"
              width="180">
              <template scope="scope">
                <span style="margin-left: 10px">{{ scope.row.url }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-button
                  size="small"
                  @click="edit = true">编辑</el-button>
                <el-button
                  size="small"
                  type="danger"
                  @click="stop">禁用</el-button>
              </template>
            </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="待定" name="second">待定</el-tab-pane>
          <el-tab-pane label="待定" name="third">待定</el-tab-pane>
          <el-tab-pane label="待定" name="fourth">待定</el-tab-pane>
        </el-tabs>

        <el-dialog title="编辑轮播" :visible.sync="edit">
            <el-form ref="addform" :model="addform" label-width="80px">
              <el-form-item label="启用">
                <el-switch v-model="addform.value1" on-text="" off-text=""></el-switch>
              </el-form-item>
              <el-form-item label="标题">
                <el-input type="text" v-model="addform.desc"></el-input>
              </el-form-item>
              <el-form-item label="链接">
                <el-input type="text" v-model="addform.desc"></el-input>
              </el-form-item>
              <el-form-item label="图片">
                  <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :file-list="fileList2"
                      list-type="picture">
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
              </el-form-item>
            </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="edit = false">取消</el-button>
            <el-button type="primary" @click="edited">保存</el-button>
          </div>
        </el-dialog>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        edit: false,
        addform: {},
        fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        activeName: 'first',
        tableData: [{
            id: 0,
            title: '最新数学课程',
            picture: '***********',
            url: '***********',
        },{
            id: 1,
            title: '最新数学课程',
            picture: '***********',
            url: '***********',
        },{
            id: 2,
            title: '最新数学课程',
            picture: '***********',
            url: '***********',
        },{
            id: 3,
            title: '最新数学课程',
            picture: '***********',
            url: '***********',
        },{
            id: 4,
            title: '最新数学课程',
            picture: '***********',
            url: '***********',
        }]
      };
    },
    methods: {
      edited() {
          this.edit = false
          this.$message.success('保存成功！')
      },
      stop() {
          this.$message.success('操作成功！')
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  };
</script>
