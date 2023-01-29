<!-- Please remove this file from your project -->
<template>
  <div class="rsvp">
    <form @submit.prevent="handleSubmit">
      <fieldset>
    <legend class="legend">Will you be coming to the wedding?</legend>
    <div class="flex-wrap space-y-2 md:space-y-0 md:space-x-2 md:flex">
      <label for="yes">
        <span class="flex flex-col items-center justify-center">
          <span>Yes</span>
          <input type="radio" v-model="form.coming" name="curry" id="yes" value="yes" />
        </span>
      </label>
      <label for="no">
        <span class="flex flex-col items-center justify-center">
          <span>No</span>
          <input type="radio"  v-model="form.coming" name="curry" id="no" value="no" />
        </span>
      </label>
    </div>
  </fieldset>
      <fieldset> <legend class="legend">Name</legend><input v-model="form.name" class="input--text" type="text" name="name" placeholder="Enter name" required></input></fieldset>
      <fieldset> <legend class="legend">Email</legend><input v-model="form.email" class="input--text" type="email" name="email" placeholder="Enter email" required></input></fieldset>
      <fieldset> <legend class="legend">Telephone</legend><input v-model="form.tel" class="input--text" type="tel" name="tel" placeholder="Enter telephone" required></input></fieldset>
   
    <fieldset><legend class="legend">Any dietary requirements</legend><textarea v-model="form.message" class="input--area" placeholder="Any dietary requirements" name="message"></textarea></fieldset>
   
    <button type="submit" class="button">Send</button>
  </form>
  </div>
 
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Rsvp',
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      handleSubmit: async function() {
        const formData = new FormData();

        for (let [key, value] of Object.entries(this.form)) {
          formData.append(key, value);
        }

        await axios
          .post("https://formeezy.com/api/v1/forms/63b03a9894eaba0008113531/submissions", formData)
          .then(({ data }) => {
            const { redirect } = data;
            // Redirect used for reCAPTCHA and/or thank you page
            window.location.href = redirect;
          })
          .catch((e) => {
            window.location.href = e.response.data.redirect;
          });
      }
    }
  };
</script>

<style scoped>
.rsvp {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
}

.button {
  background-color: #efd6af; /* Green */
  border: none;
  color: #000000;
  padding: 15px 32px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  font-family: 'Rig-Face';
}

fieldset {
  border: 0;
  margin: 0 0 20px 0;;
  padding: 0;
}

.input--text, .input--area {
  font-family: 'Rig-Face';
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  box-sizing: border-box;
  font-size: 13px;
}
.legend {
  margin: 0 0 5px 0;
  padding: 0;
}

</style>
