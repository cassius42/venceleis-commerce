import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import ProductGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";

import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import callIconImageSrc from "images/icons8-man-on-phone-96.png";
import deliveryIconImageSrc from "images/delivery.png";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block `;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-3xl w-[750px] h-[400px]`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Clothing Store
            <HighlightedText>No.1 di Indonesia</HighlightedText>
          </>
        }
        primaryButtonUrl="https://www.google.com"
        description="Toko Clothing & Apparel terbaik se Indonesia! Menyediakan fashion wear paling lengkap!"
        imageSrc="https://digitalcontent.api.tesco.com/v2/media/homepage/d1842909-f9dd-4a53-943a-1ce86217ebfb/2448_734x380.jpeg"
        imageCss={imageCss}
        imageDecoratorBlob={false}
        primaryButtonText={null}
        watchVideoButtonText="Venceleis Fashion Products"
        watchVideoYoutubeUrl="https://www.youtube.com/embed/YKaiXY7zHxk?si=nQHto6umjJdFkzox"
      />

      <MainFeature
        subheading="Didirikan sejak 2023"
        heading={
          <>
            Outfit always <HighlightedText> Up to Date!</HighlightedText>
          </>
        }
        description="Selalu menyediakan outfit paling kekinian dengan harga yang aman untuk dompet!"
        imageSrc="https://www.blibli.com/friends-backend/wp-content/uploads/2023/02/B100508-cover.jpg"
        imageCss={imageCss}
        primaryButtonUrl="http://localhost:3000/products"
        primaryButtonText="Pesan Sekarang!"
        textOnLeft={false}
      />
      <ProductGrid
        heading={
          <>
            Lihat <HighlightedText>Produk Kami.</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            <HighlightedText>Keunggulan</HighlightedText> Kami.
          </>
        }
        linkText="Lebih Detail"
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "Online & Offline Shop",
            description:
              "Toko kami tersedia secara retail maupun online (Tokopedia, Shopee, dan Blibli)! ",
            url: "https://timerse.com",
          },
          {
            imageSrc: callIconImageSrc,
            title: "Pelayanan Cepat!",
            description:
              "Admin dan Customer Service kami akan membalas pesan anda dalam waktu kurang dari 5 menit!",
            url: "https://timerse.com",
          },
          {
            imageSrc: deliveryIconImageSrc,
            title: "5+ Ekspedisi",
            description:
              "Tersedia lebih dari 5 ekspedisi pengiriman untuk kamu pilih!",
            url: "https://timerse.com",
          },
        ]}
      />

      <MainFeature2
        heading={
          <>
            Kenapa&nbsp;
            <HighlightedText>Memilih Kami?</HighlightedText>
          </>
        }
        imageSrc="https://images.ctfassets.net/sc7uy4u0eewy/2E06B9vay4Y4SgYsuu8yso/a5aee5fb4cbe2e73a5b2deab3fcd0e7f/_DSC4524.jpg"
        description="Kami selalu menyediakan outfit menarik sesuai dengan trend terbaru, desain yang pasti elegan, kualitas bahan terbaik, dan sablon kualitas tinggi dengan gambar High-Definition. Lebih dari 12000 pesanan telah kami proses dan banyak pelanggan yang telah terpuaskan!"
        textOnLeft={true}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        primaryButtonText="Pelajari Lebih Lanjut"
        statistics={[
          {
            key: "Pesanan",
            value: "12040+",
          },
          {
            key: "Pelanggan",
            value: "9120+",
          },
          {
            key: "Testimoni",
            value: "50820+",
          },
        ]}
      />

      <Testimonial
        subheading=""
        heading={
          <>
            Testimoni&nbsp; <HighlightedText>Pelanggan Kami.</HighlightedText>
          </>
        }
        testimonials={[
          {
            imageSrc:
              "https://img.freepik.com/free-photo/young-asian-teenage-girl-surprised-excited-isolated-pink-background_74952-2590.jpg?w=996&t=st=1714257016~exp=1714257616~hmac=203fdea28ce908289ec8d3c0dbed34126cb5bf03dda2e34911d00d1b2f8a6028",
            quote:
              "Selalu senang belanja dari Venceleis Clothing Store! Kualitas bahan produk dari toko ini selalu menjadi yang terbaik!",
            customerName: "Charlotte Hale",
          },
          {
            imageSrc:
              "https://img.freepik.com/free-photo/real-people-natural-portrait-happy-guy-smiling-laughing-looking-upbeat-camera-standing-glasses-white-background_1258-65662.jpg?t=st=1714256937~exp=1714260537~hmac=94744821d5bc23a06392f5ac9070d2fa30b800f2f223102435d5838455a3fba3&w=996",
            quote:
              "Semua pakaian yang saya beli dari toko Venceleis Clothing Store, selalu nyaman saya pakai untuk sehari-hari. Bahan yang digunakan tidak panas dan sejuk!",
            customerName: "Zion Cheng",
          },
          {
            imageSrc:
              "https://img.freepik.com/free-photo/happy-laughing-young-handsome-southeast-asian-man-isolated-blue-studio-background_74952-3619.jpg?w=996&t=st=1714256979~exp=1714257579~hmac=e8dfec5a6bb7451546b1e565e5eb51dcc7b91bb8d1df077c012ee828e2106cef",
            quote:
              "Produk sesuai gambar dan deskripsi, Seller baik dan ramah. Bintang 5",
            customerName: "Christ Benjamin",
          },
        ]}
      />

      <DownloadApp
        text={
          <>
            People around you are ordering the most trending outfit using the{" "}
            <HighlightedTextInverse>Tees App.</HighlightedTextInverse>
          </>
        }
      />
      <Footer background={"bg-gray-200"} />
    </AnimationRevealPage>
  );
};
