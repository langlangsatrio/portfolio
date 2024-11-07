import contentfulClient from "@/lib/contentfulClient";
import { TypeBlogPostPortfolioSkeleton } from "@/components/BlogAPI/types/TypeBlogPostPortfolio";

export default async function getBlogs() {
  try {
    const response =
      await contentfulClient.getEntries<TypeBlogPostPortfolioSkeleton>({
        content_type: "blogPostPortfolio",
      });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
