Vue.component('task-card', {
  template: `
    <v-card class="pa-5 mt-5">
      <slot name="title"></slot>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>
  `
});