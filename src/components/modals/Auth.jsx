import Input from "../Input";
import Modal from "./Modal";
import Button from "../Button";

function Auth({ isOpen, onClose, type, setType }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        type === "login" ? "Welcome Back!" : "Sign Up to purchase property"
      }
      subtitle={
        type === "login"
          ? "Input details to access your dashboard"
          : "Input details to signup"
      }
    >
      <form className="space-y-8">
        <div className="space-y-4">
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            label="Phone Number"
            htmlFor="phone"
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            label="Password"
            htmlFor="password"
          />
          {type === "create" && (
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              label="Comfirm Password"
              htmlFor="confirmPassword"
            />
          )}
        </div>

        <Button
          label={type === "login" ? "Login" : "Create Account"}
          size="lg"
          type="submit"
          extraClass="max-lg:w-full! sm:py-[14px]! sm:h-fit!"
        />
      </form>
      <p className="text-sm mt-8 flex gap-1 justify-center">
        {type === "login" ? (
          <>
            Don't have an account?
            <button
              onClick={() => {
                setType("signup");
              }}
              className="text-accent font-medium max-md:underline md:hover:underline"
            >
              Signup
            </button>
          </>
        ) : (
          <>
            Already have an account?
            <button
              onClick={() => setType("login")}
              className="text-accent font-medium max-md:underline md:hover:underline"
            >
              Login
            </button>
          </>
        )}
      </p>
    </Modal>
  );
}

export default Auth;
