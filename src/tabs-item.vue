<template>
    <div class="tabs-item" :class="{active: tabs.selected == name}" @click="handleClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'GuluTabsItem',
        inject: ["tabs"],
        props: {
            name: {
                type: String,
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleClick() {
                this.tabs.emitClick(this.name);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-item {
        padding: 0 2em;
    }
</style>