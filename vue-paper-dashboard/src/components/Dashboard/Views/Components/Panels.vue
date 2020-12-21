<template>
  <div>
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <div>

        </div>
        <card>
          <h5 slot="header" class="card-title">Collapsible Accordion</h5>

          <collapse>
            <collapse-item title="Default Collapsible Item 1" name="1">
              <div>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </collapse-item>
            <collapse-item title="Default Collapsible Item 1" name="2">
              <div>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </collapse-item>
            <collapse-item title="Default Collapsible Item 1" name="3">
              <div>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </collapse-item>
          </collapse>

        </card>
      </div>


      <div class="col-lg-6 col-md-12">
        <card type="plain">
          <h5 slot="header" class="card-title">Collapsible Accordion on Plain Card</h5>
          <collapse>
            <collapse-item title="Default Collapsible Item 1" name="1">
              <div>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </collapse-item>
            <collapse-item title="Default Collapsible Item 1" name="2">
              <div>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </collapse-item>
            <collapse-item title="Default Collapsible Item 1" name="3">
              <div>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </collapse-item>
          </collapse>
        </card>
      </div>

    </div>

    <div class="row">
      <div class="col-lg-6 col-md-12">

        <card>
          <h5 slot="header">Horizontal Tabs</h5>
          <tabs value="Description" tab-content-classes="text-center">
            <tab-pane title="Home" key="home">
              <p>Larger, yet dramatically thinner.
                More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>
              <p>
                It’s one continuous form where hardware and software function in perfect unison, creating a new generation of phone that’s better by any measure.</p>
            </tab-pane>
            <tab-pane title="Profile" key="profile">
              <p>Here is your profile</p>
            </tab-pane>
            <tab-pane title="Messages" key="messages">
              <p>Here is your messages</p>
            </tab-pane>
          </tabs>
        </card>

      </div>
      <div class="col-lg-6 col-md-12">
        <card>
          <h5 slot="header">Vertical Tabs</h5>
          <tabs vertical>
            <tab-pane title="Home" key="home">
              Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.
            </tab-pane>
            <tab-pane title="Profile" key="profile">Here is your profile.</tab-pane>
            <tab-pane title="Messages" key="messages">Here are your messages.</tab-pane>
          </tabs>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 ml-auto mr-auto">
        <card type="plain" class="card-subcategories">
          <template slot="header">
            <h4 class="card-title text-center">Page Subcategories</h4>
            <br>
          </template>
          <tabs pills type="primary" icons centered tab-content-classes="tab-space">
            <tab-pane id="home" key="home">
              <span slot="title">
                  <i class="nc-icon nc-umbrella-13"></i> Home
              </span>

              Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
              <br>
              <br> Dramatically visualize customer directed convergence without revolutionary ROI.

            </tab-pane>
            <tab-pane id="messages" key="messages">
              <span slot="title">
                  <i class="nc-icon nc-shop"></i> Messages
              </span>

              Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
              <br>
              <br>Dramatically maintain clicks-and-mortar solutions without functional solutions.

            </tab-pane>
            <tab-pane id="settings" key="settings">
              <span slot="title">
                  <i class="nc-icon nc-settings"></i> Settings
              </span>

              Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
              <br>
              <br>Dynamically innovate resource-leveling customer service for state of the art customer service.

            </tab-pane>
          </tabs>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
  import {Collapse, CollapseItem, Tabs, TabPane, Card} from 'src/components/UIComponents'
  export default {
    components: {
      TabPane,
      Tabs,
      CollapseItem,
      Collapse,
      Card
    },
    data () {
      return {
        activeName: 'first'
      }
    }
  }
</script>
<style>
</style>
