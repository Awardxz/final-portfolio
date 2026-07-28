import { CascadiaCode, IBMPlexMono } from "@/fonts/fonts";




export default function AboutMe() {
  return (
    <>
      
      <div className={`${IBMPlexMono.className} text-[20px] w-120 leading-tigh`}>
        <h1 className="opacity-50">&gt; whoami</h1>
        <h1 className="text-[40px] pb-3">Hi I'm <a className="underline decoration-white  decoration-2 underline-offset-4">award</a>.</h1>
        <p className="text-[#adadad]">
          I build things for the web. Passionate about clean code, scalable architecture and creating meaningful experiences.
        </p>
      </div>
    </>
  );
}
