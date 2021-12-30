import { StyleSheet } from "react-native";

function getLayoutTypes() {
  const MarginPadding = ["margin", "padding"] as const;
  const StyleKeys = [...MarginPadding, "borderRadius"] as const;

  const CoverTypes = [
    "Vertical",
    "Horizontal",
    "Top",
    "Right",
    "Left",
    "Bottom",
  ] as const;

  const Intervals = [0, 2, 4, 6, 8, 10, 12, 16, 24, 32] as const;

  type Layouts = `${typeof MarginPadding[number]}${typeof CoverTypes[number]}`;

  type MarginLayoutKeys =
    | `${Layouts}${typeof Intervals[number]}`
    | `${typeof StyleKeys[number]}${typeof Intervals[number]}`;

  const out = {}; // The real stylesheets

  for (const mp of StyleKeys) {
    for (const i of Intervals) {
      out[`${mp}${i}`] = { [mp]: i };
    }

    if (mp === "margin" || mp === "padding") {
      for (const ct of CoverTypes) {
        for (const i of Intervals) {
          out[`${mp}${ct}${i}`] = { [`${mp}${ct}`]: i }; // All permutations
        }
      }
    }
  }

  // Force Typescript to use the const keys
  return out as { [K in MarginLayoutKeys]: any };
}

const Layout = StyleSheet.create({
  ...getLayoutTypes(),
});

export default Layout;
