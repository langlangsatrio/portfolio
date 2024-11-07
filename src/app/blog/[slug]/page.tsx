import getBlogs from "@/components/BlogAPI/page";
import { TypeBlogPostAsset } from "@/components/BlogAPI/types/TypeBlogPostPortfolio";
import RichText from "@/components/contenful/richText";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface IBlogDetail {
  params: { slug: string };
}

const BlogDetail: React.FC<IBlogDetail> = async ({ params }) => {
  const blog = async () => {
    try {
      const response = await getBlogs();
      console.log(response);
      console.log(params);
      return (
        <div>
          <Navbar />
          <div className="flex gap-3">
            <div className="flex flex-col text-center px-20 pt-32 gap-10 justify-center items-start w-full">
              <h1 className="text-5xl font-bold">
                {response?.items[parseInt(params.slug)].fields.title}
              </h1>
              <img
                src={`https:${
                  (
                    response?.items[parseInt(params.slug)].fields
                      .image as TypeBlogPostAsset
                  ).fields.file.url
                }`}
                className="w-full h-1/2 rounded-lg shadow-lg"
              />
              <p className="text-medium text-left">
                {response?.items[parseInt(params.slug)].fields.excerpt}
              </p>
              <div className="text-left">
                <RichText
                  document={response?.items[parseInt(params.slug)].fields.body}
                />
              </div>
            </div>
            <div className="flex flex-col bg-slate-100 w-1/2 sticky pt-32">
              <h1 className="font-semibold px-8 py-2 text-3xl">
                Other Projects
              </h1>
              <div className="flex flex-col">
                {response?.items?.map((value, item) => (
                  <div className="rounded-md shadow-sm px-8 py-10 hover:bg-slate-200">
                    <h1 className="font-semibold text-xl mb-6">
                      {value.fields.title}
                    </h1>
                    <div className="flex gap-4">
                      <img
                        src={`https:${
                          (value.fields.image as TypeBlogPostAsset).fields.file
                            .url
                        }`}
                        className="w-64 h-full rounded-lg shadow-lg"
                      />
                      <p className="text-md">{value.fields.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } catch (error) {
      console.error(error);
    }
  };
  return blog();
};

export default BlogDetail;
