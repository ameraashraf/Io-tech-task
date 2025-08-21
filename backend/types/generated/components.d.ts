import type { Schema, Struct } from '@strapi/strapi';

export interface ClientComponentClient extends Struct.ComponentSchema {
  collectionName: 'components_client_component_clients';
  info: {
    displayName: 'client';
  };
  attributes: {
    clientImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    review: Schema.Attribute.Text;
  };
}

export interface HomeHeroSectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_section_hero_sections';
  info: {
    displayName: 'Hero section';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface IconsData extends Struct.ComponentSchema {
  collectionName: 'components_icons_data';
  info: {
    displayName: 'Data';
  };
  attributes: {
    amera: Schema.Attribute.String;
  };
}

export interface IconsMemberIcons extends Struct.ComponentSchema {
  collectionName: 'components_icons_member_icons';
  info: {
    displayName: 'member-icons';
  };
  attributes: {
    email: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    phone: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    whatsapp: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LinksLinks extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    email: Schema.Attribute.Email;
    phoneNumber: Schema.Attribute.BigInteger;
    whatsappLink: Schema.Attribute.String;
  };
}

export interface ServicesService extends Struct.ComponentSchema {
  collectionName: 'components_services_services';
  info: {
    displayName: 'service';
  };
  attributes: {
    serviceHref: Schema.Attribute.String;
    serviceName: Schema.Attribute.String;
  };
}

export interface UiDesignTeamMembers extends Struct.ComponentSchema {
  collectionName: 'components_ui_design_team_members';
  info: {
    displayName: 'Team member';
  };
  attributes: {
    description: Schema.Attribute.Text;
    memberIcons: Schema.Attribute.Component<'icons.member-icons', false>;
    memberImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Memberlinks: Schema.Attribute.Component<'links.links', false>;
    name: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'client-component.client': ClientComponentClient;
      'home-hero-section.hero-section': HomeHeroSectionHeroSection;
      'icons.data': IconsData;
      'icons.member-icons': IconsMemberIcons;
      'links.links': LinksLinks;
      'services.service': ServicesService;
      'ui-design.team-members': UiDesignTeamMembers;
    }
  }
}
