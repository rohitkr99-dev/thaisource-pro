import { redirect } from "next/navigation";

export default function DashboardPage() {
  // In a real app, we would check the user's role from the session
  // For now, we'll default to buyer
  redirect("/dashboard/buyer");
}
