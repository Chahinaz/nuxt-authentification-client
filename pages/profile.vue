<template >
  <div class="ui container margin-top">
    <div class="ui items">
      <div class="ui item">

        <div class="ui medium image margin-bot text-left"> {{profile.image}} </div>

        <div class="content text-left margin-top">
        <h2 class="ui blue header margin-top">
          {{ profile.firstName }} {{ profile.lastName }}
        </h2>
        <div class="meta">
          <h5 class="ui header">Description:</h5>
        </div>
        <div class="description margin-top">
          <p>{{ profile.bio }}</p>
        </div>

        <div class="text-right">
          <sui-button @click.native="toggle">Edit Profile</sui-button>

          <sui-modal class="edit-modal" v-model="open">
            <sui-modal-header> ON EDIT ... </sui-modal-header>
            <Notification class="error" :message="error" v-if="error"></Notification>

            <sui-modal-content image>
              <div class="text-centred">
                <img class="img-position" :src="this.selectedImage">
                <input class="input-file" type="file" name="file" id="file" @change="uploadImage" accept="image/*">
                <label class="text-centred" for="file" style="cursor: pointer;"><i class="edit icon edit-icon"></i></label>
              </div>

              <sui-form style="margin-left: 1rem !important;">
                <sui-modal-content>
                  <sui-container style="margin: 0 !important;" text>
                  <sui-form-field>
                  <sui-header class="tiny header">FirstName</sui-header>
                  <sui-input class="input-width" v-model="getProfile.firstName" ></sui-input>
                  </sui-form-field>

                  <sui-form-field>
                  <sui-header class="tiny header">LastName</sui-header>
                  <sui-input class="input-width" v-model="this.lastName"></sui-input>
                  </sui-form-field>
                    <sui-form-field>
                      <sui-header class="tiny header">Description</sui-header>
                      <textarea class="input-width" v-model="this.bio"></textarea>
                    </sui-form-field>
                  </sui-container>

                </sui-modal-content>
              </sui-form>

            </sui-modal-content>

            <sui-modal-actions>
              <sui-button positive @click.native="save"> Save </sui-button>
              <sui-button basic color="red" @click.native="toggle">Cancel</sui-button>
            </sui-modal-actions>
          </sui-modal>

          <a class="ui red basic floated button margin-top" @click.native="deleteUser"> Delete </a>
        </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Notification from "../components/Notification.vue"
  import {mapMutations, mapGetters} from "vuex"


  export default {
    name: "Profile",
    middleware: 'auth',
    components: { Notification },
    computed: {
      ...mapMutations('profile', ['setProfile']),
      ...mapGetters('profile', ['getProfile'])
    },
    created (){
      this.profile = Object.assign({}, this.$store.getters.getProfile);
    },
    data() {
      return {
        profile: {},
        selectedImage: '',
        open: false,
        error: null
      }
    },
    methods: {
      toggle() {
        this.open = !this.open
      },

      uploadImage: function(){
        const _this = this;

        const file = document
          .querySelector('input[type=file]')
          .files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
          _this.selectedImage = e.target.result
        };
        reader.onerror = function(error) {
          this.error = error;
        };
        reader.readAsDataURL(file);
      },

      async save() {
        await this.$axios.put('profile', {
          firstName: this.firstName,
          lastName: this.lastName,
          image: this.selectedImage,
          bio: this.bio
        })
          .then(response => {
            console.log("response ===", response);
          })
          .catch(e => this.error = e)
      }
    }
  }
</script>

<style scoped>
  .input-width {
    width: 35rem !important;
  }

  .edit-modal {
    display: inline-flex !important;
  }

  .input-file {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .img-position {
    margin-bottom: 2rem !important;
    display: inline !important;
    height: 10rem ;
    width: 10rem ;
  }

  .error {
    text-align: center !important;
    margin: 0 12rem 0 12rem  !important;
  }

  .edit-icon {
    text-align: right !important;
    margin: 0 4rem 0 4rem ;
    padding-right: 1.6rem ;
  }

</style>
