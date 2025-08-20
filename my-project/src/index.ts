// import type { Core } from '@strapi/strapi';

/**
 * Strapi extension file that runs during application lifecycle
 * Provides hooks for extending Strapi functionality before initialization and startup
 * This file can be used to add custom logic, plugins, or modifications to Strapi
 */
export default {
  /**
   * Register function runs before application initialization
   * Use this to extend code, register custom services, or modify Strapi behavior
   * This is the place to add custom logic that needs to run early in the lifecycle
   *
   * @param strapi - Strapi instance (commented out to avoid TypeScript errors)
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {
    // Add custom registration logic here
    // Examples: register custom services, extend models, add middleware
  },

  /**
   * Bootstrap function runs before application startup
   * Use this to set up data models, run jobs, or perform special logic
   * This runs after registration but before the application starts serving requests
   *
   * @param strapi - Strapi instance (commented out to avoid TypeScript errors)
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {
    // Add custom bootstrap logic here
    // Examples: seed data, set up cron jobs, initialize external services
  },
};
