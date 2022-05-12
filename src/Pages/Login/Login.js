import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title text-2xl font-bold text-accent">Login</h2>

          <div class="divider">OR</div>
          <button class="btn btn-outline btn-accent w-full">CONTINUE WITH GOOGLE</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
