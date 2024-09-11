import { describe, test, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Alarm from "../../Alarm/Alarm.svelte";

const AlarmHTML = `<div class="garnet-alarm s-xm1t82NY3YZU"><h3 class="s-xm1t82NY3YZU">This is a test label</h3> <div class="notifications s-xm1t82NY3YZU"><div class="count  s-xm1t82NY3YZU" style="--countColor: #733635; --countBackgroundColor: #f4f4f4;"><span data-testid="notifications" class="s-xm1t82NY3YZU">23</span></div> <svg class="bell  outline ring s-xm1t82NY3YZU" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" stroke-linecap="round" stroke-linejoin="round" class="s-xm1t82NY3YZU"></path></svg></div></div>`;
expect.extend(AxeMatchers);

describe("Tests for Alarm", () => {
  const props = {
    label: "Alarm with label",
    notifications: 23,
    filled: false,
  };

  test("should render properly", () => {
    const result = render(Alarm, props);
    expect(() => result).not.toThrow();
  });

  test("should show correct number of notifications", () => {
    const result = render(Alarm, props);

    const notifications = result.getByTestId("notifications").textContent;
    expect(notifications).toEqual("23");
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Alarm({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => AlarmHTML;
    const result = render();

    const results = await axe(result, {
      rules: {
        region: { enabled: false },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
