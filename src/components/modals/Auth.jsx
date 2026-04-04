import Input from "../Input";
import Modal from "./Modal";
import Button from "../Button";

function Auth({ isOpen, onClose, type }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={type === "login" ? "Welcome Back!" : "Create Account"}
      subtitle={
        type === "login"
          ? "Input details to access your dashboard"
          : "Input details to create account"
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
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            label="Password"
          />
          {type === "create" && (
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              label="Comfirm Password"
            />
          )}
        </div>

        <Button
          label={type === "login" ? "Login" : "Create Account"}
          size="lg"
          type="submit"
          extraClass="max-lg:w-full! sm:py-4! sm:h-fit!"
        />
      </form>
    </Modal>
  );
}

export default Auth;
