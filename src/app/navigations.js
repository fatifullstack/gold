// export const navigations = [
//   { name: "Dashboard", path: "/dashboard/default", icon: "dashboard" },
//   { label: "PAGES", type: "label" },
//   {
//     name: "Session/Auth",
//     icon: "security",
//     children: [
//       { name: "Sign in", iconText: "SI", path: "/session/signin" },
//       { name: "Sign up", iconText: "SU", path: "/session/signup" },
//       { name: "Forgot Password", iconText: "FP", path: "/session/forgot-password" },
//       { name: "Error", iconText: "404", path: "/session/404" }
//     ]
//   },
//   { label: "Components", type: "label" },
//   {
//     name: "Components",
//     icon: "favorite",
//     badge: { value: "30+", color: "secondary" },
//     children: [
//       { name: "Auto Complete", path: "/material/autocomplete", iconText: "A" },
//       { name: "Buttons", path: "/material/buttons", iconText: "B" },
//       { name: "Checkbox", path: "/material/checkbox", iconText: "C" },
//       { name: "Dialog", path: "/material/dialog", iconText: "D" },
//       { name: "Expansion Panel", path: "/material/expansion-panel", iconText: "E" },
//       { name: "Form", path: "/material/form", iconText: "F" },
//       { name: "Icons", path: "/material/icons", iconText: "I" },
//       { name: "Menu", path: "/material/menu", iconText: "M" },
//       { name: "Progress", path: "/material/progress", iconText: "P" },
//       { name: "Radio", path: "/material/radio", iconText: "R" },
//       { name: "Switch", path: "/material/switch", iconText: "S" },
//       { name: "Slider", path: "/material/slider", iconText: "S" },
//       { name: "Snackbar", path: "/material/snackbar", iconText: "S" },
//       { name: "Table", path: "/material/table", iconText: "T" }
//     ]
//   },
//   {
//     name: "Charts",
//     icon: "trending_up",
//     children: [{ name: "Echarts", path: "/charts/echarts", iconText: "E" }]
//   },
//   {
//     name: "Documentation",
//     icon: "launch",
//     type: "extLink",
//     path: "http://demos.ui-lib.com/matx-react-doc/"
//   }
// ];

export const navigations = [
  { name: "Dashboard", path: "/dashboard/default", icon: "dashboard" },
  { label: "Administration", type: "label" },
  {
    name: "Organization",
    icon: "domain",
    children: [
      { name: "Mining Sites", path: "/organization/mining-sites", iconText: "M" },
      { name: "User Management", path: "", iconText: "M" },
      { name: "Workstation Management", path: "", iconText: "M" }
    ]
  },
  { label: "Personnel", type: "label" },
  {
    name: "Personnel management",
    icon: "group",
    children: [
      { name: "Employees", path: "/personnel/employee", iconText: "M" },
      { name: "HR", path: "", iconText: "M" }
    ]
  },

  { label: "Training", type: "label" },
  {
    name: "Professional training",
    icon: "settings_applications",
    children: [
      { name: "Training request", path: "", iconText: "M" },
      { name: "Request management", path: "", iconText: "M" },
    ]
  },
]
