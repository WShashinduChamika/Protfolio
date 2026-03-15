import { Github, Linkedin } from "lucide-react";
import { SiHackerrank, SiWhatsapp } from "react-icons/si";

const WHATSAPP_NUMBER = "94740288198";
const WHATSAPP_MESSAGE = "Hi Shashindu, I saw your portfolio and would like to connect.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const socialLinks = [
  { icon: Github, href: "https://github.com/WShashinduChamika", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shashindu-chamika-a5517330a/",
    label: "LinkedIn",
  },
  {
    icon: SiHackerrank,
    href: "https://www.hackerrank.com/profile/shashinduchamik2",
    label: "HackerRank",
  },
  { icon: SiWhatsapp, href: WHATSAPP_URL, label: "WhatsApp" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              SC<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Pedro Machado. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
