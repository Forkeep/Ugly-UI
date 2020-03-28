<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script lang="js">
export default {
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== 'button') {
        console.warn(`button-group 中应该只有 g-button 但是你写的是 ${name}`)
      }
    }
  }
}

</script>

<style lang="scss" scoped>
  .button-group {
    display: inline-flex;
    vertical-align: middle;

    .g-button {
      &:not(:first-child) {
        margin-left: -1px;
      }

      border-radius: 0;

      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }

      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }

      &:hover {
        z-index: 1;
        /*position: relative;*/
      }
    }

  }
</style>