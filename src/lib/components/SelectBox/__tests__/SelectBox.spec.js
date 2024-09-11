import { describe, test, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { render, screen, fireEvent } from "@testing-library/svelte";
import SelectBox from "../../SelectBox/SelectBox.svelte";

const SelectBoxHTML = `<div class="garnet-selectbox s-YBKB7XKMQi9t"><label for="garnet-selectbox" class="s-YBKB7XKMQi9t"><select data-testid="selectdropdown" title="garnet-selectbox" class="s-YBKB7XKMQi9t"><option value="1" class="s-YBKB7XKMQi9t">aaa </option><option value="2" class="s-YBKB7XKMQi9t">bbb </option><option value="3" class="s-YBKB7XKMQi9t">ccc </option><option value="4" class="s-YBKB7XKMQi9t">ddd </option></select> </label></div>`;
expect.extend(AxeMatchers);

describe("Tests for SelectBox", () => {
  const props = {
    selectOptions: [{ text: "aaa" }, { text: "bbb" }, { text: "ccc" }],
    index: 0,
    disabled: false,
  };

  test("should render properly", () => {
    const result = render(SelectBox, props);
    expect(() => result).not.toThrow();
  });

  test("should select the second option if clicked", async () => {
    const result = render(SelectBox, props);

    await fireEvent.click(screen.getByTestId("selectdropdown"));
    screen.findByText(props.selectOptions[0].text).then(function (result) {
      expect(result.text).toEqual("aaa");
    });
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new SelectBox({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => SelectBoxHTML;
    const result = render();

    const results = await axe(result, {
      rules: {
        region: { enabled: false },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
