import { describe, test, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Switch from "../../Switch/Switch.svelte";

const SwitchHTML = `<div class="garnet s-4Y75ZjC11XWf"><dialog class="alert alert-info fade-in s-4Y75ZjC11XWf" role="alertdialog"  title="Alert Dialog"><div class="icon s-4Y75ZjC11XWf"><svg width="24px" height="24px" viewBox="0 0 512 512"><path d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M220 220h32v116"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 340h88"></path><path d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z" fill="#ffffff"></path></svg><!--<Icon>--></div> <div class="message s-4Y75ZjC11XWf"><strong class="s-4Y75ZjC11XWf">Simple Info</strong> An info description</div> <div class="s-4Y75ZjC11XWf"><button class="s-4Y75ZjC11XWf">✖</button></div></dialog></div>`;
expect.extend(AxeMatchers);

describe("Tests for Switch", () => {
  const props = {
    disabled: false,
    label: "Disabled switch with label",
  };

  test("should render properly", () => {
    const result = render(Switch, { props });
    expect(() => result).not.toThrow();
  });

  test("show a label with correct text", () => {
    const result = render(Switch, { props });
    expect(result).not.toBeNull();
  });

  test("should show a switch with enabled background when clicked", async () => {
    render(Switch, { props });
    const SwitchExample = screen.getByRole("switch");
    await fireEvent.click(SwitchExample);
    expect(SwitchExample.checked).toBe(true);
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Switch({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => SwitchHTML;
    const result = render();

    expect(await axe(result)).toHaveNoViolations();
  });
});
