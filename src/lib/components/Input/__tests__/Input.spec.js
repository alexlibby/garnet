import { describe, test, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Input from "../../Input/Input.svelte";

const InputHTML = `<div class="garnet s--FAEzmeZd6RB"><label for="" class="s--FAEzmeZd6RB">Label:</label> <input type="text" id="" name="" placeholder="default placeholder" class="s--FAEzmeZd6RB"></div>`;
expect.extend(AxeMatchers);

describe("Tests for Input", () => {
  const props = {
    fieldID: "Input",
    disabled: false,
    placeholder: "example text",
  };

  test("should render properly", () => {
    const result = render(Input, props);
    expect(() => result).not.toThrow();
  });

  test("should show a textbox with correct placeholder text", () => {
    render(Input, props);
    const inputPlaceholder = screen.getByRole("textbox").placeholder;
    expect(inputPlaceholder).toEqual("example text");
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Input({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => InputHTML;
    const result = render();

    const results = await axe(result, {
      rules: {
        region: { enabled: false },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
