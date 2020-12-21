<template>
  <footer class="footer footer-black footer-white">
    <div class="container-fluid">
      <div class="row">
        <nav class="footer-nav">
          <ul>
        <li>
            <a href="https://www.creative-tim.com" class="nav-link" target="_blank" rel="noopener">CREATIVE TIM</a>
          </li>
          <li>
            <a href="https://www.updivision.com/" class="nav-link" target="_blank" rel="noopener">UPDIVISION</a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/presentation" class="nav-link" target="_blank" rel="noopener">ABOUT US</a>
          </li>
          <li>
            <a href="http://blog.creative-tim.com" class="nav-link" target="_blank" rel="noopener">BLOG</a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/license" class="nav-link" target="_blank" rel="noopener">LICENSES</a>
          </li>
          </ul>
        </nav>
        <div class="credits ml-auto">
          <div class="copyright">
            <i class="fa fa-copyright" style="font-weight: 200;"></i> {{ year }}, made with <i class="fa fa-heart heart"></i> by
            <a
              href="https://www.creative-tim.com"
              target="_blank"
              rel="noopener"
              >Creative Tim</a> and 
              <a
                href="https://www.updivision.com"
                class="font-weight-bold ml-1"
                target="_blank"
                rel="noopener"
                >UPDIVISION</a
              >
            for a better web.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'main-footer',
    data() {
      return {
        year: new Date().getFullYear()
      };
    }
  }
</script>
<style>
</style>
