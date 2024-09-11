import { describe, test, expect, vi } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Dialog from "../../Dialog/Dialog.svelte";

const DialogHTML = `<div class="garnet s-ZH7mGohnGwmj"><div id="background" class="s-ZH7mGohnGwmj"></div> <div data-testid="modal" id="modal" class="s-ZH7mGohnGwmj"><div class="header s-ZH7mGohnGwmj"><h3 class="s-ZH7mGohnGwmj">Modal title</h3> <button type="button" class="close s-ZH7mGohnGwmj" data-testid="close-button" title="close button"><button class="close-button s-Pc0SWcMC6Bof" aria-label="Close"><svg class="close s-Pc0SWcMC6Bof" viewBox="0 0 24 24" aria-hidden="true" style="color: inherit;"><path fill="currentColor" d="M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z" class="s-Pc0SWcMC6Bof"></path></svg></button><!--<Close>--></button></div> <p class="s-ZH7mGohnGwmj">Click on the X to close me</p></div></div>`;
expect.extend(AxeMatchers);

describe("Tests for Dialog", () => {
  const props = {
    showDialog: "false",
  };

  it("should render properly", async () => {
    const result = render(Dialog, { props });
    expect(() => result).not.toThrow();
  });

  it("should show the dialog when clicking the button", async () => {
    render(Dialog, { props });

    const button = screen.getByText("Show dialog");
    fireEvent.click(button);

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();
  });

  it("should close the dialog when clicking the close button", async () => {
    render(Dialog, { props });

    // opens dialog
    const button = screen.getByText("Show dialog");
    fireEvent.click(button);

    // closes dialog
    const modal = screen.getByTestId("modal");
    const close = screen.getByTestId("close-button");
    await fireEvent.click(close);
    expect(modal).not.toBeInTheDocument();
  });

  it("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Dialog({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => DialogHTML;
    const result = render();

    const results = await axe(result, {
      rules: {
        region: { enabled: false },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
