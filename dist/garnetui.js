var oe = Object.defineProperty;
var ue = (t, e, n) => e in t ? oe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var m = (t, e, n) => (ue(t, typeof e != "symbol" ? e + "" : e, n), n);
function v() {
}
function K(t) {
  return t();
}
function q() {
  return /* @__PURE__ */ Object.create(null);
}
function z(t) {
  t.forEach(K);
}
function Q(t) {
  return typeof t == "function";
}
function W(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function ae(t) {
  return Object.keys(t).length === 0;
}
function y(t, e) {
  t.appendChild(e);
}
function X(t, e, n) {
  const i = ce(t);
  if (!i.getElementById(e)) {
    const s = _("style");
    s.id = e, s.textContent = n, fe(i, s);
  }
}
function ce(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function fe(t, e) {
  return y(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function g(t, e, n) {
  t.insertBefore(e, n || null);
}
function b(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function ee(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function _(t) {
  return document.createElement(t);
}
function te(t) {
  return document.createTextNode(t);
}
function I() {
  return te(" ");
}
function B(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function h(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function de(t) {
  return Array.from(t.childNodes);
}
function he(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function T(t, e) {
  t.value = e ?? "";
}
function f(t, e, n, i) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "");
}
function M(t, e, n) {
  t.classList.toggle(e, !!n);
}
function $e(t) {
  const e = {};
  return t.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      e[n.slot || "default"] = !0;
    }
  ), e;
}
let D;
function j(t) {
  D = t;
}
function me(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const w = [], R = [];
let E = [];
const H = [], _e = /* @__PURE__ */ Promise.resolve();
let P = !1;
function be() {
  P || (P = !0, _e.then($));
}
function S(t) {
  E.push(t);
}
const L = /* @__PURE__ */ new Set();
let k = 0;
function $() {
  if (k !== 0)
    return;
  const t = D;
  do {
    try {
      for (; k < w.length; ) {
        const e = w[k];
        k++, j(e), ge(e.$$);
      }
    } catch (e) {
      throw w.length = 0, k = 0, e;
    }
    for (j(null), w.length = 0, k = 0; R.length; )
      R.pop()();
    for (let e = 0; e < E.length; e += 1) {
      const n = E[e];
      L.has(n) || (L.add(n), n());
    }
    E.length = 0;
  } while (w.length);
  for (; H.length; )
    H.pop()();
  P = !1, L.clear(), j(t);
}
function ge(t) {
  if (t.fragment !== null) {
    t.update(), z(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(S);
  }
}
function pe(t) {
  const e = [], n = [];
  E.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), E = e;
}
const ve = /* @__PURE__ */ new Set();
function ye(t, e) {
  t && t.i && (ve.delete(t), t.i(e));
}
function C(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function ke(t, e, n) {
  const { fragment: i, after_update: s } = t.$$;
  i && i.m(e, n), S(() => {
    const r = t.$$.on_mount.map(K).filter(Q);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : z(r), t.$$.on_mount = [];
  }), s.forEach(S);
}
function we(t, e) {
  const n = t.$$;
  n.fragment !== null && (pe(n.after_update), z(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ee(t, e) {
  t.$$.dirty[0] === -1 && (w.push(t), be(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ne(t, e, n, i, s, r, l = null, o = [-1]) {
  const u = D;
  j(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: v,
    not_equal: s,
    bound: q(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: q(),
    dirty: o,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  l && l(a.root);
  let p = !1;
  if (a.ctx = n ? n(t, e.props || {}, (c, N, ...d) => {
    const A = d.length ? d[0] : N;
    return a.ctx && s(a.ctx[c], a.ctx[c] = A) && (!a.skip_bound && a.bound[c] && a.bound[c](A), p && Ee(t, c)), N;
  }) : [], a.update(), p = !0, z(a.before_update), a.fragment = i ? i(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = de(e.target);
      a.fragment && a.fragment.l(c), c.forEach(b);
    } else
      a.fragment && a.fragment.c();
    e.intro && ye(t.$$.fragment), ke(t, e.target, e.anchor), $();
  }
  j(u);
}
let ie;
typeof HTMLElement == "function" && (ie = class extends HTMLElement {
  constructor(e, n, i) {
    super();
    /** The Svelte component constructor */
    m(this, "$$ctor");
    /** Slots */
    m(this, "$$s");
    /** The Svelte component instance */
    m(this, "$$c");
    /** Whether or not the custom element is connected */
    m(this, "$$cn", !1);
    /** Component props data */
    m(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    m(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    m(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    m(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    m(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, n, i) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const s = this.$$c.$on(e, n);
      this.$$l_u.set(n, s);
    }
    super.addEventListener(e, n, i);
  }
  removeEventListener(e, n, i) {
    if (super.removeEventListener(e, n, i), this.$$c) {
      const s = this.$$l_u.get(n);
      s && (s(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(r) {
        return () => {
          let l;
          return {
            c: function() {
              l = _("slot"), r !== "default" && h(l, "name", r);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(a, p) {
              g(a, l, p);
            },
            d: function(a) {
              a && b(l);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = $e(this);
      for (const r of this.$$s)
        r in i && (n[r] = [e(r)]);
      for (const r of this.attributes) {
        const l = this.$$g_p(r.name);
        l in this.$$d || (this.$$d[l] = O(l, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const s = () => {
        this.$$r = !0;
        for (const r in this.$$p_d)
          if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
            const l = O(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, l);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(s), s();
      for (const r in this.$$l)
        for (const l of this.$$l[r]) {
          const o = this.$$c.$on(r, l);
          this.$$l_u.set(l, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, n, i) {
    var s;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = O(e, i, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function O(t, e, n, i) {
  var r;
  const s = (r = n[t]) == null ? void 0 : r.type;
  if (e = s === "Boolean" && typeof e != "boolean" ? e != null : e, !i || !n[t])
    return e;
  if (i === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function se(t, e, n, i, s, r) {
  let l = class extends ie {
    constructor() {
      super(t, n, s), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((o) => {
    Object.defineProperty(l.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(u) {
        var a;
        u = O(o, u, e), this.$$d[o] = u, (a = this.$$c) == null || a.$set({ [o]: u });
      }
    });
  }), i.forEach((o) => {
    Object.defineProperty(l.prototype, o, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[o];
      }
    });
  }), r && (l = r(l)), t.element = /** @type {any} */
  l, l;
}
class le {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    m(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    m(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    we(this, 1), this.$destroy = v;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!Q(n))
      return v;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const s = i.indexOf(n);
      s !== -1 && i.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !ae(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ne = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ne);
function je(t) {
  X(t, "svelte-vac18q", '.garnet.svelte-vac18q{display:flex;flex-direction:row;font-family:Arial, Helvetica, sans-serif}input[type="text"].svelte-vac18q{width:200px;border-radius:4px;border-color:#733635;height:30px;outline:none}label.svelte-vac18q{padding-right:10px;display:flex;align-self:center}input.svelte-vac18q:disabled{cursor:not-allowed}');
}
function Y(t) {
  let e, n;
  return {
    c() {
      e = _("label"), n = te(
        /*label*/
        t[1]
      ), h(
        e,
        "for",
        /*fieldID*/
        t[5]
      ), h(e, "class", "svelte-vac18q");
    },
    m(i, s) {
      g(i, e, s), y(e, n);
    },
    p(i, s) {
      s & /*label*/
      2 && he(
        n,
        /*label*/
        i[1]
      ), s & /*fieldID*/
      32 && h(
        e,
        "for",
        /*fieldID*/
        i[5]
      );
    },
    d(i) {
      i && b(e);
    }
  };
}
function ze(t) {
  let e, n, i, s, r, l = (
    /*label*/
    t[1] && Y(t)
  );
  return {
    c() {
      e = _("div"), l && l.c(), n = I(), i = _("input"), h(i, "type", "text"), h(
        i,
        "id",
        /*fieldID*/
        t[5]
      ), h(
        i,
        "name",
        /*inputName*/
        t[4]
      ), h(
        i,
        "placeholder",
        /*placeholder*/
        t[2]
      ), i.disabled = /*disabled*/
      t[3], h(i, "class", "svelte-vac18q"), h(e, "class", "garnet svelte-vac18q");
    },
    m(o, u) {
      g(o, e, u), l && l.m(e, null), y(e, n), y(e, i), T(
        i,
        /*value*/
        t[0]
      ), s || (r = [
        B(
          i,
          "input",
          /*input_input_handler*/
          t[7]
        ),
        B(
          i,
          "input",
          /*input_handler*/
          t[6]
        )
      ], s = !0);
    },
    p(o, [u]) {
      /*label*/
      o[1] ? l ? l.p(o, u) : (l = Y(o), l.c(), l.m(e, n)) : l && (l.d(1), l = null), u & /*fieldID*/
      32 && h(
        i,
        "id",
        /*fieldID*/
        o[5]
      ), u & /*inputName*/
      16 && h(
        i,
        "name",
        /*inputName*/
        o[4]
      ), u & /*placeholder*/
      4 && h(
        i,
        "placeholder",
        /*placeholder*/
        o[2]
      ), u & /*disabled*/
      8 && (i.disabled = /*disabled*/
      o[3]), u & /*value*/
      1 && i.value !== /*value*/
      o[0] && T(
        i,
        /*value*/
        o[0]
      );
    },
    i: v,
    o: v,
    d(o) {
      o && b(e), l && l.d(), s = !1, z(r);
    }
  };
}
function Ae(t, e, n) {
  let { label: i = "Label:" } = e, { placeholder: s = "" } = e, { disabled: r = !1 } = e, { inputName: l = "" } = e, { fieldID: o = "" } = e, { value: u = void 0 } = e;
  function a(c) {
    me.call(this, t, c);
  }
  function p() {
    u = this.value, n(0, u);
  }
  return t.$$set = (c) => {
    "label" in c && n(1, i = c.label), "placeholder" in c && n(2, s = c.placeholder), "disabled" in c && n(3, r = c.disabled), "inputName" in c && n(4, l = c.inputName), "fieldID" in c && n(5, o = c.fieldID), "value" in c && n(0, u = c.value);
  }, [
    u,
    i,
    s,
    r,
    l,
    o,
    a,
    p
  ];
}
class Oe extends le {
  constructor(e) {
    super(), ne(
      this,
      e,
      Ae,
      ze,
      W,
      {
        label: 1,
        placeholder: 2,
        disabled: 3,
        inputName: 4,
        fieldID: 5,
        value: 0
      },
      je
    );
  }
  get label() {
    return this.$$.ctx[1];
  }
  set label(e) {
    this.$$set({ label: e }), $();
  }
  get placeholder() {
    return this.$$.ctx[2];
  }
  set placeholder(e) {
    this.$$set({ placeholder: e }), $();
  }
  get disabled() {
    return this.$$.ctx[3];
  }
  set disabled(e) {
    this.$$set({ disabled: e }), $();
  }
  get inputName() {
    return this.$$.ctx[4];
  }
  set inputName(e) {
    this.$$set({ inputName: e }), $();
  }
  get fieldID() {
    return this.$$.ctx[5];
  }
  set fieldID(e) {
    this.$$set({ fieldID: e }), $();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(e) {
    this.$$set({ value: e }), $();
  }
}
customElements.define("garnet-input", se(Oe, { label: {}, placeholder: {}, disabled: { type: "Boolean" }, inputName: {}, fieldID: {}, value: {} }, [], [], !0));
function Ce(t) {
  X(t, "svelte-umkm7n", `.garnet.svelte-umkm7n{display:flex}.circle.svelte-umkm7n{height:var(--size);width:var(--size);border-color:var(--color) transparent var(--color) var(--color);border-width:calc(var(--size) / 12);border-style:solid;border-radius:50%;animation:var(--duration) linear 0s infinite normal none running\r
    svelte-umkm7n-rotateCircle}@keyframes svelte-umkm7n-rotateCircle{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.jumper.svelte-umkm7n{height:var(--size);width:var(--size);border-radius:100%;animation-fill-mode:both;position:absolute;opacity:0;background-color:var(--color);animation:svelte-umkm7n-bounce var(--duration) linear infinite}@keyframes svelte-umkm7n-bounce{0%{opacity:0;transform:scale(0)}5%{opacity:1}100%{opacity:0;transform:scale(1)}}.ring.svelte-umkm7n{position:absolute;border:2px solid var(--color);border-radius:50%;background-color:transparent;animation:svelte-umkm7n-motion var(--duration) ease infinite}.pause-animation.svelte-umkm7n{animation-play-state:paused}@keyframes svelte-umkm7n-motion{0%{transform:translateY(var(--motionOne))}50%{transform:translateY(var(--motionTwo))}100%{transform:translateY(var(--motionThree))}}`);
}
function J(t, e, n) {
  const i = t.slice();
  return i[9] = e[n], i;
}
function U(t, e, n) {
  const i = t.slice();
  return i[9] = e[n], i;
}
function V(t) {
  let e, n;
  return {
    c() {
      e = _("div"), n = _("div"), h(n, "class", "circle svelte-umkm7n"), f(
        n,
        "--size",
        /*size*/
        t[2] + "px"
      ), f(
        n,
        "--color",
        /*color*/
        t[0]
      ), f(
        n,
        "--duration",
        /*duration*/
        t[1]
      );
    },
    m(i, s) {
      g(i, e, s), y(e, n);
    },
    p(i, s) {
      s & /*size*/
      4 && f(
        n,
        "--size",
        /*size*/
        i[2] + "px"
      ), s & /*color*/
      1 && f(
        n,
        "--color",
        /*color*/
        i[0]
      ), s & /*duration*/
      2 && f(
        n,
        "--duration",
        /*duration*/
        i[1]
      );
    },
    d(i) {
      i && b(e);
    }
  };
}
function Z(t) {
  let e, n = C(
    /*range*/
    t[8](3, 1)
  ), i = [];
  for (let s = 0; s < n.length; s += 1)
    i[s] = x(U(t, n, s));
  return {
    c() {
      e = _("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      f(
        e,
        "--size",
        /*size*/
        t[2] + "px"
      ), f(
        e,
        "--color",
        /*color*/
        t[0]
      ), f(
        e,
        "--duration",
        /*duration*/
        t[1]
      );
    },
    m(s, r) {
      g(s, e, r);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(e, null);
    },
    p(s, r) {
      if (r & /*range*/
      256) {
        n = C(
          /*range*/
          s[8](3, 1)
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const o = U(s, n, l);
          i[l] ? i[l].p(o, r) : (i[l] = x(o), i[l].c(), i[l].m(e, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = n.length;
      }
      r & /*size*/
      4 && f(
        e,
        "--size",
        /*size*/
        s[2] + "px"
      ), r & /*color*/
      1 && f(
        e,
        "--color",
        /*color*/
        s[0]
      ), r & /*duration*/
      2 && f(
        e,
        "--duration",
        /*duration*/
        s[1]
      );
    },
    d(s) {
      s && b(e), ee(i, s);
    }
  };
}
function x(t) {
  let e;
  return {
    c() {
      e = _("div"), h(e, "class", "jumper svelte-umkm7n"), f(e, "animation-delay", 1 / 3 * /*version*/
      (t[9] - 1) + "px");
    },
    m(n, i) {
      g(n, e, i);
    },
    p: v,
    d(n) {
      n && b(e);
    }
  };
}
function F(t) {
  let e, n = C(
    /*range*/
    t[8](6, 0)
  ), i = [];
  for (let s = 0; s < n.length; s += 1)
    i[s] = G(J(t, n, s));
  return {
    c() {
      e = _("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      f(e, "--size", "60px"), f(
        e,
        "--color",
        /*color*/
        t[0]
      ), f(e, "--motionOne", "-12px"), f(e, "--motionTwo", "15px"), f(e, "--motionThree", "-12px"), f(e, "--duration", "2.5s");
    },
    m(s, r) {
      g(s, e, r);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(e, null);
    },
    p(s, r) {
      if (r & /*range, durationNum, durationUnit, size, unit, pause*/
      500) {
        n = C(
          /*range*/
          s[8](6, 0)
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const o = J(s, n, l);
          i[l] ? i[l].p(o, r) : (i[l] = G(o), i[l].c(), i[l].m(e, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = n.length;
      }
      r & /*color*/
      1 && f(
        e,
        "--color",
        /*color*/
        s[0]
      );
    },
    d(s) {
      s && b(e), ee(i, s);
    }
  };
}
function G(t) {
  let e;
  return {
    c() {
      e = _("div"), h(e, "class", "ring svelte-umkm7n"), f(
        e,
        "animation-delay",
        /*version*/
        t[9] * (+/*durationNum*/
        t[7] / 25) + /*durationUnit*/
        t[6]
      ), f(
        e,
        "width",
        /*version*/
        t[9] * (+/*size*/
        t[2] / 6) + /*unit*/
        t[4]
      ), f(
        e,
        "height",
        /*version*/
        t[9] * (+/*size*/
        t[2] / 6) / 2 + /*unit*/
        t[4]
      ), M(
        e,
        "pause-animation",
        /*pause*/
        t[5]
      );
    },
    m(n, i) {
      g(n, e, i);
    },
    p(n, i) {
      i & /*size, unit*/
      20 && f(
        e,
        "width",
        /*version*/
        n[9] * (+/*size*/
        n[2] / 6) + /*unit*/
        n[4]
      ), i & /*size, unit*/
      20 && f(
        e,
        "height",
        /*version*/
        n[9] * (+/*size*/
        n[2] / 6) / 2 + /*unit*/
        n[4]
      ), i & /*pause*/
      32 && M(
        e,
        "pause-animation",
        /*pause*/
        n[5]
      );
    },
    d(n) {
      n && b(e);
    }
  };
}
function Le(t) {
  let e, n, i, s = (
    /*variant*/
    t[3] == "circle" && V(t)
  ), r = (
    /*variant*/
    t[3] == "jumper" && Z(t)
  ), l = (
    /*variant*/
    t[3] == "jellyfish" && F(t)
  );
  return {
    c() {
      e = _("div"), s && s.c(), n = I(), r && r.c(), i = I(), l && l.c(), h(e, "class", "garnet svelte-umkm7n");
    },
    m(o, u) {
      g(o, e, u), s && s.m(e, null), y(e, n), r && r.m(e, null), y(e, i), l && l.m(e, null);
    },
    p(o, [u]) {
      /*variant*/
      o[3] == "circle" ? s ? s.p(o, u) : (s = V(o), s.c(), s.m(e, n)) : s && (s.d(1), s = null), /*variant*/
      o[3] == "jumper" ? r ? r.p(o, u) : (r = Z(o), r.c(), r.m(e, i)) : r && (r.d(1), r = null), /*variant*/
      o[3] == "jellyfish" ? l ? l.p(o, u) : (l = F(o), l.c(), l.m(e, null)) : l && (l.d(1), l = null);
    },
    i: v,
    o: v,
    d(o) {
      o && b(e), s && s.d(), r && r.d(), l && l.d();
    }
  };
}
function Ie(t, e, n) {
  var N;
  let { color: i = "#733635" } = e, { duration: s = "0.75s" } = e, { size: r = "60" } = e, { variant: l = "" } = e, { unit: o = "px" } = e, { pause: u = !1 } = e, a = ((N = s.match(/[a-zA-Z]/)) == null ? void 0 : N[0]) ?? "s", p = s.replace(/[a-zA-Z]/, "");
  const c = (d, A = 0) => [...Array(d).keys()].map((re) => re + A);
  return t.$$set = (d) => {
    "color" in d && n(0, i = d.color), "duration" in d && n(1, s = d.duration), "size" in d && n(2, r = d.size), "variant" in d && n(3, l = d.variant), "unit" in d && n(4, o = d.unit), "pause" in d && n(5, u = d.pause);
  }, [i, s, r, l, o, u, a, p, c];
}
class Pe extends le {
  constructor(e) {
    super(), ne(
      this,
      e,
      Ie,
      Le,
      W,
      {
        color: 0,
        duration: 1,
        size: 2,
        variant: 3,
        unit: 4,
        pause: 5
      },
      Ce
    );
  }
  get color() {
    return this.$$.ctx[0];
  }
  set color(e) {
    this.$$set({ color: e }), $();
  }
  get duration() {
    return this.$$.ctx[1];
  }
  set duration(e) {
    this.$$set({ duration: e }), $();
  }
  get size() {
    return this.$$.ctx[2];
  }
  set size(e) {
    this.$$set({ size: e }), $();
  }
  get variant() {
    return this.$$.ctx[3];
  }
  set variant(e) {
    this.$$set({ variant: e }), $();
  }
  get unit() {
    return this.$$.ctx[4];
  }
  set unit(e) {
    this.$$set({ unit: e }), $();
  }
  get pause() {
    return this.$$.ctx[5];
  }
  set pause(e) {
    this.$$set({ pause: e }), $();
  }
}
customElements.define("garnet-spinner", se(Pe, { color: {}, duration: {}, size: {}, variant: {}, unit: {}, pause: { type: "Boolean" } }, [], [], !0));
export {
  Oe as Input,
  Pe as Spinner
};
