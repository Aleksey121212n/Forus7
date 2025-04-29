const Home = {
  data() {
    return {
      newTask: ''
    };
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
  methods: {
    addTask() {
      const text = this.newTask.trim();
      if (text) {
        this.$store.commit('addTask', text);
        this.newTask = '';
      }
    },
    deleteTask(index) {
      this.$store.commit('deleteTask', index);
    },
    toggleDone(index) {
      this.$store.commit('toggleDone', index);
    }
  },
  template: `
    <v-container>
      <task-card>
        <template v-slot:title>
          <v-card-title>
            <h2 class="text-h5 font-weight-bold">📝 {{ $t("taskList") }}</h2>
          </v-card-title>
        </template>

        <v-text-field
          v-model="newTask"
          :label="$t('addTask')"
          @keyup.enter="addTask"
          outlined
          dense
        ></v-text-field>
        <v-btn color="primary" @click="addTask">{{ $t("add") }}</v-btn>

        <v-list two-line class="mt-5">
          <v-list-item v-for="(task, index) in tasks" :key="index">
            <v-list-item-action>
              <v-checkbox v-model="task.done" @change="toggleDone(index)"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title :class="{ 'text-decoration-line-through': task.done }">
                {{ task.text }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon @click="deleteTask(index)">
                <v-icon color="red">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </task-card>
      
    </v-container>
  `
};