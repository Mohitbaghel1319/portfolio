let content = document.querySelector(".content");
let skills = document.querySelector(".skills");
let experience = document.querySelector(".experience");
let education = document.querySelector(".education");
let open = document.querySelector(".fa-bars");
let close = document.querySelector(".fa-circle-xmark");

skills.addEventListener("click",()=>{
    content.innerHTML = `<div class="flex flex-col gap-3 mt-5 text-sm content">
                            <div>
                                <h1 class="text-red-700">work</h1>
                                <p class="text-base">UI Designer / Responsive</p>
                            </div>
                            <div>
                                <h1 class="text-red-700">CSS- Frameworks/Libraries</h1>
                                <p class="text-base">Tailwind, Bootstrap</p>
                            </div>
                            <div>
                                <h1 class="text-red-700">JS- Frameworks/Libraries</h1>
                                <p class="text-base">React, Redux</p>
                            </div>`
});
experience.addEventListener("click",()=>{
    content.innerHTML = `<div class="flex flex-col gap-3 mt-5 text-sm content">
                            <div>
                                <h1 class="text-red-700">3 - Years</h1>
                                <p class="text-base">Coradius Solutions</p>
                            </div>
                            <div>
                                <h1 class="text-red-700">1 - Year</h1>
                                <p class="text-base">Dayanand Bal Mandir Sr. Sec. School</p>
                            </div>`
});
education.addEventListener("click",()=>{
    content.innerHTML = `<div class="flex flex-col gap-3 mt-5 text-sm content">
                            <div>
                                <h1 class="text-red-700">2013</h1>
                                <p class="text-base">X class</p>
                                <p class="text-xs font-semibold text-zinc-600">UP Board</p>
                            </div>
                            <div>
                                <h1 class="text-red-700">2015</h1>
                                <p class="text-base">XII class</p>
                                <p class="text-xs font-semibold text-zinc-600">UP Board</p>
                            </div>
                            <div>
                                <h1 class="text-red-700">2020</h1>
                                <p class="text-base">B.Sc Maths</p>
                                <p class="text-xs font-semibold text-zinc-600">Dr. Bhim Rao Ambedker Univercity</p>
                            </div>`
});

open.addEventListener("click", ()=>{
    document.querySelector("nav ul").classList.replace("left-[100%]","left-[50%]");
    document.querySelector("header").classList.replace("h-16","h-60");
    open.classList.replace("block", "hidden");
    close.classList.replace("hidden", "block");
})
close.addEventListener("click", ()=>{
    document.querySelector("nav ul").classList.replace("left-[50%]","left-[100%]");
    document.querySelector("header").classList.replace("h-60","h-16");
    open.classList.replace("hidden", "block");
    close.classList.replace("block", "hidden");
})