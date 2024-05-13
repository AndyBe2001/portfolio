import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};
export default async function IndexPage({ params }: Props) {
  unstable_setRequestLocale(params.locale);

  return <main className="w-full px-5"></main>;
}
