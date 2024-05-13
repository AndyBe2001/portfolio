import Dictionary from "@/languages/en.json";

export async function generateMetadata() {
  return {
    title: `${Dictionary.Common.sitename} - ${Dictionary.About.home.title}`,
    openGraph: {
      title: `${Dictionary.Common.sitename} - ${Dictionary.About.home.title}`,
    },
  };
}

export default async function Index() {
  return <></>;
}
