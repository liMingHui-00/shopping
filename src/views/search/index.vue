<template>
  <div class="search">
    <van-nav-bar title="商品搜索" left-arrow @click-left="$router.go(-1)" />

    <van-search
      show-action
      placeholder="请输入搜索关键词"
      v-model="search"
      clearable
    >
      <template #action>
        <div @click="goSearch(search)">搜索</div>
      </template>
    </van-search>

    <!-- 搜索历史 -->
    <div class="search-history">
      <div class="title">
        <span>最近搜索</span>
        <van-icon name="delete-o" size="16" @click="clear" />
      </div>
      <div class="list">
        <div
          class="list-item"
          @click="goSearch(item)"
          v-for="(item, index) in history"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHistory, setHistory } from "@/utils/storage";
export default {
  data() {
    return {
      // 搜素历史
      history: getHistory(),
      // 获取用户输入的内容
      search: "",
    };
  },
  methods: {
    clear() {
      // 清空历史
      this.history = [];
      setHistory([]);
    },
    goSearch(key) {
      const index = this.history.indexOf(key);
      // 判断输入的内容在不在下面已经有的历史中
      if (index !== -1) {
        // 说明搜索的内容已经在搜索历史当中了  那么就把原来存在的历史移出  然后把它移到最前面
        // 移出
        this.history.splice(index, 1);
      }
      // 前置
      this.history.unshift(key);
      setHistory(this.history);
      // console.log(key);
      // 跳转到搜索列表页
      this.$router.push(`/searchlist?search=${key}`);
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  .searchBtn {
    background-color: #fa2209;
    color: #fff;
  }
  ::v-deep .van-search__action {
    background-color: #c21401;
    color: #fff;
    padding: 0 20px;
    border-radius: 0 5px 5px 0;
    margin-right: 10px;
  }
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
  .list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 10px;
    gap: 5%;
  }
  .list-item {
    width: 30%;
    text-align: center;
    padding: 7px;
    line-height: 15px;
    border-radius: 50px;
    background: #fff;
    font-size: 13px;
    border: 1px solid #efefef;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
}
</style>
