import { useState } from "react";

// Mock data — replace with GET /api/user/notifications/preferences
const mockPreferences = {
  emailNotifications: true,
  smsNotifications: false,
  propertyUpdates: true,
  paymentAlerts: true,
  promotions: false,
  newsletter: false,
};

function ToggleRow({ label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-neutral-100 last:border-0">
      <div>
        <p className="text-sm font-medium">{label}</p>
        {description && (
          <p className="text-xs text-neutral-500 mt-0.5">{description}</p>
        )}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
          checked ? "bg-green-500" : "bg-neutral-200"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform transition-transform duration-200 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

function NotificationTab() {
  const [prefs, setPrefs] = useState(mockPreferences);
  const [isLoading, setIsLoading] = useState(false);

  const toggle = (key) =>
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // TODO: replace with real API call
      // await api.put("/api/user/notifications/preferences", prefs);
      await new Promise((r) => setTimeout(r, 800));
      alert("Notification preferences saved.");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Notifications</h2>
        <p className="text-sm text-neutral-500 mt-1">
          Manage how and when you receive notifications.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 space-y-1">
        <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">
          Channels
        </p>
        <ToggleRow
          label="Email Notifications"
          description="Receive updates via your registered email address"
          checked={prefs.emailNotifications}
          onChange={() => toggle("emailNotifications")}
        />
        <ToggleRow
          label="SMS Notifications"
          description="Receive alerts via text message"
          checked={prefs.smsNotifications}
          onChange={() => toggle("smsNotifications")}
        />
      </div>

      <div className="bg-white rounded-xl p-6 space-y-1">
        <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">
          Activity
        </p>
        <ToggleRow
          label="Property Updates"
          description="Get notified about changes to your properties"
          checked={prefs.propertyUpdates}
          onChange={() => toggle("propertyUpdates")}
        />
        <ToggleRow
          label="Payment Alerts"
          description="Receive alerts for payments and transactions"
          checked={prefs.paymentAlerts}
          onChange={() => toggle("paymentAlerts")}
        />
        <ToggleRow
          label="Promotions"
          description="Hear about new offers and deals"
          checked={prefs.promotions}
          onChange={() => toggle("promotions")}
        />
        <ToggleRow
          label="Newsletter"
          description="Weekly digest of property market news"
          checked={prefs.newsletter}
          onChange={() => toggle("newsletter")}
        />
      </div>

      <div className="flex justify-center pt-2">
        <button
          onClick={handleSave}
          disabled={isLoading}
          className="bg-primary-400 text-primary-900 font-medium px-16 py-3 rounded-md hover:bg-primary-500 transition-colors disabled:opacity-60 cursor-pointer"
        >
          {isLoading ? "Saving..." : "Save Preferences"}
        </button>
      </div>
    </div>
  );
}

export default NotificationTab;
