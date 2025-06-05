import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SecuritySettings({ darkMode }) {
  const [mobileAppEnabled, setMobileAppEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [authenticatorEnabled, setAuthenticatorEnabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div
      className={`border rounded-lg pl-3 [@media(min-width:1107px)]:pr-[100px] pr-3 pt-2 pb-6 ${
        darkMode ? "border-white" : "border-[#555555]"
      }`}
    >
      <h2 className="md:text-2xl text-xl mb-4">Password and security</h2>

      {/* Password Section */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
        <div>
          <p className="font-[400]">Elevance password</p>
          <p>You’ve set an Upwork password.</p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="mt-2 px-4 py-2 border border-red-500 text-red-500 rounded-md w-full sm:w-auto"
        >
          Change Password
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-xl relative text-[#333333]">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-3 text-gray-600 text-2xl font-bold"
              >
                &times;
              </button>

              <h2 className="text-xl font-[400] mb-1">Change Password</h2>
              <p className="text-sm mb-4">
                You’ll need to log in again on all devices after changing your
                password.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">
                    Enter Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#E66D3D]"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm mb-1">
                    Enter New Password
                  </label>
                  <input
                    type={showNewPassword ? "text" : "password"}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#E66D3D]"
                  />
                  <span
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-[38px] cursor-pointer text-[#333333]"
                  >
                    {showNewPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </span>
                </div>

                <div className="relative">
                  <label className="block text-sm mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#E66D3D]"
                  />
                  <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-[38px] cursor-pointer text-[#333333]"
                  >
                    {showConfirmPassword ? (
                      <Eye size={18} />
                    ) : (
                      <EyeOff size={18} />
                    )}
                  </span>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-sm border border-[#E66D3D] font-[700] rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm bg-[#E66D3D] text-white rounded font-[700]"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Google Login */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
        <div>
          <p className="font-[400]">Log in with Google</p>
          <p>
            You’ve set up login with your Google account (a******ar@gmail.com).
          </p>
        </div>
        <button className="mt-2 px-10 py-2 border border-red-500 text-red-500 rounded-md w-full sm:w-auto">
          Disconnect
        </button>
      </div>

      {/* Apple Login */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-center">
        <div>
          <p className="font-[400]">Log in with Apple</p>
          <p>Not connected. You can choose to log in with Apple.</p>
        </div>
        <button className="mt-2 px-[50px] py-[8px] border border-red-500 text-red-500 rounded-md w-full sm:w-auto">
          Connect
        </button>
      </div>

      {/* Two-Step Verification */}
      <h3 className="text-xl font-semibold mt-8 mb-4">Two-step verification</h3>

      <div className="space-y-4 md:mr-[50px]">
        {[
          {
            label: "Mobile app notifications",
            desc: "Verify notifications with your Upwork mobile app.",
            enabled: mobileAppEnabled,
            toggle: () => setMobileAppEnabled(!mobileAppEnabled),
          },
          {
            label: "SMS text messages",
            desc: "Verify one-time codes sent to your mobile number.",
            enabled: smsEnabled,
            toggle: () => setSmsEnabled(!smsEnabled),
          },
          {
            label: "Authenticator app codes",
            desc: "Verify one-time codes generated in your preferred third-party authenticator app.",
            enabled: authenticatorEnabled,
            toggle: () => setAuthenticatorEnabled(!authenticatorEnabled),
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-row justify-between items-center gap-4 flex-wrap"
          >
            <div className="flex-1 min-w-0">
              <p className="font-[400] text-sm">{item.label}</p>
              <p className="text-sm">{item.desc}</p>
            </div>

            {/* Custom Toggle (iOS/Android friendly) */}
            <label className="relative inline-flex items-center w-11 h-6 cursor-pointer">
              <input
                type="checkbox"
                checked={item.enabled}
                onChange={item.toggle}
                className="sr-only"
              />
              <div
                className={`w-full h-full rounded-full transition-colors duration-300 ${
                  darkMode ? "bg-white" : "bg-[#555555]"
                }`}
              />
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full shadow-md transform transition-all duration-300 ${
                  item.enabled
                    ? "translate-x-[22px] bg-[#E66D3D]"
                    : darkMode
                    ? "bg-[#555555]"
                    : "bg-black"
                }`}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
