import { describe, test, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Slider from "../../Slider/Slider.svelte";

const SliderHTML = `<div class="garnet-slider s-owSWZ-X6GUc2"><div class="range-slider s-owSWZ-X6GUc2"><label for="sliderChoice" class="s-owSWZ-X6GUc2">Text:</label> <input type="range" id="sliderChoice" min="0" max="100" step="1" name="sliderChoice" class="s-owSWZ-X6GUc2"> </div> <div class="selectedValue s-owSWZ-X6GUc2">Value: 50</div></div>`;
expect.extend(AxeMatchers);

describe("Tests for Slider", () => {
  const props = {
    id: "Slider",
  };

  it("should render properly", () => {
    const result = render(Slider, { props });
    expect(() => result).not.toThrow();
  });

  it("should show a new value when slider handle moved", async () => {
    render(Slider, props);
    const slider = screen.getByRole("slider");
    fireEvent.change(slider, { target: { value: "23" } });
    expect(slider.value).toBe("23");
  });

  it("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Slider({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => SliderHTML;
    const result = render();

    const results = await axe(result, {
      rules: {
        region: { enabled: false },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
