import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Youtube,
  Linkedin,
} from "lucide-react";
import IeeeAiubSbTextArt from "@/components/IeeeAiubSbTextArt";

// Define TypeScript interfaces for our navigation items
interface NavigationItem {
  name: string;
  href: string;
}

interface SocialNavigationItem extends NavigationItem {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface NavigationData {
  main: NavigationItem[];
  social: SocialNavigationItem[];
}

// Our navigation data
const navigation: NavigationData = {
  main: [
    {
      name: "IEEE SPAX Events",
      href: "https://students.ieee.org/student-opportunities/professional-awareness/spax-events/",
    },
    {
      name: "IEEE SPAX Blog",
      href: "https://students.ieee.org/student-opportunities/professional-awareness/spax-history/",
    },
    { name: "IEEE", href: "https://www.ieee.org/" },
    { name: "IEEE R10", href: "https://www.ieeer10.org/" },
    { name: "IEEE BDS", href: "https://www.ieeebd.com/" },
    { name: "IEEE AIUB SB", href: "https://www.ieeeaiubsb.com/" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/IEEEAIUBStudentBranch",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ieeeaiubsb/",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/IEEE_AIUB_SB",
      icon: Twitter,
    },
    {
      name: "Email",
      href: "mailto:ieeeaiubstudentbranch@gmail.com",
      icon: Mail,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCk3nnCN-bKUoTTa0pgXhEVg",
      icon: Youtube,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
};

// Footer component
export default function Footer() {
  return (
    <footer className="bg-[#41076c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and About Section */}
          <div className="space-y-6">
            <div className="flex justify-center md:justify-start">
              <IeeeAiubSbTextArt />
            </div>
            <p className="text-sm text-white leading-6 text-justify md:pr-24">
              IEEE American International University-Bangladesh (AIUB) Student
              Branch was established in Dhaka, Bangladesh and is registered
              under the Institute of Electrical and Electronics Engineers (IEEE)
              in Piscataway, New Jersey, USA.
            </p>
          </div>

          {/* Links and Social Media Section */}
          <div className="space-y-8">
            {/* Quick Links Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center md:text-left">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-3">
                  {navigation.main
                    .slice(0, Math.ceil(navigation.main.length / 2))
                    .map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm hover:text-black transition duration-150"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                </ul>
                <ul className="space-y-3">
                  {navigation.main
                    .slice(Math.ceil(navigation.main.length / 2))
                    .map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm hover:text-black transition duration-150"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Contact & Social Media Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-center md:text-left">
                Connect With Us
              </h3>
              <div className="flex justify-center md:justify-start space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:text-black transition duration-150"
                    aria-label={item.name}
                  >
                    <item.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-fuchsia-700">
          <p className="text-xs text-center">
            © Copyright IEEE AIUB Student Branch | All Rights Reserved |
            Designed and Developed by Webmaster IEEE AIUB Student Branch.
          </p>
        </div>
      </div>
    </footer>
  );
}
