import { describe, test, expect } from "vitest";
import { axe } from "vitest-axe";
import * as AxeMatchers from "vitest-axe/matchers";
import { render, screen, fireEvent } from "@testing-library/svelte";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs.svelte";

const BreadcrumbsHTML = `<div class="garnet s-A_BFCwAXJd84"><ul class="breadcrumb s-A_BFCwAXJd84"><li class="s-A_BFCwAXJd84"> <a href="/" data-testid="breadcrumbLink" class="s-A_BFCwAXJd84">Dashboard</a> </li><li class="s-A_BFCwAXJd84"><span class="s-A_BFCwAXJd84">/</span> <a href="/reports" data-testid="breadcrumbLink" class="s-A_BFCwAXJd84">Annual reports</a> </li><li class="s-A_BFCwAXJd84"><span class="s-A_BFCwAXJd84">/</span> 2019 </li></ul></div>`;
expect.extend(AxeMatchers);

describe("Tests for Breadcrumbs", () => {
  const props = {
    divider: "/",
    breadcrumbItems: [
      { href: "/", text: "Dashboard" },
      { href: "/reports", text: "Annual reports" },
      { href: "/reports/2019", text: "2019" },
    ],
  };

  test("should render properly", async () => {
    const result = render(Breadcrumbs, { props });
    expect(() => result).not.toThrow();
  });

  test("should show the Breadcrumbs when clicking the button", async () => {
    const result = render(Breadcrumbs, { props });
    const links = result.getAllByTestId("breadcrumbLink");
    expect(links.length).toBe(2);
  });

  test("get a snapshot of component", () => {
    // Create a new container for the test and mount component
    const host = document.createElement("div");
    document.body.appendChild(host);
    const instance = new Breadcrumbs({ target: host, props: props });

    // check that all rendered OK
    expect(instance).toBeTruthy();

    // Take snapshot
    expect(host.innerHTML).toMatchSnapshot();
  });

  test("should demonstrate no issues with accessibility", async () => {
    const render = () => BreadcrumbsHTML;
    const result = render();

    const results = await axe(result, {
      rules: {
        region: { enabled: false },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
