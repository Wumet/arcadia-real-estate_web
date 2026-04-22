import { useState } from "react";
import Input from "@/components/Input";
import { Eye, EyeOff } from "lucide-react";

const initialForm = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

function PasswordInput({ label, htmlFor, id, name, value, onChange, placeholder }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <label htmlFor={htmlFor} className="pl-2 opacity-70 font-medium text-sm">
        {label}
      </label>
      <div className="relative mt-2">
        <input
          id={id}
          name={name}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-neutral-100 rounded-md p-3 lg:p-4 h-fit w-full focus:outline-none focus:border-[0.5px] focus:border-primary-700 pr-12"
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}

function SecurityTab() {
  const [form, setForm] = useState(initialForm);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      setError("New passwords do not match.");
      return;
    }
    if (form.newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    setIsLoading(true);
    try {
      // TODO: replace with real API call
      // await api.put("/api/user/security/change-password", {
      //   currentPassword: form.currentPassword,
      //   newPassword: form.newPassword,
      // });
      await new Promise((r) => setTimeout(r, 1000));
      alert("Password updated successfully.");
      setForm(initialForm);
    } catch (err) {
      setError("Failed to update password. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Security</h2>
        <p className="text-sm text-neutral-500 mt-1">
          Manage your password and account security.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 space-y-5">
        <div>
          <h3 className="font-semibold text-base">Change Password</h3>
          <p className="text-xs text-neutral-500 mt-0.5">
            Choose a strong password you don't use elsewhere.
          </p>
        </div>

        <PasswordInput
          label="Current Password"
          htmlFor="currentPassword"
          id="currentPassword"
          name="currentPassword"
          placeholder="Enter current password"
          value={form.currentPassword}
          onChange={handleChange}
        />
        <PasswordInput
          label="New Password"
          htmlFor="newPassword"
          id="newPassword"
          name="newPassword"
          placeholder="Enter new password"
          value={form.newPassword}
          onChange={handleChange}
        />
        <PasswordInput
          label="Confirm New Password"
          htmlFor="confirmPassword"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Re-enter new password"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        {error && <p className="text-sm text-red-500">{error}</p>}

        {/* Password strength hint */}
        {form.newPassword && (
          <ul className="text-xs text-neutral-500 space-y-1 pl-2">
            <li className={form.newPassword.length >= 8 ? "text-green-600" : ""}>
              {form.newPassword.length >= 8 ? "✓" : "•"} At least 8 characters
            </li>
            <li className={/[A-Z]/.test(form.newPassword) ? "text-green-600" : ""}>
              {/[A-Z]/.test(form.newPassword) ? "✓" : "•"} One uppercase letter
            </li>
            <li className={/[0-9]/.test(form.newPassword) ? "text-green-600" : ""}>
              {/[0-9]/.test(form.newPassword) ? "✓" : "•"} One number
            </li>
          </ul>
        )}
      </div>

      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary-400 text-primary-900 font-medium px-16 py-3 rounded-md hover:bg-primary-500 transition-colors disabled:opacity-60 cursor-pointer"
        >
          {isLoading ? "Updating..." : "Update Password"}
        </button>
      </div>
    </form>
  );
}

export default SecurityTab;
