<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <g-icon v-if=" icon && !loading" class="icon" :name="icon">1</g-icon>
    <g-icon v-if="loading" class="loading icon" name="jiazai">1</g-icon>
    <div class="content">
      <slot>--名称--</slot>

    </div>
  </button>
</template>

<script>
  export default {
    // props: ['icon', 'iconPosition']
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator: function (value) {
          return !(value !== 'left' && value !== 'right');
        }
      }

    }

  }
</script>

<style lang="scss" scoped>
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 .8em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    /*内联样式会出现上下不对齐的奇怪问题，修改vertical-align就可以了*/
    vertical-align: middle;
    .loading{
      animation: spin 1s infinite linear;
    }
    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    &.icon-left {
      > .icon {
        order: 1;
        margin-right: .1em;
      }

      > .content {
        order: 2;
      }
    }

    &.icon-right {
      > .icon {
        order: 2;
        margin-left: .1em;
      }

      > .content {
        order: 1;
      }
    }
  }

</style>