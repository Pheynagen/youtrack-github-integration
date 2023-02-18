<template>
  <section class = "section-five">
    <div class = "container">
      <div class = "contact-top">
        <h3>CONTACT ME</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nobis.</p>
      </div>

      <div class = "contact-middle">
        <div>
                        <span class = "contact-icon">
                            <i class = "fas fa-map-signs"></i>
                        </span>
          <span>Address</span>
          <p>Main Street - 3456, California 0000</p>
        </div>

        <div>
                        <span class = "contact-icon">
                            <i class = "fas fa-phone"></i>
                        </span>
          <span>Contact Number</span>
          <p>4567 3485 2902</p>
        </div>

        <div>
                        <span class = "contact-icon">
                            <i class = "fas fa-paper-plane"></i>
                        </span>
          <span>Email Address</span>
          <p>info@gmail.com</p>
        </div>

        <div>
                        <span class = "contact-icon">
                            <i class = "fas fa-globe"></i>
                        </span>
          <span>Website</span>
          <p>www.sarahlab.com</p>
        </div>
      </div>

      <div class = "contact-bottom">
        <KeepAlive >
        <ValidationObserver v-slot="{ invalid }">
        <form class = "form" v-on:submit.prevent="onSubmit()" method="POST">
          <ValidationProvider name="name" rules="required|minmax:3,50" v-slot="{ errors }">
            <input v-model="formData.name" required="required" type = "text" placeholder="Your Name">
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
            <input v-model="formData.email" required="required" type = "email" placeholder="Your Email">
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider name="name" rules="required|minmax:3,50" v-slot="{ errors }">
          <input v-model="formData.subject" required="required" type = "text" placeholder="Subject">
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>
           <ValidationProvider name="name" rules="required|minmax:10,3000" v-slot="{ errors }">
          <textarea v-model="formData.message" required="required" rows = "9" placeholder="Message"></textarea>
             <span class="error">{{ errors[0] }}</span>
           </ValidationProvider>
          <br />
          <div class="success" v-if="isSuccess">I received your submission!</div>
          <input type = "submit" :disabled="invalid" class = "btn" value = "Send Message">
        </form>
        </ValidationObserver>
        </KeepAlive>
        <!-- Map -->
        <div>
          <yandex-map v-if="showMap" :coords="[59.939099, 30.315877]" :zoom=10.5> </yandex-map>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { yandexMap, loadYmap } from 'vue-yandex-maps';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import axios from 'axios';

export default {
  name: "ContactPage",
  components: { yandexMap, ValidationProvider, ValidationObserver },
  data() {
    return {
      showMap: false,
      isSuccess: false,
      title: 'Contact',
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  async mounted() {
    await loadYmap({});
    let ymaps = window.ymaps;
    this.showMap = true
  },
  methods: {
    onSubmit() {
      // console.log(this.$config.backendUrl);
      axios.post(this.$config.backendUrl + "/post", this.formData, {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }).then(response => {
        this.isSuccess = response.data === 'Success';
        if (this.isSuccess) {
          this.formData = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
        }
      });
      // console.log(2);
      // this.$axios.$post('/api/post', this.formData).then(response => {
      //   this.isSuccess = response === 'Success';
      //   if (this.isSuccess) {
      //     this.formData = {
      //       name: '',
      //       email: '',
      //       subject: '',
      //       message: ''
      //     };
      //   }
      // });
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'Contacts page',
          name: 'Contacts page',
          content: 'My contacts',
        }
      ]
    }
  }
};
</script>

<style>
.error {
  color: #c12f2f;
}
</style>
