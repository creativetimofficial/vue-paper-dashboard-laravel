<template>
  <div>
    <div class="row">
      <div class="col-lg-6 col-md-12 text-center">
        <task-list></task-list>
        <card>
          <div slot="header" class="card-text">
            <h4 class="card-title">Employees Stats</h4>
            <p class="card-category">New employees on 15th September, 2016</p>
          </div>
          <el-table :data="employeeData" header-row-class-name="text-warning">
            <el-table-column width="50px" align="left" prop="id" label="ID"/>
            <el-table-column align="center" prop="name" label="NAME"/>
            <el-table-column align="center" prop="salary" label="SALARY"/>
            <el-table-column align="center" prop="country" label="COUNTRY"/>
          </el-table>
        </card>
      </div>
      <div class="col-lg-6 col-md-12">
        <time-line type="simple">
          <time-line-item class="timeline-inverted" badgeType="danger" badgeIcon="nc-icon nc-single-copy-04">
            <badge slot="header" type="danger">Some title</badge>
            <p slot="content">
              Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my
              family
              We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show
              at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>

            <h6 slot="footer">
              <i class="fa fa-block-o"></i>
              11 hours ago via Twitter
            </h6>
          </time-line-item>

          <time-line-item class="timeline-inverted" badgeType="success" badgeIcon="nc-icon nc-sun-fog-29">
            <badge slot="header" type="success">Another Title</badge>
            <p slot="content">
              Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first
              album
              to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do
              from
              shoes to music to homes is that Kim has to like it....</p>
          </time-line-item>

          <time-line-item class="timeline-inverted" badgeType="info" badgeIcon="nc-icon nc-world-2">
            <badge slot="header" type="info">Another Title</badge>
            <div slot="content">
              <p>
                Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing
                @
                Figueroa and 12th in downtown LA 11:10PM</p>
              <p>
                What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is
                my
                favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>
              <hr>
              <drop-down class="btn-group">
                <p-button slot-scope="{isOpen}" slot="title" type="info" round class="dropdown-toggle"
                          :aria-expanded="isOpen">
                  <i class="nc-icon nc-settings"></i> &nbsp;
                </p-button>
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </drop-down>
            </div>
          </time-line-item>

        </time-line>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="row">

          <div class="col-lg-6">
            <card type="pricing">
              <h6 slot="header" class="card-category"> Alpha Pack</h6>
              <div class="card-icon icon-primary ">
                <i class="nc-icon nc-spaceship"></i>
              </div>
              <h3 class="card-title">69$</h3>
              <ul>
                <li>Working materials in EPS</li>
                <li>6 months access to the library</li>
              </ul>
              <p-button type="primary" round slot="footer">Add to Cart</p-button>
            </card>
          </div>
          <div class="col-lg-6">
            <card type="pricing" class="card-plain">
              <h6 slot="header" class="card-category"> Bravo Pack</h6>
              <div class="card-icon icon-warning ">
                <i class="nc-icon nc-shop"></i>
              </div>
              <h3 class="card-title">10$</h3>
              <ul>
                <li>Complete documentation</li>
                <li>Working materials in Sketch</li>
              </ul>
              <p-button slot="footer" type="warning" round class="btn-neutral">Add to Cart</p-button>
            </card>
          </div>

        </div>
      </div>
      <div class="col-md-6">
        <card type="testimonial">
          <div class="icon icon-primary">
            <i class="fa fa-quote-right"></i>
          </div>
          <p class="card-description">
            The networking at Web Summit is like no other European tech conference.
          </p>
          <template slot="footer">
            <h4 class="card-title">Gina Andrew</h4>
            <h6 class="card-category">@ginaandrew</h6>
            <div class="card-avatar">
              <a href="#pablo">
                <img class="img" src="/static/img/faces/joe-gardner-2.jpg">
              </a>
            </div>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
  import TaskList from './Widgets/TaskList'
  import { TimeLine, TimeLineItem, Card, Dropdown, Badge } from 'src/components/UIComponents'
  import { Table, TableColumn } from 'element-ui'

  export default {
    components: {
      TaskList,
      TimeLine,
      TimeLineItem,
      Card,
      Dropdown,
      Badge,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
    },
    data() {
      return {
        employeeData: [
          { id: 1, name: "Dakota Rice", salary: "$36,738", country: "Niger" },
          { id: 2, name: "Minerva Hooper", salary: "$23,789", country: "Curaçao" },
          { id: 3, name: "Sage Rodriguez", salary: "$56,142", country: "Netherlands" },
          { id: 4, name: "Philip Chaney", salary: "$38,735", country: "Korea, South" },
        ]
      }
    }
  }
</script>
<style>
</style>
