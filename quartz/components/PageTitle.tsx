import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div>
      <h2 class={classNames(displayClass, "page-title")}>
        <a href={baseDir}>{title}</a>
      </h2>
      <a href="https://www.figma.com/community/plugin/1285971940276913396/heron-variable-tools" target="_blank" class="banner">
        <img
          src={baseDir + "/static/Heron-variable-tools-logo.png"}
          alt="Heron variable tools icon"
          width={40}
          height={40}
        />
        <div>
          <h3>Heron variable tools</h3>
          <p>全能的变量管理插件</p>
        </div>
      </a>
    </div>
  )
}

PageTitle.css = `
  .page-title {
    font-size: 1.75rem;
    margin: 0;
    margin-bottom: 16px;
  }
  .banner {
    display: flex;
    margin: 0;
    padding: 8px;
    background-color: rgba(45, 212, 191, 0.1);
    border-radius: 12px;
    >img {
      margin: 0;
      margin-right: 10px;
    }
    >div {
      flex: 1;
      >h3 {
        margin: 0;
        font-size: 14px;
      }
      >p {
        margin: 0;
        font-size: 12px;
      }
    }
  }
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
