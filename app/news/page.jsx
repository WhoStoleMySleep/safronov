import React from "react";
import Image from "next/image";
import { PrismaClient } from "@prisma/client";

export default async function News() {
  const prisma = new PrismaClient();
  const projects = await prisma.news.findMany();

  return (
    <div className="">
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover ">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white ">
          НОВОСТИ
        </h1>
      </div>
      <div className="container grid grid-cols-2 gap-8 py-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group"
          >
            <div>
              <Image
                src={project.imageUrl}
                width={480}
                height={380}
                alt=""
                className="w-full"
              />
            </div>
            <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-12 text-xl text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <p className="py-4 ">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
