<template>
    <div :class="['col', 'col-' + span]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'GuluCol',
        props: {
            span: {
                type: [Number, String]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col {
        height: 100px;
        width: 50%;
        background-color: grey;
        border: 1px solid red;

        $prefix: col-;
        @for $n from 1 through 24 {
            &.#{$prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
    }
</style>