<template>
    <!-- 
    <section id="our-work" class="potential-outer">
        <div class="container">
            <h2 class="title-outer" style="color:#fff;">Show the Potential of Every Property</h2>
            <h3 class="sub-title">From Outdated to Outstanding with a Click</h3>
            <p style="color:#fff; opacity: 0.7;">Don't let outdated interiors put off potential buyers. With Scop3D,
                transform any space into a modern, appealing<br> haven. Show buyers the true potential of every property,
                enhancing its value and appeal.</p>
            <img src="/assets/images/real-estate-text-color-change.jpg" alt="">
            <div id="uploader_section" class="uploader_section">
                <form class="w-80 mx-auto p-4 lg:p-8 uploader_section">
                    <div>
                        <file-pond name="test" ref="pond" label-idle=" Drop files here..."
                            accepted-file-types="image/jpeg, image/png" v-bind:files="myFiles" v-bind:server="MyServer"
                            @addfile="onAddFile" maxFiles="1" />
                    </div>
                    <div class="container" v-if="selectedImage !== ''">

                        <div class="radio-tile-group">
                            <div class="input-container" v-for="(type, index) in types" :key="index">
                                <input id="walk" class="radio-button" type="radio" v-model="room_type" :value="type.name"
                                    name="radio">
                                <div class="radio-tile">
                                    <div class="icon walk-icon">
                                        <img src="/public/assets/images/output-onlinepngtools.png" alt="" srcset="">
                                    </div>
                                    <label for="walk" class="radio-tile-label">{{ type.name }}</label>
                                </div>
                            </div>
                        </div>

                        <div class="text-white mt-3">
                            <h6>Select Room Style</h6>
                        </div>

                        <div class="radio-tile-group">
                            <div v-for="(style, index) in styles" :key="index">
                                <input type="radio" v-model="room_style" :value="style.name" name="room_style"
                                    class="btn-check" :id="`btn-check` + index" autocomplete="off">
                                <label class="btn btn-outline-light fw-bold mx-1 btn-sm f-2 room_style"
                                    :for="`btn-check` + index">{{ style.name }}</label>
                            </div>
                        </div>
                    </div>

                    <div class="mt-2" v-if="show">

                        <div v-if="countDown > 0" class="d-flex justify-content-center">
                            <p>Please Wait... {{ countDown }}</p>
                        </div>

                        <Suspense>
                            <template #default>
                                <ViewImages />
                            </template>
                            <template #fallback>
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
                        </Suspense>
                    </div>
                </form>
            </div>
        </div>
    </section> -->



    <section id="our-work" class="potential-outer">
        <div class="container">
            <h2 class="title-outer" style="color:#fff;">Show the Potential of Every Property</h2>
            <h3 class="sub-title">From Outdated to Outstanding with a Click</h3>
            <p style="color:#fff; opacity: 0.7;">Don't let outdated interiors put off potential buyers. With Scop3D,
                transform any space into a modern, appealing<br> haven. Show buyers the true potential of every property,
                enhancing its value and appeal.</p>
            <div id="uploader_section" class="uploader_section bg_cube">
                <div class="nw-forminner">
                    <div class="container">
                        <div class="row">
                            <div class="nwfrm-tabs">
                                <ul class="nav nav-pills" id="ai-category-pills" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link nwai-tab active" id="pills-interior-tab"
                                            data-bs-toggle="pill" data-bs-target="#pills-interior" type="button" role="tab"
                                            aria-controls="pills-interior" aria-selected="true"
                                            onclick="if (!window.__cfRLUnblockHandlers) return false; loadRenders(0)">
                                            <img class="ai-icon" src="/assets/images/interior-icon.svg" alt=""
                                                loading="lazy">
                                            <span class="nwtb-title">Virtual Staging</span>
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link nwai-tab" id="pills-exterior-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-exterior" type="button" role="tab"
                                            aria-controls="pills-exterior" aria-selected="false"
                                            onclick="if (!window.__cfRLUnblockHandlers) return false; loadRenders(1)">
                                            <img class="ai-icon" src="/assets/images/exterior-icon.svg" alt=""
                                                loading="lazy">
                                            <span class="nwtb-title">Interior Design</span>
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link nwai-tab" id="pills-garden-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-garden" type="button" role="tab"
                                            aria-controls="pills-garden" aria-selected="false"
                                            onclick="if (!window.__cfRLUnblockHandlers) return false; loadRenders(2)">
                                            <img class="ai-icon" src="/assets/images/inactive-D2D.svg" alt=""
                                                loading="lazy">
                                            <span class="nwtb-title">Day to Dusk</span>
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link nwai-tab" id="pills-enhancement-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-enhancement" type="button" role="tab"
                                            aria-controls="pills-enhancement" aria-selected="false"
                                            onclick="if (!window.__cfRLUnblockHandlers) return false; loadRenders(3)">
                                            <img class="ai-icon" src="/assets/images/inactive-IE.svg" alt="" loading="lazy">
                                            <span class="nwtb-title">Image Enhancement</span>
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link nwai-tab" id="pills-removal-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-removal" type="button" role="tab"
                                            aria-controls="pills-removal" aria-selected="false"
                                            onclick="if (!window.__cfRLUnblockHandlers) return false; loadRenders(4)">
                                            <img class="ai-icon" src="/assets/images/inactive-IR.svg" alt="" loading="lazy">
                                            <span class="nwtb-title">Item Removal</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-interior" role="tabpanel"
                                    aria-labelledby="pills-interior-tab">
                                    <VirtualStaging />
                                </div>
                                <div class="tab-pane fade" id="pills-exterior" role="tabpanel"
                                    aria-labelledby="pills-exterior-tab">
                                    <InteriorDesign />
                                </div>
                                <div class="tab-pane fade" id="pills-garden" role="tabpanel"
                                    aria-labelledby="pills-garden-tab">
                                    <DaytoDusk />
                                </div>
                                <div class="tab-pane fade" id="pills-enhancement" role="tabpanel"
                                    aria-labelledby="pills-enhancement-tab">
                                    <ImageEnhancement />
                                </div>
                                <div class="tab-pane fade" id="pills-removal" role="tabpanel"
                                    aria-labelledby="pills-removal-tab">
                                    <ItemRemoval />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import VirtualStaging from './Services/VirtualStaging.vue'
import InteriorDesign from './Services/InteriorDesign.vue'
import DaytoDusk from './Services/DaytoDusk.vue'
import ImageEnhancement from './Services/ImageEnhancement.vue'
import ItemRemoval from './Services/ItemRemoval.vue'

</script>