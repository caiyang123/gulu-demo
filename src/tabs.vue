<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'GuluTabs',
        provide() {
            return {tabs: this}
        },
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return value == 'horizontal' || value == 'vertical';
                }
            }
        },
        methods: {
            emitClick(tabItemName) {
                this.$emit('update:selected', tabItemName);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>