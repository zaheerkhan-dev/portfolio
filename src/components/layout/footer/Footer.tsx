"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t border-white/10 bg-black/20 backdrop-blur-sm mt-auto">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center py-8 gap-4">
          
          {/* Left: Copyright Only */}
          <div className="text-xs font-mono text-gray-600">
            <span>© {currentYear} Zak.dev</span>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-6">
            <SocialLink href="#" icon={<Github size={16} />} label="GitHub" />
            <SocialLink href="#" icon={<Twitter size={16} />} label="Twitter" />
            <SocialLink href="#" icon={<Linkedin size={16} />} label="LinkedIn" />
            <SocialLink href="mailto:hello@zak.dev" icon={<Mail size={16} />} label="Email" />
          </div>

        </div>
      </Container>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      className="text-gray-500 hover:text-white transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
}