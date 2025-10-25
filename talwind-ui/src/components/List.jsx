import React from 'react'

const List = () => {
    return (
        <ul role="list">
            {/* {#each people as person} */}
            {/* <!-- Remove top/bottom padding when first/last child --> */}
            <li class="flex py-4 first:pt-0 last:pb-0">
                <img class="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                <div class="ml-3 overflow-hidden">
                    <p class="text-sm font-medium text-gray-900 dark:text-white">{person.name}</p>
                    <p class="truncate text-sm text-gray-500 dark:text-gray-400">{person.email}</p>
                </div>
            </li>
            {/* {/each} */}
        </ul>
    )
}

export default List

/* 

Use the has-* variant to style an element based on the state or content of its descendants:
<label
  class="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ..."
>
  <svg fill="currentColor">
    <!-- ... -->
  </svg>
  Google Pay
  <input type="radio" class="checked:border-indigo-500 ..." />
</label>

<div>
  <label class="peer ...">
    <input type="checkbox" name="todo[1]" checked />
    Create a to do list
  </label>
  <svg class="peer-has-checked:hidden ..."><!-- ... --></svg>
</div>

<div class="group ...">
  <img src="..." />
  <h4>Spencer Sharp</h4>
  <svg class="hidden group-has-[a]:block ..."><!-- ... --></svg>
  <p>Product Designer at <a href="...">planeteria.tech</a></p>
</div>
*/