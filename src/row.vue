<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            gutter: {
                type: [Number, String]
            }
        },
        mounted() {
            this.$children.forEach((child, index) => {
                child.gutter = this.gutter;
            })
        }
    }
</script>

<style lang="scss" scoped>
    .row {
        display: flex;
    }
</style>