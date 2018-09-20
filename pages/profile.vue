<template >
  <div class="ui container margin-top">
    <div class="ui items">
      <div class="ui item">

        <div class="ui medium image margin-bot text-left" v-if="user.profile.image === '' || user.profile.image.isUndefined">
          <img src="~/static/images/defaultProfilePicture.png">
        </div>
        <div class="ui medium image margin-bot text-left" v-else> {{user.profile.image}} </div>

        <div class="content text-left margin-top">
        <h2 class="ui blue header margin-top">
          {{ user.profile.firstName }} {{ user.profile.lastName }}
        </h2>
        <div class="meta">
          <h5 class="ui header">Description:</h5>
        </div>
        <div class="description margin-top">
          <p>{{ user.profile.bio }}</p>
        </div>

        <div class="text-right">
          <sui-button @click.native="toggle">Edit Profile</sui-button>

          <sui-modal v-model="open">
            <sui-modal-header> ON EDIT ... </sui-modal-header>
            <Notification class="error" :message="error" v-if="error"></Notification>


            <sui-modal-content image>
              <div class="text-centred padding-right">
                <img class="img-position" height="42" width="42" :src="this.selectedImage">
                <!--<sui-image class="img-position" height="42" width="42" :src="this.selectedImage"></sui-image>-->
                <input class="input-file" type="file" name="file" id="file" @change="onFileSelected">
                <label for="file" style="cursor: pointer;"><i class="edit icon edit-icon"></i></label>
              </div>

              <sui-form>
                <sui-modal-content>
                  <sui-form-field>
                  <sui-header class="tiny header">FirstName</sui-header>
                  <sui-input v-model="user.profile.firstName"></sui-input>
                  </sui-form-field>

                  <sui-form-field>
                  <sui-header class="tiny header">LastName</sui-header>
                  <sui-input v-model="user.profile.lastName"></sui-input>
                  </sui-form-field>
                  <sui-container text>
                    <sui-form-field>
                      <sui-header class="tiny header">Description</sui-header>
                      <textarea v-model="user.profile.bio"></textarea>
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

  export default {
    name: "Profile",
    components: {
      Notification
    },
    data() {
      return {
        firstName: '',
        lastName: '',
        bio: '',
        selectedImage: 'http://localhost:3000/_nuxt/img/defaultProfilePicture.319d0ad.png',
        open: false,
        error: null
      }
    },
    middleware: 'auth',
    computed : {
      user() {
        return this.$store.getters.getLoggedUser
      }
    },
    methods: {
      toggle() {
        this.open = !this.open
      },

      onFileSelected(event) {
        const maybeImage = event.target.files[0];

        if(maybeImage.type !== "image/jpeg"){
          if (maybeImage.type !== "image/png") {
            this.error = "Incompatible type. Please select an other profile picture.";
          }
        }

        function getBase64(file) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function () {
            return reader.result
          };
          reader.onerror = function (error) {
            this.error = error;
          };
        }

        this.selectedImage = getBase64(maybeImage);

        console.log("Selected Image: \n", getBase64(maybeImage));
      }
    }
  }
</script>

<style scoped>
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
    margin: 0 4rem 0 4rem ;
    padding-right: 1.6rem ;
  }
</style>
