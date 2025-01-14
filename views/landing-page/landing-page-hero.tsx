import { Github, Linkedin, Mail } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";

export const LandingPageHero = () => {
  return (
    <section className="grid grid-cols-[1fr_0.5fr] gap-4 h-96">
      <article className="rounded-2xl p-10 pr-24 bg-primary-100">
        <h1 className="text-4xl font-semibold">
          Hello, I’m Andy, a Web Engineer With 7 years of experience.
        </h1>
        <p className="mt-12 text-lg">
          I care a lot about using design for positive impact. and enjoy
          creating user-centric, delightful, and human experiences.
        </p>
        <ul className="mt-36 flex gap-2 items-center">
          <Dialog>
            <DialogTrigger asChild>
              <li className="bg-primary-500 px-12 py-4 text-semibold text-white rounded-full cursor-pointer">
                Download CV
              </li>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Download CV</DialogTitle>
                <DialogDescription hidden />
              </DialogHeader>
              <div className="grid grid-cols-4 gap-2 place-items-center">
                <a
                  href="https://qj1affpgixr8zsed.public.blob.vercel-storage.com/CV_EN.pdf"
                  target="_blank"
                  className="AnimateUnderline">
                  English
                </a>
                <a
                  href="https://qj1affpgixr8zsed.public.blob.vercel-storage.com/CV_FR.pdf"
                  target="_blank"
                  className="AnimateUnderline">
                  Français
                </a>
                <a
                  href="https://qj1affpgixr8zsed.public.blob.vercel-storage.com/CV_ZH-CN.pdf"
                  target="_blank"
                  className="AnimateUnderline">
                  简体中文
                </a>
                <a
                  href="https://qj1affpgixr8zsed.public.blob.vercel-storage.com/CV_ZH-TW.pdf"
                  target="_blank"
                  className="AnimateUnderline">
                  繁體中文
                </a>
              </div>
            </DialogContent>
          </Dialog>
          <li>
            <a
              href="https://www.linkedin.com/in/andybe2001"
              className="size-14 rounded-full bg-white grid place-items-center hover:bg-[#0a66c2] hover:text-white transition-colors">
              <Linkedin size="1.5rem" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AndyBe2001"
              className="size-14 rounded-full bg-white grid place-items-center hover:bg-[#1f2328] hover:text-white transition-colors">
              <Github size="1.5rem" />
            </a>
          </li>
          <li>
            <a
              href="mailto:andybe034@gmail.com"
              className="size-14 rounded-full bg-white grid place-items-center hover:bg-primary-500 hover:text-white transition-colors">
              <Mail size="1.5rem" />
            </a>
          </li>
        </ul>
      </article>
      <article className="rounded-2xl bg-[url('/portrait.webp')] bg-cover"></article>
    </section>
  );
};
