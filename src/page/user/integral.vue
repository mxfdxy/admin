<template>
    <div class="">
        <el-row style="margin-bottom: 20px">
            <el-col :span="24">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                    <el-breadcrumb-item>积分管理</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>

        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="积分等级" name="first">
                <el-row style="margin-bottom: 20px">
                    <el-col :spam="24">
                        <el-table :data="tableData" border style="width: 100%">
                          <el-table-column label="#" width="180">
                            <template scope="scope">
                              <span style="margin-left: 10px">{{ scope.row.id }}</span>
                            </template>
                          </el-table-column>
                          <el-table-column label="等级" width="180">
                            <template scope="scope">
                              <span style="margin-left: 10px">{{ scope.row.grade }}</span>
                            </template>
                          </el-table-column>
                          <el-table-column label="积分要求" width="180">
                            <template scope="scope">
                              <span style="margin-left: 10px">{{ scope.row.integral }}</span>
                            </template>
                          </el-table-column>
                          <el-table-column label="称号" width="180">
                            <template scope="scope">
                              <span style="margin-left: 10px">{{ scope.row.title }}</span>
                            </template>
                          </el-table-column>
                          <el-table-column label="权限">
                            <template scope="scope">
                              <span style="margin-left: 10px">{{ scope.row.permissions }}</span>
                            </template>
                          </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
            </el-tab-pane>

            <el-tab-pane label="获取途径" name="second">
                <el-row style="margin-bottom: 20px">
                    <el-col :spam="24">
                        <el-table :data="tableData2" border style="width: 100%">
                          <el-table-column label="#" width="80">
                            <template scope="scope">
                              <span style="margin-left: 10px">{{ scope.row.id }}</span>
                            </template>
                          </el-table-column>
                          <el-table-column label="行为" width="180">
                            <template scope="scope">
                              <span style="margin-left: 10px">{{ scope.row.behavior }}</span>
                            </template>
                          </el-table-column>
                          <el-table-column label="获取积分" width="180">
                            <template scope="scope">
                              <span style="margin-left: 10px">{{ scope.row.integral }}</span>
                            </template>
                          </el-table-column>
                          <el-table-column label="说明" width="180">
                            <template scope="scope">
                              <span style="margin-left: 10px">{{ scope.row.account }}</span>
                            </template>
                          </el-table-column>
                          <el-table-column label="操作">
                              <template scope="scope">
                                      <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                      <!-- <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
                                  </template>
                          </el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>


    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
        tableData: [{
          id: 0,
          grade: '1',
          integral: '0 ~ 100',
          title: '识文断字',
          permissions: '********'
        },{
          id: 1,
          grade: '2',
          integral: '101 ~ 200',
          title: '乐学勤思',
          permissions: '********'
        },{
          id: 2,
          grade: '3',
          integral: '201 ~ 500',
          title: '多文为富',
          permissions: '********'
        },{
          id: 3,
          grade: '4',
          integral: '501 ~ 1000',
          title: '触类旁通',
          permissions: '********'
        },{
          id: 4,
          grade: '5',
          integral: '1001 ~ 2000',
          title: '博闻强记',
          permissions: '********'
        },{
          id: 5,
          grade: '6',
          integral: '2001 ~ 5000',
          title: '格物致知',
          permissions: '********'
        },{
          id: 6,
          grade: '7',
          integral: '5001 ~ 10000',
          title: '才贯二酉',
          permissions: '********'
        },{
          id: 7,
          grade: '8',
          integral: '10001 ~ 20000',
          title: '涵今茹古',
          permissions: '********'
        },],
        tableData2: [{
            id: 0,
            behavior: '每日登录',
            integral: '+2',
            account: '每日最多一次'
        },{
            id: 1,
            behavior: '打卡',
            integral: '+3',
            account: '打卡一天'
        },{
            id: 2,
            behavior: '打卡',
            integral: '+5',
            account: '一周内连续打卡三天以上'
        },{
            id: 3,
            behavior: '打卡',
            integral: '+10',
            account: '一周内打卡七天'
        },{
            id: 4,
            behavior: '学习一门课程',
            integral: '+10',
            account: '每日上限10分'
        },{
            id: 5,
            behavior: '评论',
            integral: '+2',
            account: '每日上限10分'
        },{
            id: 6,
            behavior: '购买课程',
            integral: '50',
            account: '每日上限100分'
        }]
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
