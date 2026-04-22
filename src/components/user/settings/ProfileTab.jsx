import { useState } from "react";
import { CloudUpload } from "lucide-react";
import Input from "@/components/Input";
import { Button } from "@/components/ui/button";

// Mock initial profile data — replace with API call e.g. GET /api/user/profile
const mockProfile = {
  fullName: "",
  dob: "",
  phone: "",
  address: "",
  govIdFile: null,
  nextOfKin: {
    fullName: "",
    relationship: "",
    phone: "",
    address: "",
  },
  sourceOfFunds: "",
  declarationAccepted: false,
};

const FUND_SOURCES = [
  { id: "salary", label: "Salary / Wages" },
  { id: "business", label: "Business Profits" },
  { id: "inheritance", label: "Inheritance" },
  { id: "savings", label: "Savings / Investments" },
];

function SectionCard({ title, subtitle, children }) {
  return (
    <div className="bg-white rounded-xl p-6 space-y-5">
      <div>
        <h3 className="font-semibold text-base">{title}</h3>
        {subtitle && (
          <p className="text-xs text-neutral-500 mt-0.5">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
}

function ProfileTab() {
  const [form, setForm] = useState(mockProfile);
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleKinChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      nextOfKin: { ...prev.nextOfKin, [name]: value },
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setForm((prev) => ({ ...prev, govIdFile: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.declarationAccepted) {
      alert("You must accept the mandatory declaration.");
      return;
    }
    setIsLoading(true);
    try {
      // TODO: replace with real API call
      // const formData = new FormData();
      // formData.append("fullName", form.fullName);
      // ... append all fields
      // formData.append("govId", form.govIdFile);
      // await api.post("/api/user/profile/verify", formData);
      await new Promise((r) => setTimeout(r, 1200)); // mock delay
      alert("Profile submitted for verification.");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold">Profile Verification</h2>
        <p className="text-sm text-neutral-500 mt-1">
          Please provide the mandatory information to verify your account.
        </p>
      </div>

      {/* Identity Verification */}
      <SectionCard
        title="Identity Verification"
        subtitle="Please ensure the details match your government-issued ID ⓘ"
      >
        <Input
          label="Full Legal Name"
          htmlFor="fullName"
          id="fullName"
          name="fullName"
          type="text"
          placeholder="As it appears on your passport"
          value={form.fullName}
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Date of Birth"
            htmlFor="dob"
            id="dob"
            name="dob"
            type="text"
            placeholder="mm/dd/yyyy"
            value={form.dob}
            onChange={handleChange}
          />
          <Input
            label="Phone Number"
            htmlFor="phone"
            id="phone"
            name="phone"
            type="tel"
            placeholder=""
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-3">
        
           <Input
          label="Residential Address"
          htmlFor="address"
          id="address"
          name="address"
          type="text"
           placeholder="Street name, apartment, suite, etc."
         value={form.address}
          onChange={handleChange}
        />
        </div>

        {/* File Upload */}
        <div>
          <label className="pl-2 opacity-70 font-medium text-sm block mb-2">
            Government-Issued ID ⓘ
          </label>
          <label
            htmlFor="govId"
            className="flex flex-col items-center justify-center gap-2 border border-dashed border-neutral-300 rounded-xl p-8 cursor-pointer hover:bg-neutral-50 transition-colors"
          >
            <CloudUpload className="text-accent size-8" />
            <span className="text-sm font-medium">
              {fileName || "Click to upload"}
            </span>
            <span className="text-xs text-neutral-400">
              JPG, PNG, or PDF (Max 5MB)
            </span>
            <input
              id="govId"
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </SectionCard>

      {/* Next of Kin */}
      <SectionCard title="Next of Kin">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Full Legal Name"
            htmlFor="kinFullName"
            id="kinFullName"
            name="fullName"
            type="text"
            placeholder=""
            value={form.nextOfKin.fullName}
            onChange={handleKinChange}
          />
          <Input
            label="Relationship"
            htmlFor="kinRelationship"
            id="kinRelationship"
            name="relationship"
            type="text"
            placeholder=""
            value={form.nextOfKin.relationship}
            onChange={handleKinChange}
          />
        </div>
        <Input
          label="Phone Number"
          htmlFor="kinPhone"
          id="kinPhone"
          name="phone"
          type="tel"
          placeholder=""
          value={form.nextOfKin.phone}
          onChange={handleKinChange}
        />
        <Input
          label="Residential Address"
          htmlFor="kinAddress"
          id="kinAddress"
          name="address"
          type="text"
          placeholder="Next of kin home address"
          value={form.nextOfKin.address}
          onChange={handleKinChange}
        />
      </SectionCard>

      {/* Source of Funds */}
      <SectionCard
        title="Source of Funds"
        subtitle="Select your primary source of funds:"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {FUND_SOURCES.map((source) => (
            <label
              key={source.id}
              className="flex items-center gap-3 border border-neutral-200 rounded-lg px-4 py-3 cursor-pointer hover:border-accent transition-colors"
            >
              <input
                type="radio"
                name="sourceOfFunds"
                value={source.id}
                checked={form.sourceOfFunds === source.id}
                onChange={handleChange}
                className="accent-accent"
              />
              <span className="text-sm">{source.label}</span>
            </label>
          ))}
        </div>

        {/* Mandatory Declaration */}
        <div className="border border-neutral-200 rounded-lg p-4 space-y-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.declarationAccepted}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  declarationAccepted: e.target.checked,
                }))
              }
              className="mt-1 accent-accent"
            />
            <div>
              <p className="text-sm font-medium">Mandatory Declaration</p>
              <p className="text-xs text-neutral-500 mt-1">
                I hereby declare that the funds used for any transactions are
                from legitimate sources and that all information provided is
                true and accurate to the best of my knowledge.
              </p>
              {!form.declarationAccepted && (
                <p className="text-xs text-accent mt-1">
                  You must agree with the declaration to continue.
                </p>
              )}
            </div>
          </label>
        </div>
      </SectionCard>

      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary-400 text-primary-900 font-medium px-16 py-3 rounded-md hover:bg-primary-500 transition-colors disabled:opacity-60 cursor-pointer"
        >
          {isLoading ? "Submitting..." : "Verify Profile"}
        </button>
      </div>
    </form>
  );
}

export default ProfileTab;
