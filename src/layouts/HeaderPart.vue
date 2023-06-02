<template>
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark " data-bs-theme="dark">
        <div class="container">
            <router-link :to="{ name: 'Home' }" class="navbar-brand">
                <img alt="Vue logo" src="../assets/logo.png" height="30"> Navbar
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'About' }" class="nav-link">About Us</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'Service' }" class="nav-link">Service</router-link>
                </li>
                <li class="nav-item dropdown">
                    <router-link :to="{ name: 'Contact' }" class="nav-link">Contact us</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>
