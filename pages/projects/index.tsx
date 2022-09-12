import { Layout } from "../../components/lv_5/Layout/Layout";
import { getBasicData } from "../../helpers/getBasicData";
import { CardPostI } from "../../components/lv_3/CardPost/CardPost";
import { ListOfCardProjects } from "../../components/lv_3/ListOfCardProjects/ListOfCardProjects";
import { CardProjectI } from "../../components/lv_3/CardProject/CardProject";
import Style from "./index.module.sass";

export async function getStaticProps() {
  const { listPost, listTags, mostSeen, lastPost } = getBasicData();

  return {
    props: {
      listPost,
      listTags,
      mostSeen,
      lastPost,
    },
  };
}

interface ProjectsI {
  listPost: CardPostI[];
  listTags: string[];
  mostSeen: CardPostI[];
  lastPost: CardPostI[];
}
export default function Projects(props: ProjectsI) {
  const { mostSeen, listTags } = props;

  const listOfProjects: CardProjectI[] = [
    {
      id: "1",
      title: "Audiophile",
      urlImage: "/img/audiophile.png",
      urlPost: "https://e-commerce-b.herokuapp.com/",
      // listOfGithubUrl: [
      //   {
      //     title: "Front",
      //     url: "https://github.com/skapxd/audiophile",
      //   },
      // ],
    },
    {
      id: "2",
      title: "TMC",
      urlImage: "/img/tmc.png",
      urlPost: "https://tecnologiamedicacelular.com/",
      // listOfGithubUrl: [
      //   {
      //     title: "Front",
      //     url: "https://github.com/skapxd/TMC",
      //   },
      // ],
    },
    {
      id: "3",
      title: "All App",
      urlImage: "/img/all-app.png",
      urlPost: "https://next-all-app.vercel.app/",
      // listOfGithubUrl: [
      //   {
      //     title: "Back and Front",
      //     url: "https://github.com/skapxd/next-all-app",
      //   },
      // ],
    },
  ];
  return (
    <Layout mostSeen={mostSeen} listOfTags={listTags}>
      <h1 className={Style.projects_title}>Proyectos</h1>

      <ListOfCardProjects
        list={listOfProjects}
        className={Style.projects_listPost}
      />
    </Layout>
  );
}
