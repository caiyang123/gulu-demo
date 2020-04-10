<template>
    <div class="toast">
        <div v-if="enableHtml" v-html="message" class="message"></div>
        <div class="message" v-else>{{ message }}</div>
        <span class="close" v-if="closeButton" @click="handleClose">
            {{ closeButton.text }}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'GuluToast',
        props: {
            message: {
                type: String,
                default: ''
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
            }
        },
        mounted() {
            if (autoClose && !this.closeButton) {
                setTimeout(() => {
                    this.close();
                }, this.autoCloseDelay * 1000);
            }
        },
        methods: {
            close() {
                this.$el.remove();
                this.$destroy();
            },
            handleClose() {
                this.close();
                this.closeButton.callback && this.closeButton.callback(this);
            },
            log() {
                console.log('测试')
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $min-height: 40px;
    $toast-bg: rgba(0, 0, 0, .75);
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8;
        min-height: $min-height;
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
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