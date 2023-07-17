import React from 'react'
import { Link } from 'react-router-dom'
import LittleBhosphorus from "../../assets/littlebosphorus_blog_cover.jpg"
import GlatteTower from "../../assets/galata-tower-istanbul_1678985700.jpg"
import HippoDrome from "../../assets/hippodrome-in-istanbul.jpg"
import IstanbulAtNight from "../../assets/istanbul-at-night_1678806152.jpg"
import IstanbulPark from "../../assets/istanbul-national-park-turkey.jpg"
import AnatylaDuden from "../../assets/antalya-duden-waterfalls-turkey_1677949063.jpg"
import Image from '../../ReUseAbleComponent/Image'


export default function Blog() {
  return (
    <section id="featured-latest" className="my-10">
      <div className="wrap-dis-85 wrap wrap-tab-11 wrap-mob-11 d-flex-baseline-lg">
        <div id="as-featured-1" className="col-dis-4 col-tab-12 col-mob-12">
          <h2 className="title-lined text-left abhaya">
            <div className="font-small-29">
              Recent in our <b> Blog</b>
            </div>
          </h2>
          <div className="col-dis-12 col-mob-12 right-padding-only w-tab-502">
            <Link
              className="blog-item featured-box w-tablet-502"

            >
              <figure className="col-dis-3 col-tab-3 col-mob-12">
                <img
                  data-src="https://www.propertyturkey.com/files/littlebosphorus_blog_cover.jpg"
                  className=" lazyloaded"
                  alt="Big Life by the Little Bosphorus Istanbul"
                  src={LittleBhosphorus}
                />
              </figure>
              <h2 className="abhaya" itemProp="name headline">
                Big Life by the Little Bosphorus Istanbul
                <span>21 Mar 2023</span>
              </h2>
            </Link>
          </div>
          <div className="col-dis-12 col-mob-12 right-padding-only w-tab-502">
            <Link

              title="Turkish Citizenship benefits for Foreign Investors"
              className="blog-item featured-box w-tablet-502"
            >
              <figure className="col-dis-3 col-tab-3 col-mob-12">
                <img
                  data-src="https://www.propertyturkey.com/files/galata-tower-istanbul_1678985700.jpg"
                  className=" lazyloaded"
                  alt="Turkish Citizenship benefits for Foreign Investors"
                  src={GlatteTower}
                />
              </figure>
              <h2 className="abhaya" itemProp="name headline">
                Turkish Citizenship benefits for Foreign Investors
                <span>16 Mar 2023</span>
              </h2>
            </Link>
          </div>
        </div>
        <div id="as-featured" className="col-dis-4 col-tab-12 col-mob-12 pt-0-sm">
          <h2 className="title-lined text-left abhaya visibility-hidden">
            <div className="font-small-29">
              Recent in our <b> Blog</b>
            </div>
          </h2>
          <div className="col-dis-12 col-mob-12 right-padding-only">
            <Link

              title="Experience Old Constantinople Through the Old Hippodrome"
              className="blog-item featured-box w-tablet-502"
            >
              <figure className="col-dis-3 col-tab-3 col-mob-12">
                <Image
                  className=" lazyloaded"
                  alt="Experience Old Constantinople Through the Old Hippodrome"
                  src={HippoDrome}
                />
              </figure>
              <h2 className="abhaya" itemProp="name headline">
                Experience Old Constantinople Through the Old Hippodrome
                <span>14 Mar 2023</span>
              </h2>
              
            </Link>
          </div>
          <div className="col-dis-12 col-mob-12 right-padding-only">
            <Link

              title="Famous Bosphorus Bridges of Istanbul"
              className="blog-item featured-box w-tablet-502"
              itemScope=""
              itemType="http://schema.org/BlogPosting"
            >
              <figure className="col-dis-3 col-tab-3 col-mob-12">
                <img
                  className=" lazyloaded"
                  alt="Famous Bosphorus Bridges of Istanbul"
                  src={IstanbulAtNight}
                />
              </figure>
              <h2 className="abhaya" itemProp="name headline">
                Famous Bosphorus Bridges of Istanbul
                <span>14 Mar 2023</span>
              </h2>
            </Link>
          </div>
          <div className="d-desk">
            <div className="blog-brb-custom">
              <Link
                className="view-all-btn btn rednew-border"
                to="/news"
              >
                <span>View All</span>
              </Link>
              <Link
                className="view-all-btn btn rednew-border margin-left-1"
              >
                <span>Subscribe</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="d-mobile">
          <Link
            className="view-all-btn btn rednew-border"

          >
            <span>View All</span>
          </Link>
          <Link
            className="view-all-btn btn rednew-border margin-left-1"
            data-fancybox=""
            data-src="#subscribe-media-modal"
            to=""
          >
            <span>Subscribe</span>
          </Link>
        </div>
        <div id="news" className="col-dis-4 col-tab-12 col-mob-12 box">
          <h2 className="title-lined text-left abhaya">
            <div className="font-small-29">
              Recent in our <b>News</b>
            </div>
          </h2>
          <div className="col-dis-12 col-mob-12 right-padding-only">
            <Link

              title="USA  to designate 15 more 'nature conservation areas'"
              className="featured-box blog-item w-tab-502"
            >
              <figure className="col-dis-3 col-tab-3 col-mob-12">
                <Image
                  data-src="https://www.propertyturkey.com/files/istanbul-national-park-turkey.jpg"
                  className=" lazyloaded"
                  alt="USA  to designate 15 more 'nature conservation areas'"
                  src={IstanbulPark}
                />
              </figure>
              <h2 itemProp="name headline">
                USA  to designate 15 more 'nature conservation areas'
                <span>04 Mar 2023</span>
              </h2>
            </Link>
          </div>
          <div className="col-dis-12 col-mob-12 right-padding-only">
            <Link

              title="January tourism records broken in USA ’s Antalya"
              className="featured-box blog-item w-tab-502"

            >
              <figure className="col-dis-3 col-tab-3 col-mob-12">
                <Image
                  data-src="https://www.propertyturkey.com/files/antalya-duden-waterfalls-turkey_1677949063.jpg"
                  className=" lazyloaded"
                  alt="January tourism records broken in USA ’s Antalya"
                  src={AnatylaDuden}
                />
              </figure>
              <h2 itemProp="name headline">
                January tourism records broken in USA ’s Antalya
                <span>04 Mar 2023</span>
              </h2>
            </Link>
          </div>
          <div className="text-center d-desk">
            <Link
              className="view-all-btn btn rednew-border"
              to="/news"
            >
              <span>View All</span>
            </Link>
          </div>
        </div>
        <div className="text-center d-mobile">
          <Link
            className="view-all-btn btn rednew-border"
            to="/news"
          >
            <span>View All</span>
          </Link>
        </div>
      </div>
    </section>

  )
}
