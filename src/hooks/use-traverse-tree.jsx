const useTraverseTree = () => {
  const insertNode = function (tree, folderId, item, isObject) {
    if (tree.id === folderId && tree.type === "object") {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isObject: isObject,
        items: [],
      });

      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isObject);
    });

    return { ...tree, items: latestNode };
  };

  return { insertNode };
};

export default useTraverseTree;
