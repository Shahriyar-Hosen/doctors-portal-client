import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const ForgotPass = ({ setForgot }) => {
  const [sendPasswordResetEmail, sending, resetEmailError] =
    useSendPasswordResetEmail(auth);

  const resetPassword = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    toast.success("Sent Reset Email Successfully");
    setForgot(false);
  };
  return (
    <div>
      <input type="checkbox" id="forgot-password" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="forgot-password"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {sending ? (
            <progress className="progress w-full mt-8"></progress>
          ) : (
            <>
              <h3 className="font-bold text-lg">
                Please provide your email address!
              </h3>
              <form onSubmit={resetPassword}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered input-primary w-full  my-5"
                />
                <br />
                <button
                  type="submit"
                  className="btn btn-primary block mx-auto text-white text-lg"
                >
                  Rest Password
                </button>
              </form>
            </>
          )}

          <div className="modal-action">
            {resetEmailError && <p>{resetEmailError?.message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
