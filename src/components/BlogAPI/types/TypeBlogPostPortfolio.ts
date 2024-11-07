import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeBlogPostAsset {
  sys: { id: string };
  fields: {
    file: {
      url: string;
      details?: any;
      fileName?: string;
      contentType?: string;
    };
  };
}

export interface TypeBlogPostPortfolioFields {
  title: EntryFieldTypes.Symbol;
  excerpt: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  body: EntryFieldTypes.RichText;
  image: EntryFieldTypes.AssetLink;
}

export type TypeBlogPostPortfolioSkeleton = EntrySkeletonType<
  TypeBlogPostPortfolioFields,
  "blogPostPortfolio"
>;
export type TypeBlogPostPortfolio<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBlogPostPortfolioSkeleton, Modifiers, Locales>;
