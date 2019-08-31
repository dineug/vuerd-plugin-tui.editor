<template>
  <VuerdCore v-model="tree"/>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {Tree} from 'vuerd-core';

  @Component
  export default class App extends Vue {
    private tree: Tree = {
      name: 'example',
      open: true,
      children: [
        {
          name: 'hellow tui editor.md',
          read: async (path, id) => {
            return '# hellow';
          },
        },
      ],
    };
  }
</script>

<style lang="scss">
</style>
