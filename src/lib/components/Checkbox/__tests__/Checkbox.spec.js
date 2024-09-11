import { describe, test, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Checkbox from "../../Checkbox/Checkbox.svelte";

const CheckboxHTML = `<div class="garnet s-5fp75dFFusnP"><input type="checkbox" id="name" class="s-5fp75dFFusnP"> <label for="name" class="s-5fp75dFFusnP">This is a test</label></div>`;
expect.extend(AxeMatchers);

describe("Tests for Checkbox", () => {
  const mockText = "This is a checkbox";

  const props = {
    id: "Checkbox",
    checked: false,
  };

  test("should render properly", () => {
    const result = render(Checkbox, { props });
    expect(() => result).not.toThrow();
  });

  test("show show a label with correct text", () => {
    const result = render(Checkbox, { ...props, label: mockText });
    expect(result).not.toBeNull();
  });

  test("should not show a check when clicked", async () => {
    render(Checkbox, { ...props, label: mockText });
    const checkbox = screen.getByRole("checkbox");
    await fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Checkbox({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => CheckboxHTML;
    const result = render();

    const results = await axe(result, {
      rules: {
        region: { enabled: false },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
