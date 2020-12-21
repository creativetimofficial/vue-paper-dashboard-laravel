<template>
  <card>
    <template slot="header">
      <h4 class="card-title">Tasks</h4>
      <p class="category">Backend development</p>
    </template>
    <div class="table-full-width table-tasks">
      <table class="table">
        <tbody>
        <task v-for="(task, index) in tasks"
              :key="task.title"
              :task="task"
              :index="index"
              @on-edit="handleTaskEdit"
              @on-delete="handleTaskDelete">

        </task>
        </tbody>
      </table>
    </div>
    <template slot="footer">
      <hr>
      <div class="stats">
        <i class="fa fa-history"></i> Updated 3 minutes ago
      </div>
    </template>
  </card>
</template>
<script>
  import Task from './Task.vue'
  import { Card } from 'src/components/UIComponents'

  export default {
    components: {
      Task,
      Card
    },
    data() {
      return {
        tasks: [
          {
            done: true,
            img: '/static/img/faces/ayo-ogunseinde-2.jpg',
            title: 'Sign contract for "What are conference organizers afraid of?"'
          },
          {
            done: false,
            img: '/static/img/faces/erik-lucatero-2.jpg',
            title: 'Lines From Great Russian Literature? Or E-mails From My Boss?'
          },
          {
            done: true,
            img: '/static/img/faces/kaci-baum-2.jpg',
            title: 'Using dummy content or fake information in the Web design process can result in products with unrealistic'
          },
          {
            done: false,
            img: '/static/img/faces/joe-gardner-2.jpg',
            title: 'But I must explain to you how all this mistaken idea of denouncing pleasure'
          }
        ]
      }
    },
    methods: {
      handleTaskEdit(index) {
        alert(`You want to edit task: ${JSON.stringify(this.tasks[index])}`)
      },
      handleTaskDelete(index) {
        alert(`You want to delete task: ${JSON.stringify(this.tasks[index])}`)
      }
    }
  }
</script>
<style>
</style>
