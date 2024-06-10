import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/image";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center md:text-left">
          <h1 className={title()}>Réalisez vos&nbsp;</h1>
          <h1 className={title({ color: "violet" })}> projets SAP&nbsp;</h1>
          <br />
          <h1 className={title()}>avec un expert certifié.</h1>
          <h4 className={subtitle({ class: "mt-4" })}>
            Accompagnement sur mesure en SAP pour vos projets IT.
          </h4>
        </div>

        <div>
          <Image
            width={300}
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
