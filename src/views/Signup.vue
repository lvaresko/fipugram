<template>
  <div class="signup pt-3">
    <h1>This is a signup page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label form="exampleInputNumberEmail">Mobile number or email</label>
              <input
                type="text"
                v-model="number_email"
                class="form-control"
                id="exampleInputNumberEmail"
                aria-describedby="numberEmailHelp"
                placeholder="Enter mobile number or email"
              />
            </div>
            <!--
            <div class="form-group">
              <label form="exampleInputUsername">Username</label>
              <input
                type="text"
                v-model="username"
                class="form-control"
                id="emaxpleInputUsername"
                placeholder="Enter username"
              />
            </div>
            -->
            <div class="form-group">
              <label form="exampleInputPassword1">Password</label>
              <input
                type="password"
                v-model="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
              <small id="password" class="form-text text-muted">
                Your password should be at least 6 characters long.
              </small>
              <div class="form-group">
                <label form="exampleInputPassword2">Repeat password</label>
                <input
                  type="password"
                  v-model="passwordRepeat"
                  class="form-control"
                  id="exampleInputpassword2"
                  placeholder="Password"
                />
              </div>
            </div>
            <button type="button" @click="signup" class="btn btn-primary">
              Next
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from "@/firebase";

export default {
  name: "Signup",
  data() {
    return {
      number_email: "",
      //username: '',
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.number_email, this.password)
        .then(function() {
          console.log("Uspješna registracija");
        })
        .catch(function(error) {
          console.error("Došlo je do pogreške", error);
        });
      console.log("Nastavak");
    },
  },
};
</script>
