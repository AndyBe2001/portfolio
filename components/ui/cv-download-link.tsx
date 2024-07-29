import { list } from "@vercel/blob";
import { getLocale, getTranslations } from "next-intl/server";

import { MultipleLink } from "@/components/ui/multiple-link";
import { localesName } from "@/configs/i18n";

export const CvDownloadLink = async () => {
  const ct = await getTranslations("Common");
  const locale = await getLocale();

  const cvURL: { [filename: string]: string } = {};
  (await list()).blobs.forEach(item => {
    const cvFilenames = [
      "CV_EN.pdf",
      "CV_FR.pdf",
      "CV_ZH-CN.pdf",
      "CV_ZH-TW.pdf",
    ];
    if (cvFilenames.includes(item.pathname)) {
      cvURL[item.pathname] = item.downloadUrl;
    }
  });

  const localeCvURL = cvURL[`CV_${locale.toUpperCase()}.pdf`];
  const allCvURL = Object.entries(cvURL).map(([filename, url]) => ({
    label:
      localesName[
        filename
          .split("_")[1]
          .split(".")[0]
          .toLowerCase() as keyof typeof localesName
      ],
    href: url,
  }));

  return (
    <MultipleLink href={localeCvURL} menu={allCvURL}>
      {[ct("download"), ct("resume").toLowerCase()].join(
        ["en", "fr"].includes(locale) ? " " : ""
      )}
    </MultipleLink>
  );
};
