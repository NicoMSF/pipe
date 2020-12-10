export const classNames = (...props: any) => {
  let result = [];
  // console.log("classNames", props);
  for (let entry of props) {
    // console.log(entry, "typeof", typeof entry);
    if (typeof entry === "string") {
      result.push(entry);
    }
    if (typeof entry === "object") {
      for (let key in entry) {
        // console.log(key, entry[key]);
        if (entry[key]) {
          result.push(key);
        }
      }
    }
  }
  return result.join(" ");
};
