import { render } from "@testing-library/svelte";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import Spinner from "../../Spinner/Spinner.svelte";

const SpinnerHTML = `<div class="garnet s-9fyBjQp-X91z"><div class="s-9fyBjQp-X91z"><div class="circle s-9fyBjQp-X91z" style="--size: 40px; --color: #733635; --duration: 0.75s;"></div></div></div>`;
expect.extend(AxeMatchers);

describe("Tests for Spinner", () => {
  const props = {
    color: "#733635",
    duration: "0.75s",
    size: "40",
    variant: "circle",
  };

  it("should render properly", async () => {
    const result = render(Spinner, { props });
    expect(() => result).not.toThrow();
  });

  it("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Spinner({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => SpinnerHTML;
    const result = render();

    expect(await axe(result)).toHaveNoViolations();
  });
});
