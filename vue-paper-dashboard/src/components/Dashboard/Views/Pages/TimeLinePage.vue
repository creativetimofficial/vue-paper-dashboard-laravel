<template>
  <div>
    <div class="header text-center">
      <h3 class="title">Timeline</h3>
    </div>
    <time-line>
      <time-line-item class="timeline-inverted" badgeType="danger" badgeIcon="nc-icon nc-single-copy-04">
        <badge slot="header" type="danger">Some title</badge>
        <p slot="content">
          Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!!   It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>

        <h6 slot="footer">
          <i class="fa fa-clock-o"></i>
          11 hours ago via Twitter
        </h6>
      </time-line-item>

      <time-line-item badgeType="success" badgeIcon="nc-icon nc-sun-fog-29">
        <badge slot="header" type="success">Another Title</badge>
        <p slot="content">
          Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....</p>
      </time-line-item>

      <time-line-item class="timeline-inverted" badgeType="info" badgeIcon="nc-icon nc-world-2">
        <badge slot="header" type="info">Another Title</badge>
        <div slot="content">
          <p>
            Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM</p>
          <p>
            What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye</p>
          <hr>
        </div>
        <drop-down slot="footer" class="btn-group" position="left">
          <p-button slot-scope="{isOpen}" slot="title" type="info" round class="dropdown-toggle" :aria-expanded="isOpen">
            <i class="nc-icon nc-settings"></i> &nbsp;
          </p-button>
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </drop-down>
      </time-line-item>

      <time-line-item badgeType="warning" badgeIcon="nc-icon nc-istanbul">
        <badge slot="header" type="warning">Another Title</badge>
        <p slot="content">
          Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue team</p>
      </time-line-item>

    </time-line>
  </div>

</template>
<script>
  import {TimeLine, TimeLineItem, Badge} from 'src/components/UIComponents';
  export default {
    components: {
      TimeLine,
      TimeLineItem,
      Badge
    }
  }
</script>
<style>
</style>
