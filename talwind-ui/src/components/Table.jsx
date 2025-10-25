import React from 'react'

const Table = () => {
    return (
        <table>
            <tbody>
                {/* {#each people as person}
                <!-- Use different background colors for odd and even rows --> */}
                <tr class="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950">
                    <td>{person.name}</td>
                    <td>{person.title}</td>
                    <td>{person.email}</td>
                </tr>
                {/* {/each} */}
            </tbody>
        </table>
    )
}

export default Table


/* 
<div class="nth-3:underline">
  <!-- ... -->
</div>
<div class="nth-last-5:underline">
  <!-- ... -->
</div>
<div class="nth-of-type-4:underline">
  <!-- ... -->
</div>
<div class="nth-last-of-type-6:underline">
  <!-- ... -->
</div>
*/