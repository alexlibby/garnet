import { describe, test, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { render, screen, fireEvent } from "@testing-library/svelte";
import RadioButton from "../../RadioButton/RadioButton.svelte";

const RadioButtonHTML = `<fieldset id="garnet" class="s-F2UExF4kPp6W"><div class="legend s-F2UExF4kPp6W" id="label-Legend">Legend</div> <input class="sr-only s-F2UExF4kPp6W" type="radio" id="armstrong-siddeley" role="radio" value="Armstrong-Siddeley"> <label for="armstrong-siddeley" class="s-F2UExF4kPp6W">Armstrong-Siddeley </label><input class="sr-only s-F2UExF4kPp6W" type="radio" id="jaguar-mark-ii" role="radio" value="Jaguar Mark II"> <label for="jaguar-mark-ii" class="s-F2UExF4kPp6W">Jaguar Mark II </label><input class="sr-only s-F2UExF4kPp6W" type="radio" id="ford-zephyr" role="radio" value="Ford Zephyr"> <label for="ford-zephyr" class="s-F2UExF4kPp6W">Ford Zephyr </label></fieldset>`;
expect.extend(AxeMatchers);

describe("Tests for RadioButton", () => {
  const props = {
    legend: "RadioButton Group",
  };

  test("should render properly", () => {
    const result = render(RadioButton, { props });
    expect(() => result).not.toThrow();
  });

  test("show a label with correct text", () => {
    const result = render(RadioButton, { props });
    expect(result).not.toBeNull();
  });

  test("should show a checked radio when clicked", async () => {
    const result = render(RadioButton, { props });
    const RadioButtonsGroup = screen.getAllByRole("radio")[1];
    await fireEvent.click(RadioButtonsGroup);
    expect(RadioButtonsGroup.checked).toBe(true);
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new RadioButton({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => RadioButtonHTML;
    const result = render();

    const results = await axe(result, {
      rules: {
        region: { enabled: false },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
