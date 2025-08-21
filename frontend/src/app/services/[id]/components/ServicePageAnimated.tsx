import { motion } from "framer-motion";
import ServicePageLayout from "./ServicePageLayout";
import { containerVariants, sectionVariants } from "./animationVariants";

interface ServicePageAnimatedProps {
  service: any;
}

/**
 * ServicePageAnimated component wraps the service page layout with Framer Motion animations
 * Provides smooth entrance animations and staggered content reveals for enhanced user experience
 * Only rendered after component hydration to prevent server/client mismatches
 * This ensures consistent animation behavior across different rendering environments
 */
export default function ServicePageAnimated({
  service,
}: ServicePageAnimatedProps) {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <motion.div variants={sectionVariants}>
        <ServicePageLayout service={service}>
          {/* Additional animated content can be added here for enhanced interactivity */}
        </ServicePageLayout>
      </motion.div>
    </motion.div>
  );
}
