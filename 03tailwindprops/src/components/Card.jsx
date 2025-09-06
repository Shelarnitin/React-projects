import React from 'react'

function Card() {
  return (
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800" >
  <img class="w-24 h-24 rounded-full mx-auto" src="https://avatars.githubusercontent.com/u/182104142?v=4" alt="" width="384" height="512" />
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text">
        Nitin Shelar
      </div>
      <div>
        Software Engineer, Aurangabad
      </div>
    </figcaption>
  </div>
</figure>
    
  )
}

export default Card