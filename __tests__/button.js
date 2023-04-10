import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Button from "../elements/Button/index";
import { Link } from "next/link";

const setup = () => {
  const external = render(
    <Button
      type="link"
      isExternal
    ></Button>
  );
  const internal = render(
    <Button
      href=""
      type="link"
    ></Button>
  );

  const isExternal = external.getByLabelText("isExternal");
  const isInternal = internal.getByLabelText("isInternal");

  return {
    ...external,
    ...internal,
    external,
    internal,
    isExternal,
    isInternal,
  };
};

test("should render <a></a> tag", () => {
  const { isExternal } = setup();

  expect(isExternal).toBeInTheDocument();
});

test("should render <Link> compoonent", () => {
  const { isInternal } = setup();

  expect(isInternal).toBeInTheDocument();
});
