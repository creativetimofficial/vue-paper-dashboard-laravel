<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">{{title}}</h4>
    </div>
    <div class="card-body">
      <ul class="list-unstyled team-members">
        <li>
          <div class="row" v-for="member in members">
            <div class="col-2 col-md-2">
              <div class="avatar">
                <img :src="member.image" alt="Circle Image" class="img-circle img-no-padding img-responsive">
              </div>
            </div>
            <div class="col-md-7 col-7">
              {{member.name}}
              <br>
              <span :class="getStatusClass(member.status)">
                <small>{{member.status}}</small>
              </span>
            </div>

            <div class="col-md-3 col-3 text-right">
              <p-button size="sm" type="success" outline icon round>
                <i class="fa fa-envelope"></i>
              </p-button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {Button} from 'src/components/UIComponents'
  export default {
    components: {
      [Button.name]: Button
    },
    data () {
      return {
        title: 'Team members',
        members: [
          {
            image: '/static/img/faces/face-0.jpg',
            name: 'Dj Khaled',
            status: 'Offline'
          },
          {
            image: '/static/img/faces/face-1.jpg',
            name: 'Creative Tim',
            status: 'Available'
          },
          {
            image: '/static/img/faces/face-3.jpg',
            name: 'Flume',
            status: 'Busy'
          }
        ]
      }
    },
    methods: {
      getStatusClass (status) {
        switch (status) {
          case 'Offline':
            return 'text-muted'
          case 'Available':
            return 'text-success'
          case 'Busy':
            return 'text-danger'
          default:
            return 'text-success'
        }
      }
    }
  }

</script>
<style>

</style>
