<template>
    <div class="tabs-pane" :class="{active: selected}" v-if="selected">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'GuluTabsPane',
        inject: ["tabs"],
        props: {
            name: {
                type: String,
                required: true
            },
        },
        computed: {
            selected() {
                return this.tabs.selected == this.name;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-pane {
        &.active {
            background-color: red;
        }
    }
</style>