<template>
  <div class="wrapper" :class="toastClass">
    <div class="toast">
      <div v-if="enableHtml" v-html="message" class="message"></div>
      <div class="message" v-else>{{ message }}</div>
      <span class="close" v-if="closeButton" @click="handleClose">{{ closeButton.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuluToast",
  props: {
    message: {
      type: String,
      default: ""
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].includes(value);
      }
    }
  },
  mounted() {
    if (this.autoClose && !this.closeButton) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
  },
  computed: {
    toastClass() {
      return "position-" + this.position;
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    handleClose() {
      this.close();
      this.closeButton.callback && this.closeButton.callback(this);
    },
    log() {
      console.log("测试");
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
$font-size: 14px;
$min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
  }
  &.position-bottom {
    bottom: 0;
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.toast {
  animation: fade-in 1s;
  font-size: $font-size;
  line-height: 1.8;
  min-height: $min-height;
  display: flex;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  color: white;
  .message {
    border-right: 1px solid #666;
    padding: 0 16px;
  }
  .close {
    flex-shrink: 0;
    padding: 0 16px;
  }
}
</style>
