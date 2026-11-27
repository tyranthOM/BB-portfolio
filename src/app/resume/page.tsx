import { Metadata } from "next";
import { ResumeClient } from "@/components/resume/ResumeClient";

export const metadata: Metadata = {
  title: "Resume & Credentials — Om Bhalerao",
  description: "Academic history, technical leadership, and engineering experience of Om Bhalerao.",
};

export default function ResumePage() {
  return <ResumeClient />;
}
