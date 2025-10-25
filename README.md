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
- p | m | w | h | w-full
- p-4 | px-4 | py-4 | pr-4 | pl-4 | pb-4 | pt-4 | p-[10px]  | w-1/2
- text-center | text-xl | text-lg | text-white-600
- font-mono | font-bold | font-semibold | font-extrabold
- border-2 | border-black | border-solid
- absolute
- bg-sky-500
- flex  |  justify-between | justify-evenly  | space-x-6 flex-wrap | items-center
- flex-col | item-center | items-start | space-y-6 | justify-between
- grid | grid-cols-3 | gap-2
- grid | grid-rows-3
- rounded-2xl | rounded-md | rounded-full
- cursor-pointer
- hover: bg-grey-400
- media query | sm: | lg:
- color ranges from 50 - 950
- shadow-xl
- ring-1 | ring-slate-900/5
- If you don't provide width for grid it takes whole space for the element


## media queries
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
