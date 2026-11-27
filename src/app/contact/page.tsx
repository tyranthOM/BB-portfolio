import { Metadata } from "next";
import { ContactClient } from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact & Coordinates — Om Bhalerao",
  description: "Direct email and message dispatch to Om Bhalerao.",
};

export default function ContactPage() {
  return <ContactClient />;
}
