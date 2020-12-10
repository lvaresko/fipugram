<template>
  <div class="login">
    <h1>This is a login page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Username"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group form-check">
              
              <input
                type="checkbox"
                class="form-check-input"
                id="loginRemember1"
              />
              <label class="form-check-label" for="loginRemember1">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <!-- YOU DON'T HAVE AN ACCOUNT? SIGN UP -->
            <p class="new-account">
              You don't have an account?
              <a href="/signup"> Sign up </a>
            </p>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
