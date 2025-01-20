import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
    icon: 'book';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CarouselCarousel extends Struct.ComponentSchema {
  collectionName: 'components_carousel_carousels';
  info: {
    description: '';
    displayName: 'Carousel';
    icon: 'picture';
  };
  attributes: {
    Description: Schema.Attribute.Text & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    LabelButton: Schema.Attribute.String;
    Link: Schema.Attribute.String;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavbarNavItem extends Struct.ComponentSchema {
  collectionName: 'components_navbar_nav_items';
  info: {
    description: '';
    displayName: 'NavItem';
    icon: 'bulletList';
  };
  attributes: {
    IsShown: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    Link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    SubItem: Schema.Attribute.Component<'navbar.sub-navbar-item', true>;
  };
}

export interface NavbarSubNavbarItem extends Struct.ComponentSchema {
  collectionName: 'components_navbar_sub_navbar_items';
  info: {
    description: '';
    displayName: 'SubNavbarItem';
    icon: 'bulletList';
  };
  attributes: {
    IsShown: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    Link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface NewsNews extends Struct.ComponentSchema {
  collectionName: 'components_news_news';
  info: {
    description: '';
    displayName: 'News';
    icon: 'book';
  };
  attributes: {
    news_collections: Schema.Attribute.Relation<
      'oneToMany',
      'api::news-collection.news-collection'
    >;
  };
}

export interface QuickLinksQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_quick_links_quick_links';
  info: {
    displayName: 'QuickLinks';
    icon: 'monitor';
  };
  attributes: {
    Link: Schema.Attribute.String & Schema.Attribute.Required;
    Logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about': AboutAbout;
      'carousel.carousel': CarouselCarousel;
      'navbar.nav-item': NavbarNavItem;
      'navbar.sub-navbar-item': NavbarSubNavbarItem;
      'news.news': NewsNews;
      'quick-links.quick-links': QuickLinksQuickLinks;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
