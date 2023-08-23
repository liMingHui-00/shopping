<template>
  <div class="mian">
    <button @click="handleSub" class="sub">-</button>
    <input @change="handleChange" :value="value" class="inp" type="text" />
    <button @click="handleAdd" class="add">+</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: 1,
      type: Number,
    },
  },
  methods: {
    handleSub() {
      if (this.value <= 1) {
        return;
      }
      this.$emit("input", this.value - 1);
    },
    handleAdd() {
      this.$emit("input", this.value + 1);
    },
    handleChange(e) {
      if (isNaN(+e.target.value) || +e.target.value < 1) {
        e.target.value = this.value;
        return;
      }
      this.$emit("input", +e.target.value);
    },
  },
};
</script>

<style lang="less" scoped>
.mian {
  width: 110px;
  height: 30px;
  display: flex;
  .sub,
  .add {
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    background-color: #efefef;
  }
  .inp {
    width: 40px;
    height: 30px;
    border: none;
    outline: none;
    background-color: #efefef;
    text-align: center;
    margin: 0 5px;
  }
}
</style>
