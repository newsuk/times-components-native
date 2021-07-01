import ArticleSummary, {
  ArticleSummaryContent,
  ArticleSummaryHeadline,
  ArticleSummaryLabel,
  ArticleSummaryStrapline,
  summarise,
} from "./src/article-summary";
import renderer from "./src/article-summary-renderer";
import { renderAst } from "./src/renderAst";

export {
  renderAst,
  renderer,
  ArticleSummaryContent,
  ArticleSummaryHeadline,
  ArticleSummaryLabel,
  ArticleSummaryStrapline,
  summarise,
};

export default ArticleSummary;
