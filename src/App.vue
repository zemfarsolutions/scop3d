<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Index from './components/Index.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <main id="hmn-main">
    <header>
      <div class="hmd-outer">
        <div class="container">
          <div class="hmd-inner">
            <div class="hmd-logo">
              <RouterLink to="/"><img src="/assets/images/Whie-Logo-scop3d.png" alt="Scop3D AI logo"
                        style="width: 70%;"> </RouterLink>
            </div>
            <div class="hmd-navflx">
                <div class="hmd-nav">
                    <ul>
                        <li class="hmd-navlist"><a href="#about-us">About Us</a></li>
                        <li class="hmd-navlist"><a href="#our-work">Our Work</a></li>
                        <li class="hmd-navlist"><a href="#join-us">Join Us</a></li>
                        <li class="hmd-navlist"><a href="#footer">Contact us</a></li>
                    </ul>
                </div>
                <div class="upgrade-subtn">
                    <a class="upgd-go" href="#">
                        <img class="strlight" src="/assets/images/light.svg" loading="lazy"
                            alt="button light version upgrade homedesigns">
                        Start Now
                    </a>
                </div>
            </div>

            <!-- <div class="mobileheader">
              <div id="mySidenav" class="sidenav">
                <div>
                    <a href="javascript:void(0)" class="closebtn"
                        onclick="if (!window.__cfRLUnblockHandlers) return false; closeNav()"
                        data-cf-modified-fc83d25c74d8c30f99980e60->&times;</a>

                    <a class="menu-link" href="login.html">Login</a>

                    <a class="menu-link cls_menu" href="#generate">Start Now</a>
                    <a class="menu-link" href="index.html#features">Features</a>
                    <a class="menu-link" href="api.html">API</a>
                    <a class="menu-link" href="go/blog/index.html">Blog</a>
                    <a class="menu-link cls_menu" href="#buy">Upgrade to PRO</a>

                </div>
              </div>
              <span class="only-mobile" style="font-size:40px; color: #7558ea;cursor:pointer"
                  onclick="if (!window.__cfRLUnblockHandlers) return false; openNav()"
                  data-cf-modified-fc83d25c74d8c30f99980e60->&#9776;</span>
            </div> -->
          </div>
        </div>
      </div>
    </header>
    <Index />
    <Footer />
  </main>
    
  <RouterView />
</template>


