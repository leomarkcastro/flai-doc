import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Simple but Powerful",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        FL-AI Chatbot attempts to be simple in approach, but offers you a
        powerful toolset to customize your chatbot according to your complex
        requirements.
      </>
    ),
  },
  {
    title: "RAG, HTTP Calls, Image Generation",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Use Data from PDF, CSV, Docx to get context on conversation, call HTTP
        requests from your own server or Generate Image. FL-AI Chatbot has it
        all.
      </>
    ),
  },
  {
    title: "Open Source and Self Hostable",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        We Offer Open Source version of FL-AI Chatbot, which you can use to host
        on your own server. We also offer a hosted version for those who want to
        get started quickly.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
