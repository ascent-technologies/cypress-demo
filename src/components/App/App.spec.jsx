import React from "react";
import renderer from "react-test-renderer";

import App from "./App";

describe("App", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = renderer.create(
        <App {...props}> A App Label</App>
    );
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
