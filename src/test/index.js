const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("respond with Hello World", (done) => {
    request(app).get("/").expect("Hello my first Github Actions", done);
  })
});