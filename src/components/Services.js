import React from "react";
import Headline from "./Headline";
import Card from "./Card";

const daily = [
  "- Полы и плинтуса сухая и влажная уборка",
  "- Обеспыливание горизонтальных поверхностей и мебели",
  "- Протирка зеркал",
  "- Протирка дверей",
  "- Протирка фасадов шкафов (внутри если пустые)",
  "- Обезжиривание плиты",
  "- Мойка кухонных раковин, смесителей и посуды",
  "- Санузел и ванная комната",
];
const general = [
  "- Полы и плинтуса сухая и влажная уборка",
  "- Обеспыливание всех поверхностей",
  "- Чистка зеркал",
  "- Обеспыливание световых приборов (люстры, светильники)",
  "- Протирка дверей",
  "- Обеспыливание фасадов шкафов",
  "- Протирка полок хранения",
  "- Мойка и обезжиривание фасадов кухонных шкафов, столешницы и фартука",
  "- Мойка кухонных раковин, смесителей и посуды",
  "- Санузел и ванная комната (моем полностью со стенами",
];
const repair = [
  "- Комнаты и коридоры",

  "- Удаление строительной пыли и сложных загрязнений со всех поверхностей на всю высоту помещения.",

  "- Кухня",

  "- Мытьё кухонного гарнитура, бытовой техники, удаление следов ремонта.",

  "- Ванная комната",

  "- Очистка и дезинфекция сантехники. Мытьё плитки и потолков, очистка швов на всю высоту помещения.",

  "- Уборка после ремонта содержит более 45 видов работ.",
];


const Services = () => {
  return (
    <section id="services" className="mx-auto px-4 py-10">
      <Headline title={"Услуги"} />
      <div className="py-10 flex flex-wrap items-center  justify-center  ">
        <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-around items-center  container   ">
          <Card
            title="Ежедневная уборка"
            price="40 сом/м2"
            description={daily}
          />
          <Card
            title="Генеральная уборка"
            price="60 сом/м2"
            description={general}
          />
          <Card
            title="Уборка после ремонта"
            price="80 сом/м2"
            description={repair}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
