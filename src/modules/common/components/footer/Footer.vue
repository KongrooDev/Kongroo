<template>
<footer class="footer">
  <div class="container">
    <div class="content has-text-centered">
      <p>
        <strong>Kongroo</strong> The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
      </p>
      <p>
        <a class="icon" href="https://github.com/3lpsy">
          <i class="fa fa-github"></i>
        </a>
        <a class="icon" href="https://twitter.com/3lpsy">
          <i class="fa fa-twitter"></i>
        </a>
        <router-link class="icon" :to="{name: 'auth.login.credential.index'}">
            <i class="fa fa-sign-in"></i>
        </router-link>
      </p>
    </div>
  </div>
</footer>
</template>

<script>
    export default {
        ready() {
        }
    };
</script>

<style type="text/css">

</style>
