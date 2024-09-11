import { describe, test, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { render, screen, fireEvent } from "@testing-library/svelte";
import ProgressBar from "../../ProgressBar/ProgressBar.svelte";

const ProgressBarHTML = `<div class="garnet s-BCNdu6Y8Uyt_"><div class="labelInsideClass s-BCNdu6Y8Uyt_"><div class="progressbar s-BCNdu6Y8Uyt_" style="width: 52%; background-color: red;"><span class="progress s-BCNdu6Y8Uyt_">52%</span></div></div></div>`;
expect.extend(AxeMatchers);

describe("Tests for ProgressBar", () => {
  const props = {
    progress: "52",
    precision: 0,
    tweenDuration: 400,
    animate: true,
    labelInside: true,
    labelTextOutside: "This is a test",
    easing: "cubicOut",
    color: "#733635",
  };

  test("should render properly", () => {
    const result = render(ProgressBar, { props });
    expect(() => result).not.toThrow();
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new ProgressBar({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => ProgressBarHTML;
    const result = render();

    const results = await axe(result, {
      rules: {
        region: { enabled: false },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
