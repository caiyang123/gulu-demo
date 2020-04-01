<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
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
        },
        computed: {
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px', 
                    paddingRight: this.gutter / 2 + 'px'
                }
            },
            colClass() {
                const { span, offset } = this; 
                return [ 
                    span && 'col-' + span,
                    offset && 'offset-' + offset
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col {
        height: 100px;
        width: 50%;

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