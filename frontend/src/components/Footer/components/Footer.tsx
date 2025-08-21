"use client";

import FooterTop from "./FooterTop";
import { useHydrationSafeTranslation } from "@/hooks/useHydrationSafeTranslation";
import FooterBottom from "./FooterBottom";
import FooterLinks from "./FooterLinks";
import SocialIcons from "./SocialIcons";
import { SocialIcon, FooterLink } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Site-wide footer composed of a top section (subscribe + extras)
 * and a bottom section (navigation links + copyright).
 * Uses Framer Motion for smooth entrance animations and includes
 * social media icons and newsletter subscription functionality.
 */
export default function Footer() {
  const { t, ready } = useHydrationSafeTranslation();

  /**
   * Static configuration for social media icons displayed in the top footer.
   * Each entry is rendered as an <li> inside `SocialIcons`.
   */
  const socialIcons: SocialIcon[] = [
    { src: "/X.png", alt: "X", width: 17, height: 26, href: "#" },
    {
      src: "/fa-facebook-square.png",
      alt: "Facebook",
      width: 11,
      height: 26,
      href: "#",
    },
    {
      src: "/fa-google-plus.png",
      alt: "Google Plus",
      width: 24,
      height: 26,
      href: "#",
    },
  ];

  /**
   * Footer navigation links surfaced in the bottom section.
   * These map to Next.js routes and are rendered by `FooterLinks`.
   */
  const footerLinks: FooterLink[] = [
    { href: "/about-us", label: t("footer.links.about", "About") },
    {
      href: "/our-strategy",
      label: t("footer.links.ourStrategy", "Our Strategy"),
    },
    {
      href: "/our-advantages",
      label: t("footer.links.ourAdvantages", "Our Advantages"),
    },
    {
      href: "/social-responsibility",
      label: t("footer.links.socialResponsibility", "Social Responsibility"),
    },
    {
      href: "/services",
      label: t("footer.links.ourServices", "Our Services"),
    },
  ];

  /**
   * Animation variants for the footer container
   * Provides staggered entrance animation for child components
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  /**
   * Animation variants for individual footer sections
   * Provides smooth entrance animation with upward movement
   */
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.footer
      className="bg-primary mt-6 text-white"
      role="contentinfo"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        {/* Top footer section with social icons */}
        <motion.section
          variants={sectionVariants}
          aria-label="Footer top section"
        >
          <FooterTop>
            <SocialIcons>
              {/* Render icons from a static list; index is acceptable as key since order/size is stable. */}
              {socialIcons.map((icon) => (
                <li key={icon.alt} className="social-icon-item">
                  <a
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={`Visit ${icon.alt}`}
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={icon.width}
                      height={icon.height}
                    />
                  </a>
                </li>
              ))}
            </SocialIcons>
          </FooterTop>
        </motion.section>

        {/* Divider line with animation */}
        <motion.hr
          className=" border-gray-200"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        />

        {/* Bottom footer section with navigation links */}
        <motion.section
          variants={sectionVariants}
          aria-label="Footer bottom section"
        >
          <FooterBottom>
            <nav aria-label={t("footer.socialMedia", "Footer navigation")}>
              <FooterLinks>
                {/* Map configured links to Next.js <Link> components. */}
                {footerLinks.map((link) => (
                  <li
                    key={link.href}
                    onClick={(e) => e.preventDefault()}
                    className="footer-link-item"
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => e.preventDefault()}
                      className="footer-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </FooterLinks>
            </nav>
          </FooterBottom>
        </motion.section>
      </div>
    </motion.footer>
  );
}
