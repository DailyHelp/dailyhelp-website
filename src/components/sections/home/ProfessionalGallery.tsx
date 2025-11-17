// src/components/sections/home/ProfessionGallery.tsx
"use client";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { Card } from "@/components/ui";
import { Container } from "@/components/ui";

const professions = [
  { title: "Fashion designer", image: "/images/whisk-vix.png" },
  { title: "Event planner", image: "/images/whisk-xiii.png"},
  { title: "Home cleaner", image: "/images/whisk-viii.png" },
  { title: "Technician", image: "/images/whisk-vii.png" },
  { title: "Auto repairs", image: "/images/whisk-ii.png" },
  { title: "Hair stylist", image: "/images/whisk-iii.png" },
  { title: "Chef", image: "/images/whisk-iv.png" },
  { title: "Dispatch rider", image: "/images/whisk-v.png" },
  { title: "Event ushers", image: "/images/whisk-i.png" },
  { title: "Painter", image: "/images/whisk-vi.png" },
];

export default function ProfessionGallery() {
  return (
    <section className=" sm:py-15 py-0">
      <Container >
        <div className=" grid gap-2 grid-cols-3  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 ">
          {professions.map((profession, index) => (
          <Card key={profession.title} className={`bg-[#ECECEFFF] relative overflow-hidden max-sm:rounded-md ${index === 9 ? " max-lg:hidden" : ""}`}>
            <div className="max-md:hidden p-3 text-center relative">
              <h3 className="font-semibold text-xs text-[#6A6F81FF]">
                {profession.title}
              </h3>
            </div>

            <div className="relative md:h-40 xl:h-60 max-sm:h-30 pt-10 w-full">
              <Image
                src={profession.image}
                alt={profession.title}
                fill
                className={cn(
                  "object-cover scale-x-[-1]",
                  index === 1 && "object-left ",
                  index === 3 && "object-top",
                  index === 5 && "object-right scale-x-[1]",
                  index === 7 && "object-top ",
                  index === 8 && "object-top ",

                )}
              />
            </div>

            <div className="md:hidden p-1 text-center relative">
              <h3 className="font-semibold text-xs text-[#6A6F81FF]">
                {profession.title}
              </h3>
            </div>
          </Card>
        ))}

        </div>
      </Container>
    </section>
  );
}
