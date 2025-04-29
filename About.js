const About = {
  template: `
    <v-container class="mt-5">
      <v-card class="pa-5">
        <v-card-title class="headline">{{ $t("about") }}</v-card-title>
        <v-card-text>
          <p>{{ $t("aboutText") }}</p>
          <p>{{ $t("student") }}</p>
        </v-card-text>
      </v-card>
    </v-container>
  `
};