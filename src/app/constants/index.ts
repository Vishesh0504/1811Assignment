const templates = [
  {
    src: "/Templates/1.png",
    text: "Presentation",
    display: "Landscape",
  },
  {
    src: "/Templates/2.png",
    text: "Presentation",
    display: "Landscape",
  },
  {
    src: "/Templates/3.png",
    text: "Monologue",
    display: "Landscape",
  },
  {
    src: "/Templates/4.png",
    text: "Monologue",
    display: "Landscape",
  },
  {
    src: "/Templates/5.png",
    text: "Monologue",
    display: "Landscape",
  },
  {
    src: "/Templates/6.png",
    text: "Monologue",
    display: "Landscape",
  },
  {
    src: "/Templates/7.png",
    text: "Product Explainer",
    display: "Landscape",
  },
  {
    src: "/Templates/8.png",
    text: "Onboarding",
    display: "Landscape",
  },
  {
    src: "/Templates/9.png",
    text: "Monologue",
    display: "Potrait",
  },
  {
    src: "/Templates/10.png",
    text: "Monologue",
    display: "Potrait",
  },
  {
    src: "/Templates/11.png",
    text: "Monologue",
    display: "Potrait",
  },
  {
    src: "/Templates/12.png",
    text: "Monologue",
    display: "Potrait",
  },
];

interface DataItem {
  [key: number]: {
    src: string;
    text: string;
    display: string;
  }[];
}

const data: DataItem = {
  1: templates,
  2: templates.filter((template) => template.display === "Landscape"),
  3: templates.filter((templates) => templates.display === "Potrait"),
};

export { data, templates };
