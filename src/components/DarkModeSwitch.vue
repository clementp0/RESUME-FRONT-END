<template>
    <div class="switch-container" :class="{ 'dark-mode': isDarkMode }">
        <input type="checkbox" id="switch" v-model="isDarkMode" @change="updateDarkMode">
        <label for="switch"></label>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isDarkMode: false,
        };
    },
    watch: {
        isDarkMode(value) {
            if (value) {
                const element = document.querySelector('.content');
                element.setAttribute('id', 'light');
                document.documentElement.style.setProperty('--white', '#EFECEC');
                document.documentElement.style.setProperty('--black', '#313131');
                document.documentElement.style.setProperty('--gray', '#767676');
                document.documentElement.style.setProperty('--gray-light', '#d2d2d2');
            } else {
                const element = document.querySelector('.content');
                element.setAttribute('id', 'dark');
                document.documentElement.style.setProperty('--white', '#1C1C1C');
                document.documentElement.style.setProperty('--black', '#EFECEC');
                document.documentElement.style.setProperty('--gray', '#d2d2d2');
                document.documentElement.style.setProperty('--gray-light', '#767676');
            }
        },
    },
};
</script>
  
<style>
.switch-container {
    z-index: 1;
    display: inline-block;
    position: fixed;
    width: 48px;
    height: 24px;
    top: 10px;
    right: 10px;
}

.switch-container input[type="checkbox"] {
    display: none;
}

.switch-container label {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../images/night.png");
    background-size: contain;
    border-radius: 34px;
    cursor: pointer;
    transition: background-color 0.2s !important;
}

.switch-container label:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 2px;
    bottom: 3px;
    background-image: url("../images/moon.png");
    background-size: contain;
    border-radius: 50%;
    transition: transform 0.5s !important;
}

.switch-container input:checked+label {
    background-color: #66bb6a;
}

.switch-container input:checked+label:before {
    transform: translateX(26px);
}

.switch-container.dark-mode input:checked+label {
    background-image: url("../images/day.png");
    background-size: contain;
}

.switch-container.dark-mode input:checked+label:before {
    background-image: url("../images/sun.png");
    background-image: '';

}
</style>
  