<template>
    <div
        :class="['col', span && 'col-' + span, offset &&'offset-' + offset]"
        :style="{paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px'}"
    >
        <div style="border: 1px solid green; height: 100px"><slot></slot></div>
    </div>
</template>

<script>
    export default {
        name: 'GuluCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
        },
        data() {
            return {
                gutter: 0
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col {
        height: 100px;
        width: 50%;
        background-color: grey;

        &:first-child {
            padding-left: 0 !important;
        }

        &:last-child {
            padding-right: 0 !important;
        }

        $prefix: col-;
        @for $n from 1 through 24 {
            &.#{$prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }

        $prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>