import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@neo4j-ndl/react";
import React from "react";
import Divider from "../../components/Divider";
import { GraphAppItem } from "./graphApps";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { URLPattern } from "urlpattern-polyfill";

interface Props {
  app: GraphAppItem;
  formValues: any;
}

type LinkIconHtmlProps = {
  href: string;
  title: string;
  icon: any;
};

const LinkIconHtml = (props: LinkIconHtmlProps) => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    title={props.title}
    className="text-neutral-90 text-sm"
  >
    <FontAwesomeIcon icon={props.icon} />
  </a>
);

function AppItem(props: Props) {
  const { app, formValues } = props;

  const getAppUrl = (url: string) => {
    const connectUrlObject: URLPattern | null = new (window as any).URLPattern(
      formValues.connectionUrl
    )?.pattern;

    return url
      .replace(
        "$protocol",
        encodeURIComponent(connectUrlObject?.protocol || "neo4j")
      )
      .replace(
        "$hostname",
        encodeURIComponent(connectUrlObject?.hostname || "localhost")
      )
      .replace("$port", encodeURIComponent(connectUrlObject?.port || "7687"))
      .replace(
        "$url",
        encodeURIComponent(formValues.connectionUrl) || "neo4j://localhost"
      )
      .replace("$username", encodeURIComponent(formValues.username) || "neo4j")
      .replace("$database", encodeURIComponent(formValues.database) || "neo4j");
  };

  return (
    <div className="card p-0 flex flex-col">
      <div className="p-8 pb-4 flex flex-col gap-y-4 flex-1">
        <div className="flex flex-row justify-between">
          <div>
            <h6>{app.name}</h6>
            <p className="n-text-neutral-70 text-sm">{app.author}</p>
          </div>
          <div className="">
            <img className="w-8" src={app.logo} alt="app logo" />
          </div>
        </div>
        <div className="text-neutral-90 text-sm">{app.description}</div>
      </div>

      <div>
        <Divider />
        <div className="flex gap-x-4 px-8 py-4">
          {app.links.github && (
            <LinkIconHtml
              href={app.links.github}
              icon={brands("github")}
              title="Github"
            />
          )}

          {app.links.docs && (
            <LinkIconHtml
              href={app.links.docs}
              icon={solid("book")}
              title="Docs"
            />
          )}

          {app.links.changelog && (
            <LinkIconHtml
              href={app.links.changelog}
              icon={solid("list-alt")}
              title="Changelog"
            />
          )}

          {app.links.feedback && (
            <LinkIconHtml
              href={app.links.feedback}
              icon={solid("comment")}
              title="Feedback"
            />
          )}

          {app.links.homepage && (
            <LinkIconHtml
              href={app.links.homepage}
              icon={solid("home")}
              title="Homepage"
            />
          )}

          {app.links.twitter && (
            <LinkIconHtml
              href={app.links.twitter}
              icon={brands("twitter")}
              title="Twitter"
            />
          )}
        </div>
        <Divider />
      </div>
      <div className="flex flex-col gap-y-4 p-8 py-4 pb-8">
        <div>
          <Button fill="outlined" href={getAppUrl(app.baseUrl)} target="_blank">
            Open
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AppItem;
