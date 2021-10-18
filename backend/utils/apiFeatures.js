class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    console.log(keyword);
    this.query = this.query.find({ ...keyword });
    return this;
  }
  filter() {
    const copiedQuery = { ...this.queryStr };
    // Removing some fields for the category
    const removeFields = ["keyword", "page", "limit"];
    removeFields.forEach((key) => delete copiedQuery[key]);

    // Filter for price and rating
    let queryStr = JSON.stringify(copiedQuery);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
}
module.exports = ApiFeatures;
