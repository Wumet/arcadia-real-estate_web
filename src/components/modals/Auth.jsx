import Input from "../Input";
import Modal from "../Modal";

function LogIn({ isOpen, onClose, type }) {
  return (
    <>
      <title>Login</title>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={type === "login" ? "Welcome Back!" : "Create Account"}
        subtitle={
          type === "login"
            ? "Input details to access dashboard"
            : "Input details to create account"
        }
      >
        <form>
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder="+23487598498"
          />
          <Input
            type="password"
            name="phone"
            id="phone"
            placeholder="+23487598498"
          />
        </form>
      </Modal>
    </>
  );
}

export default LogIn;
