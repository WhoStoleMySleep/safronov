import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import prisma from "@/lib/prisma";

export default async function About() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <div className="bg-[url('/image/about.jpg')] bg-center bg-cover ">
        <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left ">
          КТО МЫ ТАКИЕ?
        </h1>
      </div>
      <div className="container ">
        <div className="py-4 lg:py-14">
          <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl">
            У нас есть отличная идея и дизайн интерьера
          </h2>
          <p className="text-2xl font-medium lg:w-1/2">
            Digimax interior design company - это компания, предоставляющая
            услуги по дизайну интерьеров для домов, офисов, квартир и других
            объектов. Мы предоставляем лучшие услуги по дизайну интерьера для
            вас. У нас есть команда, имеющая большой опыт в области интерьера.
          </p>
        </div>
        <div className="items-center lg:flex gap-x-8">
          <div className="w-full">
            <Image
              src="/image/gallery1123.jpg"
              width={700}
              height={700}
              alt=""
              className=""
            />
          </div>
          <div className="">
            <p className="pb-8 tracking-wide">
              Мы - международные архитекторы. Мы считаем, что сегодня необходимо
              полностью переосмыслить архитектурное образование. Confluence не
              только объединяет новые взгляды на общество, но и включает в себя
              новые методы и современные инструменты, связанные с творчеством,
              производством и коммуникацией. В раскрывающейся коробке,
              подписанной вручную и предназначенной для хранения и демонстрации
              моего архитектурного портфолио за второй год обучения, можно
              разместить листы портфолио…
              <br />
              <br />
              Мы - международные архитекторы. Мы считаем, что сегодня необходимо
              полностью переосмыслить архитектурное образование. Confluence не
              только объединяет новые взгляды на общество, но и включает в себя
              новые методы и современные инструменты, связанные с творчеством,
              производством и коммуникацией.
              <br />
              <br />
              <span className="text-xl font-extrabold tracking-tight">
                Создавая АРКУ back piper, мы разделяем веру в преобразующую силу
                людей, объединенных общей целью.
              </span>
            </p>
            <a
              className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
              href=""
            >
              Подробнее <TbArrowUpRight className="text-xl" />{" "}
            </a>
          </div>
        </div>
        <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <h1 className="text-4xl font-bold tracking-wider text-center">
              КОМАНДА
            </h1>
          </div>
          <div className="grid gap-20 py-8 lg:grid-cols-3">
            {users.map((user) => (
              <div key={user.id} className="border-2 border-gray-500 ">
                <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                  <Image
                    src={user.imageUrl}
                    width={200}
                    height={200}
                    alt=""
                    className="mx-auto rounded-full "
                  />
                  <h2 className="py-4 text-2xl font-semibold ">{user.name}</h2>
                  <p className="text-sm text-gray-400">{user.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
