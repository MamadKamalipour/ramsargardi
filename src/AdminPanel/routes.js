import React from "react";

// Base
const Accordion = React.lazy(() => import("./views/base/accordion/Accordion"));
const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const ListGroups = React.lazy(() =>
  import("./views/base/list-groups/ListGroups")
);
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./views/base/paginations/Paginations")
);
const Placeholders = React.lazy(() =>
  import("./views/base/placeholders/Placeholders")
);
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const Progress = React.lazy(() => import("./views/base/progress/Progress"));
const Spinners = React.lazy(() => import("./views/base/spinners/Spinners"));
const Tables = React.lazy(() => import("./views/base/tables/Tables"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));

// Buttons
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const ButtonGroups = React.lazy(() =>
  import("./views/buttons/button-groups/ButtonGroups")
);
const Dropdowns = React.lazy(() =>
  import("./views/buttons/dropdowns/Dropdowns")
);

//Forms
const ChecksRadios = React.lazy(() =>
  import("./views/forms/checks-radios/ChecksRadios")
);
const FloatingLabels = React.lazy(() =>
  import("./views/forms/floating-labels/FloatingLabels")
);
const FormControl = React.lazy(() =>
  import("./views/forms/form-control/FormControl")
);
const InputGroup = React.lazy(() =>
  import("./views/forms/input-group/InputGroup")
);
const Layout = React.lazy(() => import("./views/forms/layout/Layout"));
const Range = React.lazy(() => import("./views/forms/range/Range"));
const Select = React.lazy(() => import("./views/forms/select/Select"));
const Validation = React.lazy(() =>
  import("./views/forms/validation/Validation")
);

const Charts = React.lazy(() => import("./views/charts/Charts"));

// Icons
const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));

// Notifications
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Toasts = React.lazy(() => import("./views/notifications/toasts/Toasts"));

const Widgets = React.lazy(() => import("./views/widgets/Widgets"));

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Products = React.lazy(() => import("./views/Products/Products"));
const EditProduct = React.lazy(() => import("./views/EditProduct/EditProduct"));
const AddProducts = React.lazy(() => import("./views/AddProducts/AddProducts"));
const ProductsCategory = React.lazy(() =>
  import("./views/ProductsCategory/ProductsCategory")
);
const ProductsTags = React.lazy(() =>
  import("./views/ProductsTags/ProductsTags")
);
const Blog = React.lazy(() => import("./views/Blog/Blog"));
const EditBlog = React.lazy(() => import("./views/EditBlog/EditBlog"));
const AddBlog = React.lazy(() => import("./views/AddBlog/AddBlog"));
const BlogCategory = React.lazy(() =>
  import("./views/BlogCategory/BlogCategory")
);
const BlogTags = React.lazy(() => import("./views/BlogTags/BlogTags"));
const Comments = React.lazy(() => import("./views/Comments/Comments"));
const Users = React.lazy(() => import("./views/Users/Users"));
const AddUsers = React.lazy(() => import("./views/AddUsers/AddUsers"));
const Settings = React.lazy(() => import("./views/Settings/Settings"));

const routes = [
  // { path: '/', name: 'داشبورد'},
  { path: "dashboard", name: "داشبورد", element: Dashboard },
  { path: "products", name: "محصولات", element: Products },
  { path: "products/:id", name: "ویرایش محصول", element: EditProduct },
  { path: "products/add", name: "افزودن", element: AddProducts },
  {
    path: "products/categories",
    name: "دسته بندی محصولات",
    element: ProductsCategory,
  },
  { path: "products/tags", name: "برچسب محصولات", element: ProductsTags },
  { path: "blog", name: "پست های بلاگ", element: Blog },
  { path: "blog/:id", name: "ویرایش بلاگ", element: EditBlog },
  { path: "blog/add", name: "افزودن بلاگ", element: AddBlog },
  { path: "blog/categories", name: "دسته بندی بلاگ", element: BlogCategory },
  { path: "blog/tags", name: "برچسب های بلاگ", element: BlogTags },
  { path: "comments", name: "کامنت ها", element: Comments },
  { path: "users", name: "کاربران", element: Users },
  { path: "users/add", name: "اضافه کردن کاربر", element: AddUsers },
  { path: "settings", name: "تنظیمات", element: Settings },
  { path: "base", name: "Base", element: Cards, exact: true },
  { path: "base/accordion", name: "Accordion", element: Accordion },
  { path: "base/breadcrumbs", name: "Breadcrumbs", element: Breadcrumbs },
  { path: "base/cards", name: "Cards", element: Cards },
  { path: "base/carousels", name: "Carousel", element: Carousels },
  { path: "base/collapses", name: "Collapse", element: Collapses },
  { path: "base/list-groups", name: "List Groups", element: ListGroups },
  { path: "base/navs", name: "Navs", element: Navs },
  { path: "base/paginations", name: "Paginations", element: Paginations },
  { path: "base/placeholders", name: "Placeholders", element: Placeholders },
  { path: "base/popovers", name: "Popovers", element: Popovers },
  { path: "base/progress", name: "Progress", element: Progress },
  { path: "base/spinners", name: "Spinners", element: Spinners },
  { path: "base/tables", name: "Tables", element: Tables },
  { path: "base/tooltips", name: "Tooltips", element: Tooltips },
  { path: "buttons", name: "Buttons", element: Buttons, exact: true },
  { path: "buttons/buttons", name: "Buttons", element: Buttons },
  { path: "buttons/dropdowns", name: "Dropdowns", element: Dropdowns },
  {
    path: "buttons/button-groups",
    name: "Button Groups",
    element: ButtonGroups,
  },
  { path: "charts", name: "Charts", element: Charts },
  { path: "forms", name: "Forms", element: FormControl, exact: true },
  { path: "forms/form-control", name: "Form Control", element: FormControl },
  { path: "forms/select", name: "Select", element: Select },
  {
    path: "forms/checks-radios",
    name: "Checks & Radios",
    element: ChecksRadios,
  },
  { path: "forms/range", name: "Range", element: Range },
  { path: "forms/input-group", name: "Input Group", element: InputGroup },
  {
    path: "forms/floating-labels",
    name: "Floating Labels",
    element: FloatingLabels,
  },
  { path: "forms/layout", name: "Layout", element: Layout },
  { path: "forms/validation", name: "Validation", element: Validation },
  { path: "icons", exact: true, name: "Icons", element: CoreUIIcons },
  { path: "icons/coreui-icons", name: "CoreUI Icons", element: CoreUIIcons },
  { path: "icons/flags", name: "Flags", element: Flags },
  { path: "icons/brands", name: "Brands", element: Brands },
  {
    path: "notifications",
    name: "Notifications",
    element: Alerts,
    exact: true,
  },
  { path: "notifications/alerts", name: "Alerts", element: Alerts },
  { path: "notifications/badges", name: "Badges", element: Badges },
  { path: "notifications/modals", name: "Modals", element: Modals },
  { path: "notifications/toasts", name: "Toasts", element: Toasts },
  { path: "widgets", name: "Widgets", element: Widgets },
];

export default routes;