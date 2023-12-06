<template>
    <div class="skeleton-loader">
        <div class="wrapper">
            <div class="card">
                <div class="card__img skeleton"></div>
            </div>

            <div class="card">
                <div class="card__img skeleton"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.skeleton {
    --bg: #e1e1e1;
    --glare-bg: linear-gradient(90deg, transparent, hsla(0, 0%, 100%, 0.4), transparent);
    position: relative;
    background-color: var(--bg);
    overflow: hidden;
}

.wrapper {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center
}

.skeleton-loader {
    max-width: 1140px;
    width: 100%;
    margin: auto;
}

.skeleton::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: var(--glare-bg);
    transform: translateX(-100%);
    animation: skeleton-glare 1.75s infinite ease-out;
    z-index: 1;
}

@keyframes skeleton-glare {
    to {
        transform: translateX(100%)
    }
}

.card {
    --card-radius: 6px;
    min-width: 300px;
    height: auto;
    box-shadow:
        0 0 32px 2px rgba(0, 0, 0, 0.05),
        0 0 16px 2px rgba(0, 0, 0, 0.2),
        0 0 8px 2px rgba(0, 0, 0, 0.1);
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
}

.card__img {
    width: 100%;
    height: 200px;
}

.card__body {
    padding: 16px 16px 48px;
}

.card__text {
    font-size: 1rem;
    height: 1em;
    border-radius: 20px;
}

.card__body>.card__text {
    margin: 0.5em 0;
}

.card__body>.card__text:first-child {
    margin-top: 0.25rem;
}

.card__body>.card__text:last-child {
    margin-bottom: 0.25rem;
    width: 66%;
}
</style>