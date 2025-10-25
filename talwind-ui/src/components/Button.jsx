const Button = () => {
    return (
        <div className="first:mx-2">
            <button className="mt-1 cursor-pointer px-6 py-1 rounded-2xl bg-sky-500 hover:bg-sky-700 text-white">Save changes</button>
            <button className="mt-1 cursor-pointer px-6 py-1 rounded-2xl bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 text-white">Save changes</button>
        </div>

    )
}

export default Button

/* 
Styles:
mt-1 
cursor-pointer 
px-6 
py-1 
rounded-2xl
text-white

bg-sky-500 
hover:bg-sky-700
first:mx-2

border-purple-200
text-white-600 

bg-violet-500
hover:border-transparent
hover:bg-purple-600
hover:text-white 
active:bg-purple-700 

dark:md:hover:bg-fuchsia-600

Arbitary Values
<div class="top-[117px]">
  <!-- ... -->
</div>

<div class="bg-teal-500 bg-red-500!">
  <!-- ... -->
</div>

<button class="bg-indigo-600 hover:not-focus:bg-indigo-700">
  <!-- ... -->
</button>

When you add two classes that target the same CSS property, the class that appears later in the stylesheet wins. So in this example, the element will receive display: grid even though flex comes last in the actual class attribute:

export default function Button({ size, children }) {
  let sizeClasses = {
    md: "px-4 py-2 rounded-md text-base",
    lg: "px-5 py-3 rounded-lg text-lg",
  }[size];
  return (
    <button type="button" className={`font-bold ${sizeClasses}`}>
      {children}
    </button>
  );
}

<button class="bg-[#316ff6] ...">
  Sign in with Facebook
</button>


<button class="dark:lg:data-current:hover:bg-indigo-600 ...">
  <!-- ... -->
</button>


export function BrandedButton({ buttonColor, textColor, children }) {
  return (
    <button
      style={{
        backgroundColor: buttonColor,
        color: textColor,
      }}
      className="rounded-md px-3 py-1.5 font-medium"
    >
      {children}
    </button>
  );
}


<div>
  <div class="flex items-center space-x-2 text-base">
    <h4 class="font-semibold text-slate-900">Contributors</h4>
    <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
  </div>
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    {#each contributors as user}
      <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={user.avatarUrl} alt={user.handle} />
    {/each}
  </div>
  <div class="mt-3 text-sm font-medium">
    <a href="#" class="text-blue-500">+ 198 others</a>
  </div>
</div>



export function VacationCard({ img, imgAlt, eyebrow, title, pricing, url }) {
  return (
    <div>
      <img className="rounded-lg" src={img} alt={imgAlt} />
      <div className="mt-4">
        <div className="text-xs font-bold text-sky-500">{eyebrow}</div>
        <div className="mt-1 font-bold text-gray-700">
          <a href={url} className="hover:underline">
            {title}
          </a>
        </div>
        <div className="mt-2 text-sm text-gray-600">{pricing}</div>
      </div>
    </div>
  );
}



:hover
Style an element when the user hovers over it with the mouse cursor using the hover variant:

<div class="bg-black hover:bg-white ...">
  <!-- ... -->
</div>
:focus
Style an element when it has focus using the focus variant:

<input class="border-gray-300 focus:border-blue-400 ..." />
:focus-within
Style an element when it or one of its descendants has focus using the focus-within variant:

<div class="focus-within:shadow-lg ...">
  <input type="text" />
</div>
:focus-visible
Style an element when it has been focused using the keyboard using the focus-visible variant:

<button class="focus-visible:outline-2 ...">Submit</button>
:active
Style an element when it is being pressed using the active variant:

<button class="bg-blue-500 active:bg-blue-600 ...">Submit</button>
:visited
Style a link when it has already been visited using the visited variant:

<a href="https://seinfeldquotes.com" class="text-blue-600 visited:text-purple-600 ..."> Inspiration </a>
:target
Style an element if its ID matches the current URL fragment using the target variant:

<div id="about" class="target:shadow-lg ...">
  <!-- ... -->
</div>
:first-child
Style an element if it's the first child using the first variant:

<ul>
  {#each people as person}
    <li class="py-4 first:pt-0 ...">
      <!-- ... -->
    </li>
  {/each}
</ul>
:last-child
Style an element if it's the last child using the last variant:

<ul>
  {#each people as person}
    <li class="py-4 last:pb-0 ...">
      <!-- ... -->
    </li>
  {/each}
</ul>
:only-child
Style an element if it's the only child using the only variant:

<ul>
  {#each people as person}
    <li class="py-4 only:py-0 ...">
      <!-- ... -->
    </li>
  {/each}
</ul>
:nth-child(odd)
Style an element if it's an oddly numbered child using the odd variant:

<table>
  {#each people as person}
    <tr class="bg-white odd:bg-gray-100 ...">
      <!-- ... -->
    </tr>
  {/each}
</table>
:nth-child(even)
Style an element if it's an evenly numbered child using the even variant:

<table>
  {#each people as person}
    <tr class="bg-white even:bg-gray-100 ...">
      <!-- ... -->
    </tr>
  {/each}
</table>
:first-of-type
Style an element if it's the first child of its type using the first-of-type variant:

<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="ml-2 first-of-type:ml-6 ...">
      <!-- ... -->
    </a>
  {/each}
</nav>
:last-of-type
Style an element if it's the last child of its type using the last-of-type variant:

<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mr-2 last-of-type:mr-6 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button>
</nav>
:only-of-type
Style an element if it's the only child of its type using the only-of-type variant:

<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mx-2 only-of-type:mx-6 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button>
</nav>
:nth-child()
Style an element at a specific position using the nth variant:

<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mx-2 nth-3:mx-6 nth-[3n+1]:mx-7 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button>
</nav>
:nth-last-child()
Style an element at a specific position from the end using the nth-last variant:

<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mx-2 nth-last-3:mx-6 nth-last-[3n+1]:mx-7 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button>
</nav>
:nth-of-type()
Style an element at a specific position, of the same type using the nth-of-type variant:

<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mx-2 nth-of-type-3:mx-6 nth-of-type-[3n+1]:mx-7 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button>
</nav>
:nth-last-of-type()
Style an element at a specific position from the end, of the same type using the nth-last-of-type variant:

<nav>
  <img src="/logo.svg" alt="Vandelay Industries" />
  {#each links as link}
    <a href="#" class="mx-2 nth-last-of-type-3:mx-6 nth-last-of-type-[3n+1]:mx-7 ...">
      <!-- ... -->
    </a>
  {/each}
  <button>More</button>
</nav>
:empty
Style an element if it has no content using the empty variant:

<ul>
  {#each people as person}
    <li class="empty:hidden ...">{person.hobby}</li>
  {/each}
</ul>
:disabled
Style an input when it's disabled using the disabled variant:

<input class="disabled:opacity-75 ..." />
:enabled
Style an input when it's enabled using the enabled variant, most helpful when you only want to apply another style when an element is not disabled:

<input class="enabled:hover:border-gray-400 disabled:opacity-75 ..." />
:checked
Style a checkbox or radio button when it's checked using the checked variant:

<input type="checkbox" class="appearance-none checked:bg-blue-500 ..." />
:indeterminate
Style a checkbox or radio button in an indeterminate state using the indeterminate variant:

<input type="checkbox" class="appearance-none indeterminate:bg-gray-300 ..." />
:default
Style an option, checkbox or radio button that was the default value when the page initially loaded using the default variant:

<input type="checkbox" class="default:outline-2 ..." />
:optional
Style an input when it's optional using the optional variant:

<input class="border optional:border-red-500 ..." />
:required
Style an input when it's required using the required variant:

<input required class="border required:border-red-500 ..." />
:valid
Style an input when it's valid using the valid variant:

<input required class="border valid:border-green-500 ..." />
:invalid
Style an input when it's invalid using the invalid variant:

<input required class="border invalid:border-red-500 ..." />
:user-valid
Style an input when it's valid and the user has interacted with it, using the user-valid variant:

<input required class="border user-valid:border-green-500" />
:user-invalid
Style an input when it's invalid and the user has interacted with it, using the user-invalid variant:

<input required class="border user-invalid:border-red-500" />
:in-range
Style an input when its value is within a specified range limit using the in-range variant:

<input min="1" max="5" class="in-range:border-green-500 ..." />
:out-of-range
Style an input when its value is outside of a specified range limit using the out-of-range variant:

<input min="1" max="5" class="out-of-range:border-red-500 ..." />
:placeholder-shown
Style an input when the placeholder is shown using the placeholder-shown variant:

<input class="placeholder-shown:border-gray-500 ..." placeholder="you@example.com" />
:details-content
Style the content of a <details> element using the details-content variant:

<details class="details-content:bg-gray-100 ...">
  <summary>Details</summary>
  This is a secret.
</details>
:autofill
Style an input when it has been autofilled by the browser using the autofill variant:

<input class="autofill:bg-yellow-200 ..." />
:read-only
Style an input when it is read-only using the read-only variant:

<input class="read-only:bg-gray-100 ..." />
*/