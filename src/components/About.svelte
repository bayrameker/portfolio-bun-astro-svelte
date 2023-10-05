<script lang="ts">
    import Icon from "@iconify/svelte";
    import KEY_SKILLS from "../data/key_skills";
    import ProjectTags from "./ProjectTags.svelte";
</script>

<div class="flex flex-col gap-4 lg:ml-8">
    <h2 class="text-xl">about</h2>
    <div class="flex flex-row flex-wrap items-center gap-2 font-literata font-light">
      
        <p>
            Hello! 👋 I'm a seasoned full-stack developer with 5 years of experience in the tech industry. My journey in the world of technology has been both exciting and fulfilling. 🚀
        
            While I'm passionate about coding and working with technologies like Java and React, I'm equally enthusiastic about exploring new opportunities in Turkey's vibrant tech landscape. 🇹🇷
       </p>
       
       <p> 
            In addition to my tech skills, I have a diverse range of interests. I enjoy playing music, engaging in tabletop RPGs, reading books, and even bouldering. And when it comes to a good cup of tea, I can never resist a nice cup of Turkish tea or perhaps a delightful blend of Turkish herbs. 🍵
        
            Feel free to reach out if you want to connect or discuss the tech scene in Turkey. I'm always up for a good conversation!
        </p>
        
    </div>
    <h2 class="text-xl">new key skills</h2>
    <div class="flex flex-row flex-wrap gap-4">
        <ProjectTags tags={KEY_SKILLS} wantBg/>
    </div>
    <h2 class="text-xl">reach me</h2>
    <div class="flex flex-row flex-wrap gap-4 text-3xl mb-2">
        <a href="https://github.com/scriptchief" class="flex flex-row items-center gap-2">
            <Icon icon="mdi:github" />
        </a>
        <a href="mailto:eker600@gmail.com" class="flex flex-row items-center gap-2">
            <Icon icon="mdi:email" />
        </a>
        <!-- <a href="example.com" class="flex flex-row items-center gap-2">
            <Icon icon="mdi:linkedin" />
        </a> -->
    </div> 
</div>