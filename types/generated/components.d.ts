import type { Struct, Schema } from '@strapi/strapi';

export interface SingleInfoGridSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_single_info_grid_section_items';
  info: {
    displayName: 'InfoGridSectionItem';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.RichText;
  };
}

export interface SingleImageQuoteSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_single_image_quote_section_items';
  info: {
    displayName: 'ImageQuoteSectionItem';
  };
  attributes: {
    title: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.RichText;
  };
}

export interface SingleContactInfoGridSectionItem
  extends Struct.ComponentSchema {
  collectionName: 'components_single_contact_info_grid_section_items';
  info: {
    displayName: 'ContactInfoGridSectionItem';
  };
  attributes: {
    projectManager: Schema.Attribute.String;
    name: Schema.Attribute.String;
    address: Schema.Attribute.RichText;
  };
}

export interface SingleColumnInfoSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_single_column_info_section_items';
  info: {
    displayName: 'ColumnInfoSectionItem';
  };
  attributes: {
    title: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.RichText;
  };
}

export interface SingleButtonGridSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_single_button_grid_section_items';
  info: {
    displayName: 'ButtonGridSectionItem';
  };
  attributes: {
    title: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface SingleBenefitListSectionItem extends Struct.ComponentSchema {
  collectionName: 'components_single_benefit_list_section_items';
  info: {
    displayName: 'BenefitListSectionItem';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface DymamicTextSection extends Struct.ComponentSchema {
  collectionName: 'components_dymamic_text_sections';
  info: {
    displayName: 'TextSection';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface DymamicInfoGridSection extends Struct.ComponentSchema {
  collectionName: 'components_dymamic_info_grid_sections';
  info: {
    displayName: 'InfoGridSection';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    items: Schema.Attribute.Component<'single.info-grid-section-item', true>;
  };
}

export interface DymamicImageQuoteSection extends Struct.ComponentSchema {
  collectionName: 'components_dymamic_image_quote_sections';
  info: {
    displayName: 'ImageQuoteSection';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.RichText;
  };
}

export interface DymamicHeroWithImageSection extends Struct.ComponentSchema {
  collectionName: 'components_dymamic_hero_with_image_sections';
  info: {
    displayName: 'HeroWithImageSection';
  };
  attributes: {
    title: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface DymamicHeadline extends Struct.ComponentSchema {
  collectionName: 'components_dymamic_headlines';
  info: {
    displayName: 'Headline';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface DymamicContactInfoGridSection extends Struct.ComponentSchema {
  collectionName: 'components_dymamic_contact_info_grid_sections';
  info: {
    displayName: 'ContactInfoGridSection';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    items: Schema.Attribute.Component<
      'single.contact-info-grid-section-item',
      true
    >;
  };
}

export interface DymamicColumnInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_dymamic_column_info_sections';
  info: {
    displayName: 'ColumnInfoSection';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    items: Schema.Attribute.Component<'single.column-info-section-item', true>;
  };
}

export interface DymamicCenteredContentWithImageSection
  extends Struct.ComponentSchema {
  collectionName: 'components_dymamic_centered_content_with_image_sections';
  info: {
    displayName: 'CenteredContentWithImageSection';
  };
  attributes: {
    text: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface DymamicButtonGridSection extends Struct.ComponentSchema {
  collectionName: 'components_dymamic_button_grid_sections';
  info: {
    displayName: 'ButtonGridSection';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    items: Schema.Attribute.Component<'single.button-grid-section-item', true>;
  };
}

export interface DymamicBenefitsListSection extends Struct.ComponentSchema {
  collectionName: 'components_dymamic_benefits_list_sections';
  info: {
    displayName: 'BenefitsListSection';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    items: Schema.Attribute.Component<'single.benefit-list-section-item', true>;
  };
}

export interface DymamicBanner extends Struct.ComponentSchema {
  collectionName: 'components_dymamic_banners';
  info: {
    displayName: 'Banner';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

export interface DymamicAccordionInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_dymamic_accordion_info_sections';
  info: {
    displayName: 'AccordionInfoSection';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'single.info-grid-section-item': SingleInfoGridSectionItem;
      'single.image-quote-section-item': SingleImageQuoteSectionItem;
      'single.contact-info-grid-section-item': SingleContactInfoGridSectionItem;
      'single.column-info-section-item': SingleColumnInfoSectionItem;
      'single.button-grid-section-item': SingleButtonGridSectionItem;
      'single.benefit-list-section-item': SingleBenefitListSectionItem;
      'dymamic.text-section': DymamicTextSection;
      'dymamic.info-grid-section': DymamicInfoGridSection;
      'dymamic.image-quote-section': DymamicImageQuoteSection;
      'dymamic.hero-with-image-section': DymamicHeroWithImageSection;
      'dymamic.headline': DymamicHeadline;
      'dymamic.contact-info-grid-section': DymamicContactInfoGridSection;
      'dymamic.column-info-section': DymamicColumnInfoSection;
      'dymamic.centered-content-with-image-section': DymamicCenteredContentWithImageSection;
      'dymamic.button-grid-section': DymamicButtonGridSection;
      'dymamic.benefits-list-section': DymamicBenefitsListSection;
      'dymamic.banner': DymamicBanner;
      'dymamic.accordion-info-section': DymamicAccordionInfoSection;
    }
  }
}
