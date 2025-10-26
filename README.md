# Tailwind CSS

## How tailwaind works (utility classes)
.flex{
    display:flex
}

.items-center{
    align-items:center
}

- [Tailwind Online Playground](https://play.tailwindcss.com/)

- generates utilities classes only for the css we use.

## basic classes

#### Spacing / Sizing

- p | m | w | h | w-full 
- p-4 | px-4 | py-4 | pr-4 | pl-4 | pb-4 | pt-4 | p-[10px]  | w-1/2

- px-[5rem] | py-[10%] | py-[1px] | py-1 | pe-2(padding-inline-end: calc(var(--spacing) * 2)) | pl-4 | pt-0 | -ml-2 | ms-5 (margin-inline-start: calc(var(--spacing) * 5)) | pe-px(Set horizontal end padding to 1 pixel.
) | 

- h-1 | h-screen(height: 100vh) ((viewport height)) | min-h-screen(min-height: 100vh) | h-1/3(height: 33.333333%) | min-h-full | max-h-[85%](max-height: 85%) | h-[100svh](height: 100svh) | h-[calc(100vh-80px)](height: calc(100vh - 80px)) | w-0(width: 0px) | w-px(width: 1px) | w-3/4(width: 75%) | max-w-xl(max-width: var(--container-xl)  /* 36rem (576px) */) | min-w-max(min-width: max-content) | max-w-md(max-width: var(--container-md)) | w-fit(width: fit-content) | w-auto(width: auto) | size-4(Set both width and height to level 4 spacing) | size-full(Set both width and height to 100%.) | max-w-[min(90vw,1200px)] (max-width: min(90vw,1200px)) | 


-space-x-1 (Set horizontal space between children to negative level 1 spacing.)| 
space-y-3 (Set vertical space between children to level 3 spacing.) | space-x-[5rem] |
space-y-px (Set vertical space between children to 1 pixel.) | 


#### Typography

- text-center | text-xl | text-lg | text-white | text-white-600 | text-3xl | text-xs | text-4xl | text-pretty(text-wrap: pretty) | text-clip(text-overflow: clip) | text-inherit(color:inherit) | 

- font-mono | font-bold | font-medium(font-weight: 500) | font-semibold | font-extrabold(font-weight: 800;) | font-black | font-stretch-condensed(font-stretch-condensed)

-  lowercase(text-transform: lowercase) | not-italic(font-style: normal) | indent-1(text-indent: calc(var(--spacing) * 1)) | indent-2 | indent-px(text-indent: 1px) | decoration-wavy(text-decoration-style: wavy) |decoration-dotted (text-decoration-type:dotted) | decoration-pink-500 (text-decoration-color: var(--color-pink-500))| truncate(overflow:hidden, text-overflow:ellipsis, white-space: nowrap) | overline(text-decoration-line: overline) | whitespace-pre(white-space:pre) | whitespace-pre-line(white-space: pre-line) | whitespace-break-spaces(white-space: pre-wrap) | tracking-wide(letter-spacing: var(--tracking-wide)) | tracking-tight(letter-spacing: var(--tracking-tight)) | hyphens-auto(hyphens:auto) | list-decimal(list-style-type: decimal) | list-disc(list-style-type: disc) | break-words(overflow-wrap: break-word) | break-normal(overflow-wrap: normal, word-break: normal) | list-inside(list-style-position: inside) | list-none(list-style-type: none) | line-clamp-none(overflow: visible, display: block, -webkit-box-orient: horizontal, -webkit-line-clamp: unset) | line-clamp-2 (overflow: hidden, display: -webkit-box, -webkit-box-orient: vertical, -webkit-line-clamp: 2) |  antialiased(-webkit-font-smoothing: antialiased, -moz-osx-font-smoothing: grayscale) | 

#### Color

- border-rose-400 | bg-sky-500 | text-white-600 | border-transparent | bg-purple-50/75(background-color: color-mix(in oklab, var(--color-purple-50) 75%, transparent)) | border-orange-950/[80.8%] | border-white/[80.5%]


#### Borders

- border-2 | border-black | border-rose-400 | border-solid

#### Layout 

- absolute

#### Backgrounds

- bg-sky-500

#### Flexbox and Grid

- flex  | inline-flex | flex-col | flex-col-reverse(flex-direction: column-reverse) |  justify-between(justify-content: space-between) | justify-start(justify-content: flex-start) | justify-evenly  | space-x-6 | flex-wrap | items-center | items-start |  grow(flex-grow: 1) |  gap-0(gap: 0px) | gap-px(gap: 1px) |  | gap-y-6(row-gap: calc(var(--spacing) * 6)) | gap-y-[15px](row-gap: 15px) | order-none | self-center(align-self: center) | self-stretch | content-stretch(align-content: stretch) | shrink-[3](flex-shrink: 3) | flex-none(flex: none) | place-items-end(place-items: end) | place-items-stretch | place-content-center(place-content: center) | flex-[2_2_0%](flex: 2 2 0%)(Set flex grow to 2, flex shrink to 2, and flex basis to 0%) | flex-[0_1_auto](flex: 0 1 auto) | 


- grid | grid-cols-3 | grid-rows-1(grid-template-rows: repeat(1, minmax(0, 1fr))) | grid-rows-2(grid-template-rows: repeat(2, minmax(0, 1fr))) | grid-cols-[200px_1fr_100px](grid-template-columns: 200px 1fr 100px) | grid-cols-4(grid-template-columns: repeat(4, minmax(0, 1fr))) | grid-rows-subgrid(grid-template-rows: subgrid) | grid-rows-[min-content_auto](grid-template-rows: min-content auto) | grid-flow-col-dense(grid-auto-flow: column dense) | gap-2 | gap-y-6  | auto-cols-max(grid-auto-columns: max-content) | auto-rows-max(grid-auto-rows: max-content) | auto-cols-min(grid-auto-columns: min-content) | auto-cols-fr(grid-auto-columns: minmax(0, 1fr)) | 
- col-start-2(grid-column-start: 2) | col-end-auto(grid-column-end: auto) |  row-[1/span_2](grid-row: 1 / span 2)


- rounded-2xl | rounded-md | rounded-full
- cursor-pointer

#### States

- hover: bg-grey-400 | focus:text-purple-600 | hover:text-white | visited:text-gray-400 |  only:p-4(When element is only child, set padding to level 4 spacing) | even:bg-gray-100(When element is even numbered child, set background color to level 100 gray.)  | first:font-bold | odd:bg-gray-50 | indeterminate:bg-gray-300 | placeholder:text-gray-300 | placeholder-shown:border-gray-500 | checked:bg-gray-50 |backdrop:bg-gray-50 | nth-last-2:mx-6 | only-of-type:mx-6 | before:text-red-500 | invalid:border-red-500 | out-of-range:border-red-500 | first-letter:text-xl | selection:text-lime-900 | target:text-yellow-100 | focus-within:border-blue-200 | in-focus:bg-blue-400(When element's ancestor is focused, set element's background color to level 400 blue.) | in-active:bg-blue-500(When element's ancestor is active, set element's background color to level 500 blue.) | first:hover:font-bold(On hover, when element is first child, set font weight to bold.) 


group-hover:bg-blue-400(When element's ancestor marked with group class is hovered, set element's background color to level 400 blue.) | group-odd:text-lg | *:m-4(Set all direct children to have margin of level 4 spacing.) | peer-focus:border-green-400(When element's sibling marked with peer class is focused, set element's border color to level 400 green.) | has-[a]:bg-blue-200 (When element has a descendant that is an <a> element, set background color to level 200 blue.) | has-checked:bg-indigo-50(When element has a descendant that is checked, set background color to level 50 indigo.) | **:data-avatar:m-4(Set all descendants with data-avatar attribute to have margin of level 4 spacing.) | peer-has-checked:text-gray-200 (When element's sibling marked with peer class has a descendant that is checked, set element's text color to level 200 gray.) | 

```css

&:focus {color: var(--color-purple-600); */}

.group:hover & {
  background-color: var(--color-blue-400);
}

&:only-child {
  padding: calc(var(--spacing) * 4);
}

&:nth-child(even) {
  background-color: var(--color-gray-100);
}

&:nth-child(odd) {
  background-color: var(--color-gray-50);
}

&:indeterminate {
  background-color: var(--color-gray-300);
}

&::placeholder {
  color: var(--color-gray-300);
}

&::before {
  color: calc(var(--color-red-500));
}

&:checked {
  background-color: var(--color-blue-500);
}

&:nth-last-child(2) {
  margin-inline: calc(var(--spacing) * 6);
}

&:only-of-type {
  margin-inline: calc(var(--spacing) * 6);
}

&:has(a) {
  background-color: var(--color-blue-200);
}

&:has(:checked) {
  background-color: var(--color-indigo-50);
}

```
- media query | sm: | lg:
- color ranges from 50 - 950

#### Filters and Effects

- shadow-xl
- ring-1 | ring-slate-900/5
- If you don't provide width for grid it takes whole space for the element

#### Tables


#### Interactivity


#### Transitions and Animations


#### Transforms


## Responsive (media queries) 
md:block hidden-> appear on screen wider than 768px 
sm:bg-amber-500 md:bg-amber-700 
- by default tailwind uses min-width media queries(mobile first approach) but u can use max-width using  max-sm:
- use unprefixed utilities to target mobile, and override them at larger breakpoint using sm: , md: or other breakpoints

## Dark Mode

bg-white dark:bg-black text-black dark:text-white
you can either have a custom click dark mode or the default chrome or system dark mode.

## Customization

text-[#a3422a] | text-[16px]

#### Directives

@theme{
    --color-chestnut: #a3422a // Now this chestnut you cann use - text-chestnut
    --font-
}

@layer components{ -> classes
    .card{
        @apply m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-l ring-slate-900/5 dark:bg-black
    } // <div class="card"></div>
}

@layer base{ -> global elements
    h3{
        @apply text-base font-medium tracking-tight text-slate-900 dark:text-white
    }
    p{
        @apply mt-2 text-sm text-slate-500 dark:text-blue-100
    }
} // <h3></h3>, <p></p>

@utility flex-center{ -> own utility classes
    @apply flex justify-center items-center
}

- Shadcn UI

## Tips and Tricks

#### Accent
- accent-pink-500, changes default colors of progress bar, checkbox, radio buttons

#### Fluid Texts
- text-[min(10vw, 70px)]

#### File

<label>
    <input type="file" class="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-5- file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100">
</lable>

#### Highlights
selection: bg-green-400

#### Less JS
caret-pink-500
open:


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
