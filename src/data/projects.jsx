import exemplo from "../assets/exemplo.png";
import tuttyMotors from "../assets/tuttyMotors.png";
import sbOffice from "../assets/sbOffice.png";
import goiasEletronicos from "../assets/goiasEletronicos.png";
import projetoCQD from "../assets/projetoCQD.png";
import euQuero from "../assets/euQuero.png";
import sipdi from "../assets/sipdi.png";

const projects = [
  {
    id: 0,
    projectImg: tuttyMotors,
    projectTopTitle: "WebSite e UI/UX",
    projectTitle: "Tutty Motors",
    projectDescription:
      "Site institucional para a loja automativa Tutty Motors. Desenvolvido com NextJS e Firebase, esse site possui um sistema de login administrativo e gerenciamento de produtos. Foi meu primeiro projeto, e nele pude participar de parte do desenvolvimento front-end e de toda a produção do design.",
    projectLink: "https://www.tuttymotors.com.br",
    mobile: false,
  },
  {
    id: 1,
    projectImg: goiasEletronicos,
    projectTopTitle: "WebSite e UI/UX",
    projectTitle: "Goias Eletronicos",
    projectDescription:
      "Página institucional de uma empresa inexistente com o intuito de treinar, tanto tecnologias relacionadas à programação, quanto o design, sendo ambas partes desenvolvidas por mim.",
    projectLink: "http://www.aaa.com",
    mobile: false,
    color: "#c4c4c4",
    cursor: "none;",
  },
  {
    id: 2,
    projectImg: sbOffice,
    projectTopTitle: "WebSite e UI/UX",
    projectTitle: "SBOffice",
    projectDescription:
      "Site institucional desenvolvido para a empresa de soluções elétricas, SBOffice. Assim como na Tutty Motors, esse site possui todas as páginas que um institucional deve ter, além de uma página administrativa com gerenciamento de conteúdo e estoque. Ele também foi desenvolvido em NextJS e Firebase. Porém nesse, tive uma participação maior no desenvolvimento front e total no design.",
    projectLink: "https://www.sboffice.com.br",
    mobile: false,
  },

  {
    id: 3,
    projectImg: sipdi,
    projectTopTitle: "UI/UX",
    projectTitle: "SIPDI",
    projectDescription:
      "Projeto que desenvolvi enquanto estudava UI Design, período este onde pude aprender diversas técnicas para prender a atenção do usuário e ter um site mais bonito e acessível.",
    projectLink:
      "https://www.figma.com/file/CIZKsjPVdXGvOAcJjd7Na4/Capacita%C3%A7%C3%A3o-NATI?type=design&node-id=0%3A1&mode=design&t=hSQ3NJcbXx3OTFv5-1",
    mobile: false,
  },
  {
    id: 4,
    projectImg: projetoCQD,
    projectTopTitle: "UI/UX",
    projectTitle: "Projeto CQD",
    projectDescription:
      "Projeto de Sistema de Aulas, sendo ele o projeto de design mais bem planejado que fiz até hoje, mesmo não sendo executado por completo, acredito ser interessante trazê-lo, pois nele pude demonstrar um pouco que aprendi depois de um tempo estudando design gráfico.",
    projectLink:
      "https://www.figma.com/file/47nVRt9rhKClqcfLNOBGLD/projeto-cqd?type=design&node-id=0%3A1&mode=design&t=28f3n0okSJGvZ1iu-1",
    mobile: false,
  },

  {
    id: 5,
    projectImg: euQuero,
    projectTopTitle: "Aplicativo e UI/UX",
    projectTitle: "EuQuero",
    projectDescription:
      "Aplicativo onde pude participar de forma íntegra de todo o seu desenvolvimento, desde o design até sua publicação. Esse projeto foi o primeiro aplicativo desenvolvido para um cliente associado à minha antiga empresa, e tinha como objetivo facilitar o acesso às UBS. Foi um dos nossos maiores desafios, e muito por conta disso, ele agregou muito no meu desenvolvimento profissional, pois pude aprender desde a diferença de ReactJS para React Native, até a complexidade que é uma publicação de App em dispositivos IOS.",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.euquero.ufma.app",
    mobile: true,
  },
];

export default projects;
