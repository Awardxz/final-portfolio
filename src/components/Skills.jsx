import { CascadiaCode } from "@/fonts/fonts";



export default function Skills() {
  return (
    <>
      <div className={`${CascadiaCode.className} flex flex-col gap-2 pt-10`}>
        <span>[Frontend] : ReactJS,NextJS</span>
        <span>[Backend] : NodeJS,Express</span>
        <span>[DB/DevOps] : SQL,Git,Docker</span>
      </div>
    </>
  );
}
