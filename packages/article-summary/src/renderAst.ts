import renderTrees from "@times-components-native/markup-forest";
import summarise from "./summarise";
import renderer from "./article-summary-renderer";

export const renderAst = (ast: any) => renderTrees(summarise(ast), renderer);
