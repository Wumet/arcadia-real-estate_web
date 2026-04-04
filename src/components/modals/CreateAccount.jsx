import Modal from "./Modal";

function CreateAccount({ isOpen, onClose }) {
  return (
    <>
      <title>Create Account</title>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Create Account"
        subtitle="Input details to create account"
      >
        <form></form>
      </Modal>
    </>
  );
}

export default CreateAccount;
