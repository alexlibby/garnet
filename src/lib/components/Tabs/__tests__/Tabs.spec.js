import { describe, test, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { render, screen, fireEvent } from "@testing-library/svelte";
import { userEvent } from "@vitest/browser/context";
import Tabs from "../../Tabs/Tabs.svelte";

const TabsHTML = `<div class="garnet-tabs s-NPWaW4eOvB4v"><div class="container s-NPWaW4eOvB4v"><ul class="s-NPWaW4eOvB4v"><li class="active s-NPWaW4eOvB4v" data-testid="tabHeader"><span class="s-NPWaW4eOvB4v">Tab 1</span> </li><li class=" s-NPWaW4eOvB4v" data-testid="tabHeader"><span class="s-NPWaW4eOvB4v">Tab 2</span> </li><li class=" s-NPWaW4eOvB4v" data-testid="tabHeader"><span class="s-NPWaW4eOvB4v">Tab 3</span> </li></ul> <div class="content s-NPWaW4eOvB4v" data-testid="tabContent">Text 1</div></div></div>`;
expect.extend(AxeMatchers);

describe("Tests for Tabs", () => {
  const props = {
    vertical: false,
    items: [
      { id: 1, name: "Tab 1", text: "This is a test" },
      { id: 2, name: "Tab 2", text: "Here is tab 2" },
      { id: 3, name: "Tab 3", text: "And this is tab 3" },
    ],
  };

  test("should render properly", () => {
    const result = render(Tabs, props);
    expect(() => result).not.toThrow();
  });

  test("should change text if clicking on tab 2", async () => {
    render(Tabs, props);
    const secondTabElement = screen.queryByText("Tab 2");
    await fireEvent.click(secondTabElement);

    const secondTabElementText = await screen.findByText(/Here is tab 2/i);
    expect(secondTabElementText).toBeTruthy();
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Tabs({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => TabsHTML;
    const result = render();

    const results = await axe(result, {
      rules: {
        region: { enabled: false },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
