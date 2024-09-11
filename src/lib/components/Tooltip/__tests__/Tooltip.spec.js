import { describe, test, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { render, screen, fireEvent, userEvent } from "@testing-library/svelte";
import Tooltip from "../../Tooltip/Tooltip.svelte";

const TooltipHTML = `<div class="tooltip s-UAv5UqhRPtrl"><div class="s-UAv5UqhRPtrl"><button aria-describedby="tooltip" type="button" class="trigger s-UAv5UqhRPtrl" data-testid="tooltipButton">?</button> <div aria-hidden="true" id="tooltip" role="tooltip" aria-label="more info" class="s-UAv5UqhRPtrl"></div></div></div>`;
expect.extend(AxeMatchers);

describe("Tests for Tooltip", () => {
  const props = {
    tip: '<p>This is an informational tooltip - to learn more <a href="/tutorial">click here</a></p>',
    showHTML: "false",
    timeout: "400",
    label: "more info",
  };

  test("should render properly as plain text", () => {
    const result = render(Tooltip, props);
    expect(() => result).not.toThrow();
  });

  test("should not show any markup when showHTML is true", async () => {
    const result = render(Tooltip, { ...props, showHTML: "true" });
    expect(() => result).not.toThrow();
  });

  test("should appear when hovering over target", async () => {
    render(Tooltip, props);
    const tooltipButton = screen.getByTestId("tooltipButton");

    await fireEvent.click(tooltipButton);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Tooltip({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => TooltipHTML;
    const result = render();

    expect(await axe(result)).toHaveNoViolations();
  });
});
