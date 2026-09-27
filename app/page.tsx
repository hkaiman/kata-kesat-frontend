import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { title, subtitle } from "@/components/primitives";
import Demo from "@/components/Demo";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title({ color: "violet" })}>SemakKataKesat</h1>

        <h2 className={subtitle({ class: "mt-10" })}>
          Membantu mengesan kata kesat dan toksik dalam bahasa Melayu.
        </h2>
      </div>

      <Demo/>

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            Cuba API ini<Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
