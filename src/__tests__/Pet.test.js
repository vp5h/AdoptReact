import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router";
import Pet from "../Pet";

test("displsys a Default Thubnail", async () => {
  const pet = render(
    <StaticRouter>
      <Pet />
    </StaticRouter>
  );

  const petThubnail = await pet.findByTestId("thumbnail");

  expect(petThubnail.src).toContain("none.jpg");
});

test("displsys a non-Default correct Thubnail", async () => {
    const pet = render(
      <StaticRouter>
        <Pet images={["1.jpg", "2.jpg", "3.jpg"]}/>
      </StaticRouter>
    );
  
    const petThubnail = await pet.findByTestId("thumbnail");
  
    expect(petThubnail.src).toContain("1.jpg");
  });
  