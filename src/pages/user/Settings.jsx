import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProfileTab from "@/components/user/settings/ProfileTab";
import NotificationTab from "@/components/user/settings/NotificationTab";
import SecurityTab from "@/components/user/settings/SecurityTab";

function Settings() {
  return (
    <div className="space-y-6 pb-16">
      <div>
        <h1 className="text-2xl sm:text-3xl xl:text-4xl font-[510]">Settings</h1>
      </div>

      <Tabs defaultValue="profile" className="mt-4">
        <TabsList
          variant="line"
          className="justify-start border-b border-neutral-200 rounded-none pb-0 h-auto w-fit gap-6 md:gap-10"
        >
          <TabsTrigger
            value="profile"
            className="rounded-none pb-3 px-0 text-base data-active:text-accent data-active:after:bg-accent"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="notification"
            className="rounded-none pb-3 px-0 text-base data-active:text-accent data-active:after:bg-accent"
          >
            Notification
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="rounded-none pb-3 px-0 text-base data-active:text-accent data-active:after:bg-accent"
          >
            Security
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <ProfileTab />
        </TabsContent>
        <TabsContent value="notification" className="mt-6">
          <NotificationTab />
        </TabsContent>
        <TabsContent value="security" className="mt-6">
          <SecurityTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Settings;
