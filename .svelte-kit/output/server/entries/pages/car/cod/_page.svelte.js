import { i as derived, c as attributes, j as bind_props, s as spread_props, p as props_id, k as fallback, l as slot, m as attr_style, g as escape_html, a as attr, e as ensure_array_like, o as attr_class } from "../../../../chunks/index.js";
import { s as styleToString, m as mergeProps, C as Context, a as attachRef, E as ENTER, S as SPACE, b as boolToEmptyStrOrUndef, g as getDataChecked, c as boolToStr, d as getAriaChecked, e as boolToTrueOrUndef, f as createBitsAttrs, h as createId, n as noop, i as boxWith, j as cn, k as Segment, A as Accordion } from "../../../../chunks/index2.js";
const srOnlyStyles = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
const srOnlyStylesString = styleToString(srOnlyStyles);
function Hidden_input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { value = void 0, $$slots, $$events, ...restProps } = $$props;
    const mergedProps = derived(() => mergeProps(restProps, {
      "aria-hidden": "true",
      tabindex: -1,
      style: srOnlyStylesString
    }));
    if (mergedProps().type === "checkbox") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<input${attributes({ ...mergedProps(), value }, void 0, void 0, void 0, 4)}/>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<input${attributes({ value, ...mergedProps() }, void 0, void 0, void 0, 4)}/>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { value });
  });
}
const switchAttrs = createBitsAttrs({ component: "switch", parts: ["root", "thumb"] });
const SwitchRootContext = new Context("Switch.Root");
class SwitchRootState {
  static create(opts) {
    return SwitchRootContext.set(new SwitchRootState(opts));
  }
  opts;
  attachment;
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(opts.ref);
    this.onkeydown = this.onkeydown.bind(this);
    this.onclick = this.onclick.bind(this);
  }
  #toggle() {
    this.opts.checked.current = !this.opts.checked.current;
  }
  onkeydown(e) {
    if (!(e.key === ENTER || e.key === SPACE) || this.opts.disabled.current) return;
    e.preventDefault();
    this.#toggle();
  }
  onclick(_) {
    if (this.opts.disabled.current) return;
    this.#toggle();
  }
  #sharedProps = derived(() => ({
    "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
    "data-state": getDataChecked(this.opts.checked.current),
    "data-required": boolToEmptyStrOrUndef(this.opts.required.current)
  }));
  get sharedProps() {
    return this.#sharedProps();
  }
  set sharedProps($$value) {
    return this.#sharedProps($$value);
  }
  #snippetProps = derived(() => ({ checked: this.opts.checked.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    ...this.sharedProps,
    id: this.opts.id.current,
    role: "switch",
    disabled: boolToTrueOrUndef(this.opts.disabled.current),
    "aria-checked": getAriaChecked(this.opts.checked.current),
    "aria-required": boolToStr(this.opts.required.current),
    [switchAttrs.root]: "",
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SwitchInputState {
  static create() {
    return new SwitchInputState(SwitchRootContext.get());
  }
  root;
  #shouldRender = derived(() => this.root.opts.name.current !== void 0);
  get shouldRender() {
    return this.#shouldRender();
  }
  set shouldRender($$value) {
    return this.#shouldRender($$value);
  }
  constructor(root) {
    this.root = root;
  }
  #props = derived(() => ({
    type: "checkbox",
    name: this.root.opts.name.current,
    value: this.root.opts.value.current,
    checked: this.root.opts.checked.current,
    disabled: this.root.opts.disabled.current,
    required: this.root.opts.required.current
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class SwitchThumbState {
  static create(opts) {
    return new SwitchThumbState(opts, SwitchRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(opts.ref);
  }
  #snippetProps = derived(() => ({ checked: this.root.opts.checked.current }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    ...this.root.sharedProps,
    id: this.opts.id.current,
    [switchAttrs.thumb]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function Switch_input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const inputState = SwitchInputState.create();
    if (inputState.shouldRender) {
      $$renderer2.push("<!--[0-->");
      Hidden_input($$renderer2, spread_props([inputState.props]));
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Switch($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      child,
      children,
      ref = null,
      id = createId(uid),
      disabled = false,
      required = false,
      checked = false,
      value = "on",
      name = void 0,
      type = "button",
      onCheckedChange = noop,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const rootState = SwitchRootState.create({
      checked: boxWith(() => checked, (v) => {
        checked = v;
        onCheckedChange?.(v);
      }),
      disabled: boxWith(() => disabled ?? false),
      required: boxWith(() => required),
      value: boxWith(() => value),
      name: boxWith(() => name),
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = derived(() => mergeProps(restProps, rootState.props, { type }));
    if (child) {
      $$renderer2.push("<!--[0-->");
      child($$renderer2, { props: mergedProps(), ...rootState.snippetProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<button${attributes({ ...mergedProps() })}>`);
      children?.($$renderer2, rootState.snippetProps);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]--> `);
    Switch_input($$renderer2);
    $$renderer2.push(`<!---->`);
    bind_props($$props, { ref, checked });
  });
}
function Switch_thumb($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      child,
      children,
      ref = null,
      id = createId(uid),
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const thumbState = SwitchThumbState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = derived(() => mergeProps(restProps, thumbState.props));
    if (child) {
      $$renderer2.push("<!--[0-->");
      child($$renderer2, { props: mergedProps(), ...thumbState.snippetProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<span${attributes({ ...mergedProps() })}>`);
      children?.($$renderer2, thumbState.snippetProps);
      $$renderer2.push(`<!----></span>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Switch_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let checked = fallback($$props["checked"], false);
    let name = $$props["name"];
    let classes = fallback($$props["classes"], "");
    let onCheckedChange = $$props["onCheckedChange"];
    function handleChange(value) {
      onCheckedChange?.({ checked: value });
    }
    $$renderer2.push(`<label class="inline-flex items-center gap-2 cursor-pointer select-none">`);
    Switch($$renderer2, {
      checked,
      onCheckedChange: handleChange,
      name,
      class: cn("data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 shadow-xs peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent outline-none transition-all focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", classes),
      children: ($$renderer3) => {
        Switch_thumb($$renderer3, {
          class: "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        });
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----> <!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></label>`);
    bind_props($$props, { checked, name, classes, onCheckedChange });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, children } = $$props;
    let stratName = "healerout";
    let alliance = void 0;
    let role = void 0;
    let party = void 0;
    let strat = derived(() => getStrat(stratName, alliance, role, party));
    let stratPackage = derived(() => data.strats.find((strat2) => strat2.stratName === stratName));
    let spotlight = true;
    let alignment = "original";
    let accordion = ["swaps"];
    let optionsString = derived(() => getOptionsString(stratName, alliance, role, party));
    function getStrat(stratName2, alliance2, role2, party2) {
      if (!alliance2 || !role2 || !party2) return "";
      const stratPackage2 = data.strats.find((strat2) => strat2.stratName === stratName2);
      const allianceRolePartyStrat = stratPackage2?.strats.find((strat2) => strat2.alliance === alliance2 && strat2.role === role2 && strat2.party === party2);
      if (!allianceRolePartyStrat) return `Couldn't find ${stratName2} strat for Alliance ${alliance2} ${role2} ${party2}`;
      return allianceRolePartyStrat;
    }
    function getMask(step) {
      if (spotlight) {
        if (step.alignmentMasks && step.alignmentMasks[alignment]) {
          return step.alignmentMasks[alignment];
        }
        return step.mask || "";
      }
      return "";
    }
    function getOptionsString(stratName2, alliance2, role2, party2) {
      if (!alliance2 || !role2 || !party2) return "";
      const stratNames = { healerout: "HealerOut" };
      let roleAbbrev = "";
      if (role2 === "Tank") {
        roleAbbrev = party2 === 1 ? "MT" : "OT";
      } else {
        roleAbbrev = role2.charAt(0).toUpperCase() + party2.toString();
      }
      return `${stratNames[stratName2]} - Alliance ${alliance2} ${roleAbbrev}`;
    }
    $$renderer2.push(`<div class="container grow px-4 mx-auto mb-6"><div class="container"><div class="mb-6"><div class="preset-typo-display-1 mt-2 lg:mt-0 lg:-mb-2">La Tour de Ténèbres (Chaotique)</div> <div class="text-xl lg:text-3xl text-surface-400">Patch 7.1</div></div> <div class="flex flex-wrap min-w-full justify-between mb-8 card border-[1px] border-surface-200-800 p-4"><div class="space-y-5 v-full dark"><div class="card preset-outlined-warning-500 gap-4 p-4"><p>Depuis le Patch 7.16 et <strong>pour le client anglais uniquement</strong>, les attaques "Lateral-core Phaser" et "Core-lateral Phaser" ont été interverties</p> <p>Lateral-core Phaser = Allez devant d'abord, sur les côtés ensuite</p> <p>Core-lateral Phaser = Allez sur les côtés d'abord, devant ensuite</p></div> <div><div class="text-xl mb-2">Dans quelle alliance êtes-vous ?</div> `);
    Segment($$renderer2, {
      name: "alliance",
      value: alliance,
      onValueChange: (e) => alliance = e.value,
      children: ($$renderer3) => {
        if (Segment.Item) {
          $$renderer3.push("<!--[-->");
          Segment.Item($$renderer3, {
            value: "A",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->A`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push("<!--]-->");
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push("<!--]-->");
        }
        $$renderer3.push(` `);
        if (Segment.Item) {
          $$renderer3.push("<!--[-->");
          Segment.Item($$renderer3, {
            value: "B",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->B`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push("<!--]-->");
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push("<!--]-->");
        }
        $$renderer3.push(` `);
        if (Segment.Item) {
          $$renderer3.push("<!--[-->");
          Segment.Item($$renderer3, {
            value: "C",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->C`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push("<!--]-->");
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push("<!--]-->");
        }
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <div><div class="text-xl mb-2">Quel est votre rôle ?</div> `);
    Segment($$renderer2, {
      name: "role",
      value: role,
      onValueChange: (e) => role = e.value,
      children: ($$renderer3) => {
        if (Segment.Item) {
          $$renderer3.push("<!--[-->");
          Segment.Item($$renderer3, {
            value: "Tank",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Tank`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push("<!--]-->");
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push("<!--]-->");
        }
        $$renderer3.push(` `);
        if (Segment.Item) {
          $$renderer3.push("<!--[-->");
          Segment.Item($$renderer3, {
            value: "Healer",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Soigneur`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push("<!--]-->");
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push("<!--]-->");
        }
        $$renderer3.push(` `);
        if (Segment.Item) {
          $$renderer3.push("<!--[-->");
          Segment.Item($$renderer3, {
            value: "Melee",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Mêlée`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push("<!--]-->");
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push("<!--]-->");
        }
        $$renderer3.push(` `);
        if (Segment.Item) {
          $$renderer3.push("<!--[-->");
          Segment.Item($$renderer3, {
            value: "Ranged",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->Distant`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push("<!--]-->");
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push("<!--]-->");
        }
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> <div><div class="text-xl mb-2">Quel groupe êtes-vous ?</div> `);
    Segment($$renderer2, {
      name: "role",
      value: party?.toString(),
      onValueChange: (e) => party = parseInt(e.value),
      children: ($$renderer3) => {
        if (Segment.Item) {
          $$renderer3.push("<!--[-->");
          Segment.Item($$renderer3, {
            value: "1",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->1`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push("<!--]-->");
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push("<!--]-->");
        }
        $$renderer3.push(` `);
        if (Segment.Item) {
          $$renderer3.push("<!--[-->");
          Segment.Item($$renderer3, {
            value: "2",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->2`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push("<!--]-->");
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push("<!--]-->");
        }
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div></div> <div class="grow"></div> <div class="my-4 xl:my-0"><img src="./strats/healerout/overall.png" alt="Vue générale de la stratégie"${attr_style("", { "max-height": "400px" })}/></div></div> `);
    if (typeof strat() === "string") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`${escape_html(strat())}`);
    } else if (typeof strat() === "undefined") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="card border-[1px] border-surface-200-800 p-4"><div class="flex flex-wrap items-center gap-2"><div class="content-center"><div class="capitalize font-semibold text-2xl mb-0">${escape_html(optionsString())}</div> `);
      if (typeof stratPackage()?.stratUrl === "string") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<a class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer"${attr("href", stratPackage().stratUrl)}>${escape_html(stratPackage().description)} <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a>`);
      } else if (typeof stratPackage()?.stratUrl === "object") {
        $$renderer2.push("<!--[1-->");
        $$renderer2.push(`${escape_html(stratPackage().description)} <!--[-->`);
        const each_array = ensure_array_like(Object.entries(stratPackage().stratUrl));
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let [linkName, linkUrl] = each_array[$$index];
          $$renderer2.push(`<a class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer"${attr("href", linkUrl)}>${escape_html(linkName)} <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a>`);
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="grow"></div> <div class="content-center">`);
      Switch_1($$renderer2, {
        name: "spotlight-toggle",
        checked: spotlight,
        onCheckedChange: (e) => spotlight = e.checked,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->Highlight my spots`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div> <div class="flex flex-wrap items-center justify-between my-4"><div class="text-xl">${escape_html(strat().notes)}</div> `);
      if (strat().strats.some((strat2) => strat2.alignmentTransforms)) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="content-center">`);
        Segment($$renderer2, {
          name: "alignment",
          value: alignment,
          onValueChange: (e) => alignment = e.value,
          children: ($$renderer3) => {
            if (Segment.Item) {
              $$renderer3.push("<!--[-->");
              Segment.Item($$renderer3, {
                value: "original",
                children: ($$renderer4) => {
                  $$renderer4.push(`<!---->Original`);
                },
                $$slots: { default: true }
              });
              $$renderer3.push("<!--]-->");
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push("<!--]-->");
            }
            $$renderer3.push(` `);
            if (Segment.Item) {
              $$renderer3.push("<!--[-->");
              Segment.Item($$renderer3, {
                value: "truenorth",
                children: ($$renderer4) => {
                  $$renderer4.push(`<!---->True North`);
                },
                $$slots: { default: true }
              });
              $$renderer3.push("<!--]-->");
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push("<!--]-->");
            }
            $$renderer3.push(` `);
            if (Segment.Item) {
              $$renderer3.push("<!--[-->");
              Segment.Item($$renderer3, {
                value: "addrelative",
                children: ($$renderer4) => {
                  $$renderer4.push(`<!---->Wall Relative`);
                },
                $$slots: { default: true }
              });
              $$renderer3.push("<!--]-->");
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push("<!--]-->");
            }
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="grid xl:grid-cols-6 grid-cols-3 gap-2"><!--[-->`);
      const each_array_1 = ensure_array_like(strat().strats);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let step = each_array_1[$$index_1];
        $$renderer2.push(`<!---->`);
        {
          $$renderer2.push(`<div${attr_class("space-y-4", void 0, {
            "col-span-2": step.alignmentImages && step.alignmentImages[alignment]
          })}><div class="capitalize font-semibold text-xl mb-0">${escape_html(step.mechanic)}</div> <div class="whitespace-pre-wrap text-l">${escape_html(step.description)}</div> <img${attr("src", step.alignmentImages && step.alignmentImages[alignment] ? step.alignmentImages[alignment] : step.imageUrl)}${attr("alt", step.description)}${attr_style("", {
            "mask-image": getMask(step),
            transform: step.alignmentTransforms ? step.alignmentTransforms[alignment] : step.transform
          })}/></div>`);
        }
        $$renderer2.push(`<!---->`);
      }
      $$renderer2.push(`<!--]--> `);
      if (strat()?.swapNote && strat()?.swapStrats) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="col-span-3">`);
        Accordion($$renderer2, {
          value: accordion,
          onValueChange: (e) => accordion = e.value,
          multiple: true,
          classes: "card preset-tonal-primary border border-primary-700 text-surface-50",
          children: ($$renderer3) => {
            {
              let control = function($$renderer4) {
                $$renderer4.push(`<span class="text-xl">${escape_html(strat().swapNote)}</span>`);
              }, panel = function($$renderer4) {
                if (strat()?.swapWarning) {
                  $$renderer4.push("<!--[0-->");
                  $$renderer4.push(`<aside class="card preset-tonal-error preset-outlined-error-500 gap-4 p-4 mb-2"><div class="alert-message"><p>${escape_html(strat().swapWarning)}</p></div></aside>`);
                } else {
                  $$renderer4.push("<!--[-1-->");
                }
                $$renderer4.push(`<!--]--> <div class="grid grid-cols-3 gap-2">`);
                const each_array_2 = ensure_array_like(strat().swapStrats);
                if (each_array_2.length !== 0) {
                  $$renderer4.push("<!--[-->");
                  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                    let step = each_array_2[$$index_2];
                    $$renderer4.push(`<!---->`);
                    {
                      $$renderer4.push(`<div${attr_class("space-y-4", void 0, {
                        "col-span-2": step.alignmentImages && step.alignmentImages[alignment]
                      })}><div class="capitalize font-semibold text-xl mb-0">${escape_html(step.mechanic)}</div> <div class="whitespace-pre-wrap text-l">${escape_html(step.description)}</div> <img${attr("src", step.alignmentImages && step.alignmentImages[alignment] ? step.alignmentImages[alignment] : step.imageUrl)}${attr("alt", step.description)}${attr_style("", {
                        "mask-image": getMask(step),
                        transform: step.alignmentTransforms ? step.alignmentTransforms[alignment] : step.transform
                      })}/></div>`);
                    }
                    $$renderer4.push(`<!---->`);
                  }
                } else {
                  $$renderer4.push("<!--[!-->");
                  $$renderer4.push(`<div></div>`);
                }
                $$renderer4.push(`<!--]--></div>`);
              };
              if (Accordion.Item) {
                $$renderer3.push("<!--[-->");
                Accordion.Item($$renderer3, {
                  panelPadding: "py-4 px-4",
                  value: "swaps",
                  control,
                  panel,
                  $$slots: { control: true, panel: true }
                });
                $$renderer3.push("<!--]-->");
              } else {
                $$renderer3.push("<!--[!-->");
                $$renderer3.push("<!--]-->");
              }
            }
          },
          $$slots: { default: true }
        });
        $$renderer2.push(`<!----></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
export {
  _page as default
};
