cd ~/portfolio && cat > app/layout.tsx <<'EOF'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peter Madueke | Cloud & DevOps Engineer",
  description:
    "Portfolio of Peter Madueke, a Cloud & DevOps Engineer building cloud infrastructure, production applications, containerized systems and CI/CD pipelines with AWS, Terraform and modern cloud technologies.",
  keywords: [
    "Peter Madueke",
    "Cloud Engineer",
    "DevOps Engineer",
    "AWS",
    "Terraform",
    "Docker",
    "CI/CD",
    "ECS",
    "Fargate",
    "Cloud Infrastructure",
  ],
  authors: [{ name: "Peter Madueke" }],
  creator: "Peter Madueke",
  openGraph: {
    title: "Peter Madueke | Cloud & DevOps Engineer",
    description:
      "Cloud & DevOps Engineer building cloud infrastructure, production applications and automated deployment pipelines.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
EOF
