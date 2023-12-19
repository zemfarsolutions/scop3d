<template>
  <header>
    <div class="hmd-outer">
      <div class="container">
        <div class="hmd-inner">
          <div class="hmd-logo">
            <RouterLink to="/"><img src="/assets/images/Bryan_logo.png" alt="Scop3D AI logo" style="width: 70%;">
            </RouterLink>
          </div>
          <div class="hmd-navflx">
            <!-- <div class="hmd-nav">
                                        <ul>
                                            <li class="hmd-navlist"><a href="#about-us">About Us</a></li>
                                            <li class="hmd-navlist"><a href="#our-work">Our Work</a></li>
                                            <li class="hmd-navlist"><a href="#join-us">Join Us</a></li>
                                            <li class="hmd-navlist"><a href="#footer">Contact us</a></li>
                                        </ul>
                                    </div> -->
            <div class="upgrade-subtn">
              <a class="upgd-go" href="#">
                <img class="strlight" src="/assets/images/light.svg" loading="lazy"
                  alt="button light version upgrade homedesigns">
                Start Now
              </a>
            </div>
            <div class="upgrade-subtn">
              <template v-if="isLoggedIn">
                <a class="upgd-go" href="javascript:void(0);" @click="logout">
                  Logout
                </a>
              </template>
              <template v-else>
                <a class="upgd-go" href="javascript:void(0);" @click="registerModal">
                  Register
                </a>
                <a class="upgd-go" href="javascript:void(0);" @click="loginModal">
                  Login
                </a>
              </template>
            </div>

          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Modal -->
  <div class="modal fade" id="modal_register" tabindex="-1" aria-labelledby="modal_register_label" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal_demo_label">Register</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="closeRegister"></button>
        </div>
        <div class="modal-body">
          <div class="formSec">
            <form @submit.prevent="submitRegister">
              <div class="form-group my-3">
                <input v-model="registerData.name" type="text" name="name" class="form-control"
                  placeholder="Enter Username..." style="border-radius: 20px;">
              </div>
              <div class="form-group my-3">
                <input v-model="registerData.email" type="email" name="email" class="form-control"
                  placeholder="Enter email..." style="border-radius: 20px;">
              </div>
              <div class="form-group mb-3">
                <input v-model="registerData.password" type="password" name="password" class="form-control"
                  placeholder="Enter password..." style="border-radius: 20px;">
              </div>
              <div class="modal-footer d-flex justify-content-between">
                <button type="button" class="btn btn-secondary" @click="closeRegister">Close</button>
                <button type="submit" class="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--login modal -->
  <div class="modal fade" id="modal_login" tabindex="-1" aria-labelledby="modal_login_label" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal_demo_label">Login</h5>
          <button type="button" class="btn-close" aria-label="Close" @click="closeLogin"></button>
        </div>
        <div class="modal-body">
          <div class="formSec">
            <form @submit.prevent="submitLogin">
              <div class="form-group my-3">
                <input v-model="loginData.email" type="email" name="email" class="form-control"
                  placeholder="Enter email..." style="border-radius: 20px;">
              </div>
              <div class="form-group mb-3">
                <input v-model="loginData.password" type="password" name="password" class="form-control"
                  placeholder="Enter password..." style="border-radius: 20px;">
              </div>
              <div class="modal-footer d-flex justify-content-between">
                <button type="button" class="btn btn-secondary" @click="closeLogin">Close</button>
                <button type="submit" class="btn btn-success">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const modal_register = ref(null);
const modal_login = ref(null);

const registerData = ref({
  name: '',
  email: '',
  password: '',
  phone: '',
});

const loginData = ref({
  email: '',
  password: '',
});

const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true');
const user = ref({}); // Initialize an empty user object

onMounted(() => {
  modal_register.value = new bootstrap.Modal('#modal_register', {});
  modal_login.value = new bootstrap.Modal('#modal_login', {});
});

function registerModal() {
  modal_register.value.show();
}

function closeRegister() {
  modal_register.value.hide();
}

function loginModal() {
  modal_login.value.show();
}

function closeLogin() {
  modal_login.value.hide();
}

async function submitRegister() {
  try {
    const response = await axios.post('https://api.scop3d.com/api/register', registerData.value);
    console.log('API Response:', response.data);
    // Navigate back to the same view
    closeRegister();
  } catch (error) {
    console.error('API Error:', error);
  }
}

async function submitLogin() {
  try {
    const response = await axios.post('https://api.scop3d.com/api/login', loginData.value);
    console.log('API Response:', response.data);

    // Set login status to true
    isLoggedIn.value = true;
    localStorage.setItem('isLoggedIn', 'true');

    // Store the token in localStorage
    const token = response.data.token;
    localStorage.setItem('token', token);

    // Navigate back to the same view
    closeLogin();
  } catch (error) {
    console.error('API Error:', error);
  }
}


async function logout() {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error('Token not found');
    return;
  }

  try {
    const response = await axios.get('https://api.scop3d.com/api/logout', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log('API Response:', response.data);

    // Clear the user's login state and information
    isLoggedIn.value = false;
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token'); // Remove the token from localStorage

  } catch (error) {
    console.error('API Error:', error);
  }
}


// async function submitLogin() {
//   try {
//     const response = await axios.post('https://api.scop3d.com/api/login', loginData.value);
//     console.log('API Response:', response.data);
//     // Set login status to true
//     isLoggedIn.value = true;
//     localStorage.setItem('isLoggedIn', 'true');
//     // Store user information
//     user.value = response.data.user;
//     // Navigate back to the same view
//     closeLogin();
//   } catch (error) {
//     console.error('API Error:', error);
//   }
// }

// async function logout() {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     console.error('Token not found');
//     return;
//   }

//   try {
//     const response = await axios.get('https://api.scop3d.com/api/logout', {}, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     console.log('API Response:', response.data);

//     // Clear the user's login state and information
//     isLoggedIn.value = false;
//     localStorage.setItem('isLoggedIn', 'false');
//     localStorage.removeItem('token'); // Remove the token from localStorage

//   } catch (error) {
//     console.error('API Error:', error);
//   }
// }
</script>


