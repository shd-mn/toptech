import motherboard from "/public/images/meg-kv.png";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="mb-10 flex w-full items-center bg-hero-pattern bg-cover bg-scroll bg-center px-32 py-8 text-white">
      <div className="mx-auto grid h-full grid-cols-2 items-center">
        <div>
          <h1 className="mb-4 text-7xl">MEG X670E ACE</h1>

          <p className="w-2/3">
            The MEG X670E ACE furnished premium aesthetics with its dark black
            finish and gold embellishes. Developed to unlock the full gaming
            potential of the AMD X670 chipset by combining elite hardware system
            support and premium durability, the MEG X670E ACE is an outstanding
            E-ATX platform for extreme settings in terms of overclocking memory,
            processor, and graphic card at the highest level.
          </p>
        </div>

        <figure className="h-[720px]">
          <Image
            src={motherboard}
            alt="Picture of the author"
            className="h-full w-full object-contain"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
