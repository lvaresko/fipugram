<template>
  <div class="signup">
    <h1>This is a signup page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="numberEmailHelp"
                aria-describedby="numberEmailHelp"
                placeholder="Mobile Number or Email"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="fullName"
                placeholder="Full Name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="password"
                aria-describedby="passwordlHelp"
                placeholder="Password"
              />
              <small id="password" class="form-text text-muted"> 
               Your password should be at least 8 characters long.
              </small>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
