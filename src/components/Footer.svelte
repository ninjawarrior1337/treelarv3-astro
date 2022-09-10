<script lang="ts">
import faBrain from "~icons/fa-solid/brain"
import faHeart from "~icons/fa/heart"
import ethLogo from "~icons/fa6-brands/ethereum"
import GithubLogo from "~icons/fa6-brands/github"
import TwitterLogo from "~icons/fa6-brands/twitter"

export let pathname: string;

const computeIcon = (path: string) => {
    if(path.includes("projects")) {
        return faBrain
    }
    else if(path.includes("journal")) {
        return ethLogo
    }
    else {
        return faHeart
    }
}

const CurrentIcon = computeIcon(pathname)
</script>

<div class="bg-gradient-to-r from-muse via-treelar to-treelar h-1"></div>
<div class="py-4 text-center w-full text-xl">
    <div class="flex items-center justify-center space-x-1">
        <span>Made with</span>
        <CurrentIcon class="text-muse"/>
        <span>by</span>
        <span class="text-gradient-treelar">Treelar</span>
    </div>
    <div class="space-x-4 py-2 text-2xl flex items-center justify-center">
        <a rel="prefetch" target="_blank" href="https://github.com/ninjawarrior1337">
            <GithubLogo></GithubLogo>
        </a>
        <a rel="prefetch" target="_blank" href="https://twitter.com/TYNROH">
            <TwitterLogo class="text-[#1DA1F2]"></TwitterLogo>
        </a>
    </div>
</div>