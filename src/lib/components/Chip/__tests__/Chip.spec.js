import { describe, test, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Chip from "../../Chip/Chip.svelte";

const ChipHTML = `<div class="garnet s-clkxn-jNAPHQ"><div class="chip s-clkxn-jNAPHQ" data-testid="chip"><span class="s-clkxn-jNAPHQ">Test chip</span> </div></div>`;
expect.extend(AxeMatchers);

describe("Tests for Chip", () => {
  const props = {
    active: true,
    close: false,
    chipContent: "",
    selected: false,
    outline: false,
  };

  test("should render properly", () => {
    const result = render(Chip, { props });
    expect(() => result).not.toThrow();
  });

  test("show a chip with close icon", () => {
    const result = render(Chip, { ...props, close: true });
    expect(result).not.toBeNull();
  });

  test("should close the chip when clicked", async () => {
    render(Chip, { props });
    const ChipTag = screen.getByTestId("chip");
    await fireEvent.click(ChipTag);
    expect(ChipTag).toBeUndefined;
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Chip({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => ChipHTML;
    const result = render();

    const results = await axe(result, {
      rules: {
        region: { enabled: false },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
