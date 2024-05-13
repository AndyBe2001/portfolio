import {
  faChartSimple,
  faClipboardCheck,
  faDiagramNext,
  faFileExport,
  faFilter,
  faImage,
  faLayerGroup,
  faMapPin,
  faObjectGroup,
  faPeopleArrows,
  faUsersViewfinder,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getTranslations } from "next-intl/server";

import { WorkArchitecture } from "../work-architecture";
import { WorkTitle } from "../work-title";

export const ComputerVisionArchitecture = async () => {
  const t = await getTranslations("Work.computervision.architecture");

  return (
    <section className="mx-auto mb-16 max-w-6xl">
      <WorkTitle>{t("title")}</WorkTitle>
      <article className="mx-auto grid gap-5">
        {/* Camera */}
        <WorkArchitecture className="flex h-48 w-full flex-col items-center">
          <FontAwesomeIcon icon={faVideo} className="mt-10 text-6xl" />
          <span className="mt-3 text-center font-semibold">{t("camera")}</span>
        </WorkArchitecture>
        {/* Yolo v4 */}
        <WorkArchitecture>
          <h3 className="mb-5 w-fit text-center font-semibold">
            {t("detection.title")}
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex h-48 w-full flex-col items-center rounded-2xl border px-4">
              <FontAwesomeIcon
                icon={faObjectGroup}
                className="mt-10 text-6xl"
              />
              <span className="mt-3 text-center font-semibold">
                {t("detection.basic")}
              </span>
            </div>
            <div className="flex h-48 w-full flex-col items-center rounded-2xl border px-4">
              <FontAwesomeIcon icon={faLayerGroup} className="mt-10 text-6xl" />
              <span className="mt-3 text-center font-semibold">
                {t("detection.map")}
              </span>
            </div>
            <div className="flex h-48 w-full flex-col items-center rounded-2xl border px-4">
              <FontAwesomeIcon icon={faMapPin} className="mt-10 text-6xl" />
              <span className="mt-3 text-center font-semibold">
                {t("detection.object")}
              </span>
            </div>
            <div className="flex h-48 w-full flex-col items-center rounded-2xl border px-4">
              <FontAwesomeIcon icon={faFilter} className="mt-10 text-6xl" />
              <span className="mt-3 text-center font-semibold">
                {t("detection.filter")}
              </span>
            </div>
          </div>
        </WorkArchitecture>
        {/* DeepSORT */}
        <WorkArchitecture>
          <h3 className="mb-5 w-fit text-center font-semibold">
            {t("tracking.title")}
          </h3>
          <div className="grid gap-5 lg:grid-cols-4">
            <div className="flex h-48 w-full flex-col items-center rounded-2xl border px-4">
              <FontAwesomeIcon
                icon={faDiagramNext}
                className="mt-10 text-6xl"
              />
              <span className="mt-3 text-center font-semibold">
                {t("tracking.predict")}
              </span>
            </div>
            <div className="grid h-full gap-5 rounded-2xl border p-4 sm:grid-cols-2 lg:col-span-2">
              <div className="flex w-full flex-col items-center rounded-2xl border p-4">
                <FontAwesomeIcon icon={faPeopleArrows} className="text-4xl" />
                <span className="mt-1 text-center font-semibold lg:mt-3">
                  {t("tracking.mahalanobis")}
                </span>
              </div>
              <div className="flex w-full flex-col items-center rounded-2xl border p-4">
                <FontAwesomeIcon
                  icon={faUsersViewfinder}
                  className="text-4xl"
                />
                <span className="mt-1 text-center font-semibold lg:mt-3">
                  {t("tracking.appearance")}
                </span>
              </div>
              <h5 className="text-center font-semibold leading-none sm:col-span-2">
                {t("tracking.relation")}
              </h5>
            </div>
            <div className="flex h-48 w-full flex-col items-center rounded-2xl border px-4">
              <FontAwesomeIcon
                icon={faClipboardCheck}
                className="mt-10 text-6xl"
              />
              <span className="mt-3 text-center font-semibold">
                {t("tracking.filter")}
              </span>
            </div>
          </div>
        </WorkArchitecture>
        {/* Processing */}
        <WorkArchitecture>
          <h3 className="mb-5 w-fit text-center font-semibold">
            {t("process.title")}
          </h3>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="flex h-48 w-full flex-col items-center rounded-2xl border px-4">
              <FontAwesomeIcon
                icon={faChartSimple}
                className="mt-10 text-6xl"
              />
              <span className="mt-3 text-center font-semibold">
                {t("process.count")}
              </span>
            </div>
            <div className="flex h-48 w-full flex-col items-center rounded-2xl border px-4">
              <FontAwesomeIcon icon={faImage} className="mt-10 text-6xl" />
              <span className="mt-3 text-center font-semibold">
                {t("process.capture")}
              </span>
            </div>
            <div className="flex h-48 w-full flex-col items-center rounded-2xl border px-4">
              <FontAwesomeIcon icon={faFileExport} className="mt-10 text-6xl" />
              <span className="mt-3 text-center font-semibold">
                {t("process.export")}
              </span>
            </div>
          </div>
        </WorkArchitecture>
      </article>
    </section>
  );
};
