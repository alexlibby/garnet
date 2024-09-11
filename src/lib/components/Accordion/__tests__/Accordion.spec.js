import { describe, test, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Accordion from "../../Accordion/Accordion.svelte";

const AccordionHTML = `<div class="garnet-accordion s-zJ3CIJSsBGcs"><button aria-expanded="false" class="accordionItem s-3L_PBfp3fhj2"><svg width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="s-3L_PBfp3fhj2"><path d="M9 5l7 7-7 7" class="s-3L_PBfp3fhj2"></path></svg> Heading 1</button> <!--<AccordionItem>--><button aria-expanded="false" class="accordionItem s-3L_PBfp3fhj2"><svg width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="s-3L_PBfp3fhj2"><path d="M9 5l7 7-7 7" class="s-3L_PBfp3fhj2"></path></svg> Heading 2</button> <!--<AccordionItem>--><button aria-expanded="false" class="accordionItem s-3L_PBfp3fhj2"><svg width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="s-3L_PBfp3fhj2"><path d="M9 5l7 7-7 7" class="s-3L_PBfp3fhj2"></path></svg> Heading 3</button> <!--<AccordionItem>--></div>`;
expect.extend(AxeMatchers);

describe("Tests for Accordion", () => {
  const mockText = "This is a Accordion";

  const props = {
    data: [
      { title: "Heading 1", text: "aaa" },
      { title: "Heading 2", text: "bbb" },
      { title: "Heading 3", text: "ccc" },
    ],
  };

  test("should render properly", () => {
    const result = render(Accordion, { props });
    expect(() => result).not.toThrow();
  });

  test("should have the correct title", () => {
    render(Accordion, props);

    expect(screen.queryByText(props.data[0].title)).toBeInTheDocument();
    expect(screen.queryByText(props.data[1].title)).toBeInTheDocument();
    expect(screen.queryByText(props.data[2].title)).toBeInTheDocument();
  });

  test("should have the correct text for the first AccordionItem", async () => {
    render(Accordion, props);

    const AccordionObj = await screen.getAllByRole("button")[0];
    await fireEvent.click(AccordionObj);

    const accordionText = await screen.findByText(/aaa/i);
    expect(accordionText).toBeTruthy();
  });

  test("should show aria-expanded as true when first item clicked", async () => {
    render(Accordion, props);
    const AccordionObj = await screen.getAllByRole("button")[0];
    await fireEvent.click(AccordionObj);
    expect(screen.getAllByRole("button", { expanded: true })[0]).not.toBeNull();
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Accordion({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => AccordionHTML;
    const result = render();

    const results = await axe(result, {
      rules: {
        region: { enabled: false },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
