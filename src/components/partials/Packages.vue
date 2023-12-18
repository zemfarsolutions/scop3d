<template>
    <section id="join-us" class="agent-outer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="home16" data-aos="zoom-in">
                        <h2 class="title-outer" style="color: white;">Our Packages</h2>
                    </div>
                    <hr>
                </div>
                <div class="col-sm-4">
                    <div class="cardy text-center">
                        <div class="title">
                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
                            <h2>Basic</h2>
                        </div>
                        <div class="price">
                            <h4><sup>$</sup>10</h4>
                        </div>
                        <div class="option">
                            <ul>
                                <li>lorem ipsum</li>
                                <li>Markup lang</li>
                                <li>Tags marquee</li>
                                <li>Live Support</li>
                            </ul>
                        </div>
                        <a href="https://buy.stripe.com/test_bIY6qM1tq8rng48002" target="_blank">Order Now</a>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="cardy text-center">
                        <div class="title">
                            <i class="fa fa-plane" aria-hidden="true"></i>
                            <h2>Standard</h2>
                        </div>
                        <div class="price">
                            <h4><sup>$</sup>20</h4>
                        </div>
                        <div class="option">
                            <ul>
                                <li>lorem ipsum</li>
                                <li>Markup lang</li>
                                <li>Tags marquee</li>
                                <li>Live Support</li>
                            </ul>
                        </div>
                        <a href="https://buy.stripe.com/test_5kA02o1tqePL4lq9AD" target="_blank">Order Now</a>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="cardy text-center">
                        <div class="title">
                            <i class="fa fa-rocket" aria-hidden="true"></i>
                            <h2>Premium</h2>
                        </div>
                        <div class="price">
                            <h4><sup>$</sup>30</h4>
                        </div>
                        <div class="option">
                            <ul>
                                <li>lorem ipsum</li>
                                <li>Markup lang</li>
                                <li>Tags marquee</li>
                                <li>Live Support</li>
                            </ul>
                        </div>
                        <a href="https://buy.stripe.com/test_eVa9CY1tq7nj8BG148" target="_blank">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
        
        .cardy {
            position: relative;
            max-width: 300px;
            height: auto;
            background: linear-gradient(-45deg, #fe0847, #feae3f);
            border-radius: 15px;
            -webkit-border-radius: 15px;
            -moz-border-radius: 15px;
            -ms-border-radius: 15px;
            -o-border-radius: 15px;
            margin: 0 auto;
            padding: 40px 20px;
            box-shadow: 0 10px 15px rgba(0, 0, 0, .2);
            transition: .5s;
            -webkit-transition: .5s;
            -moz-transition: .5s;
            -ms-transition: .5s;
            -o-transition: .5s;
            overflow: hidden;
        }

        .cardy:hover {
            transform: scale(1.1);
            -webkit-transform: scale(1.1);
            -moz-transform: scale(1.1);
            -ms-transform: scale(1.1);
            -o-transform: scale(1.1);
        }

        .col-sm-4:nth-child(1) .cardy,
        .col-sm-4:nth-child(1) .cardy .title .fa {
            background: linear-gradient(-45deg, #f403d1, #64b5f6);
        }

        .col-sm-4:nth-child(2) .cardy,
        .col-sm-4:nth-child(2) .cardy .title .fa {
            background: linear-gradient(-45deg, #ffec61, #f321d7);
        }

        .col-sm-4:nth-child(3) .cardy,
        .col-sm-4:nth-child(3) .cardy .title .fa {
            background: linear-gradient(-45deg, #24ff72, #9a4eff);
        }

        .cardy:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 40%;
            background: rgba(255, 255, 255, .1);
            z-index: 1;
            transform: skewY(-5deg) scale(1.5);
            -webkit-transform: skewY(-5deg) scale(1.5);
            -moz-transform: skewY(-5deg) scale(1.5);
            -ms-transform: skewY(-5deg) scale(1.5);
            -o-transform: skewY(-5deg) scale(1.5);
        }

        .title .fa {
            color: #fff;
            font-size: 60px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            -ms-border-radius: 50%;
            -o-border-radius: 50%;
            text-align: center;
            line-height: 100px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, .2);
        }

        .title h2 {
            position: relative;
            margin: 20px 0 0;
            padding: 0;
            color: #fff;
            font-size: 28px;
            z-index: 2;
        }

        .price {
            position: relative;
            z-index: 2;
        }

        .price h4 {
            margin: 0;
            padding: 20px 0;
            color: #fff;
            font-size: 60px;
        }

        .option {
            position: relative;
            z-index: 2;
        }

        .option ul {
            margin: 0;
            padding: 0;
        }

        .option ul li {
            margin: 0 0 10px;
            padding: 0;
            list-style: none;
            color: #fff;
            font-size: 16px;
        }

        .cardy a {
            position: relative;
            z-index: 2;
            background: #fff;
            color: #262626;
            width: 150px;
            height: 40px;
            line-height: 40px;
            border-radius: 40px;
            display: block;
            text-align: center;
            margin: 20px auto 0;
            -webkit-border-radius: 40px;
            -moz-border-radius: 40px;
            -ms-border-radius: 40px;
            -o-border-radius: 40px;
            font-size: 16px;
            cursor: pointer;
            box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
        }

        .cardy a:hover {
            text-decoration: none;
        }
    </style>