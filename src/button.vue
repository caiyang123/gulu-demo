<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon name="loading" class="loading icon" v-if="loading"></g-icon>
    <g-icon :name="icon" v-if="icon && !loading" class="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "g-button",
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        if (value != "left" && value != "right") {
          return false;
        }

        return true;
      }
    },
    loading: {
        type: Boolean,
        default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.g-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding: 0 0.7em;

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  > .icon {
    order: 1;
    margin-right: 0.3em;
    margin-top: 2px;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }

    > .content {
      order: 1;
    }
  }

  .loading {
      animation: spin 1s infinite linear;
  }
}
</style>