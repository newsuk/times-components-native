export default function fix(ast) {
  if (ast?.length > 0) {
    const astObj = ast[0];
    const { children } = astObj;
    if (children?.length > 0) {
      children.map((item) => {
        if (item.attributes?.value?.includes("▶")) {
          item.attributes.value = item.attributes.value.replace(/▶/g, "▸");
          return item;
        }
        return item;
      });
    }
    return ast;
  }

  return ast;
}
