"use client";
import Link from "next/link";

export default function About() {
  const products = [
    {
      id: 1,
      key: "hello",
      name: "Syltherine",
      oldprice: 350,
      price: 250,
      liked: false,
      des: "Stylish cafe chair",
      general: {
        salespackage: "1 section sofa",
        model: "DTUBLIGRBL568",
        secoundary: "Solid wood",
        configuration: "L-shaped",
        upholsterymaterial: "Fabric + Cotton",
        upholsterycolor: "bright grey & Lion",
      },
      myproduct: {
        filingmaterial: "matte",
        finishtype: "bright & gray lion",
        adjustheaderest: "no",
        maxmumloadcapcity: "280 kg",
        originalofmanufacture: "india",
      },
      dimensions: {
        width: "265.23 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatheight: "41.52 cm",
        legheight: "5.46 cm",
      },
      warranty: {
        summry: "1 Year Manufacturing Warranty",
        servicetype:
          "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
        dominstic: "1 Year",
        covered: "Warranty Against Manufacturing Defect",
        notcovered:
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
      },
      image: "images/Images.png",
      image1: "images/Images.png",
      image2: "images/Images2.png",
      image3: "images/Images3.png",
      image4: "images/lamp.png",
      sale: 30,
    },
    {
      id: 2,
      key: "hello",
      name: "Leviosa",
      price: 250,
      liked: false,
      des: "Stylish cafe chair",
      not: "x",
      general: {
        salespackage: "1 Three Seater, 2 Single Seater",
        model: "TFCBLIGRBL6SRHS",
        secoundary: "Solid wood",
        configuration: "L-shaped",
        upholsterymaterial: "Fabric + Cotton",
        upholsterycolor: "bright grey & Lion",
      },
      myproduct: {
        filingmaterial: "foam",
        finishtype: "bright & gray lion",
        adjustheaderest: "yes",
        maxmumloadcapcity: "300 kg",
        originalofmanufacture: "india",
      },
      dimensions: {
        width: "265.23 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatheight: "41.52 cm",
        legheight: "5.46 cm",
      },
      warranty: {
        summry: "1 Year Manufacturing Warranty",
        servicetype:
          "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
        dominstic: "1 Year",
        covered: "Warranty Against Manufacturing Defect",
        notcovered:
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
      },
      image: "images/image2.png",
      image1: "images/Images.png",
      image2: "images/Images2.png",
      image3: "images/Images3.png",
      image4: "images/lamp.png",
    },
    {
      id: 3,
      key: "hello",
      name: "Lolito",
      oldprice: 1400,
      price: 700,
      liked: false,
      des: "Luxury big sofa",
      general: {
        salespackage: "1 section sofa",
        model: "DTUBLIGRBL568",
        secoundary: "Solid wood",
        configuration: "L-shaped",
        upholsterymaterial: "Fabric + Cotton",
        upholsterycolor: "bright grey & Lion",
      },
      myproduct: {
        filingmaterial: "matte",
        finishtype: "bright & gray lion",
        adjustheaderest: "no",
        maxmumloadcapcity: "280 kg",
        originalofmanufacture: "india",
      },
      dimensions: {
        width: "265.23 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatheight: "41.52 cm",
        legheight: "5.46 cm",
      },
      warranty: {
        summry: "1 Year Manufacturing Warranty",
        servicetype:
          "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
        dominstic: "1 Year",
        covered: "Warranty Against Manufacturing Defect",
        notcovered:
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
      },
      image: "images/Images2.png",
      image1: "images/Images.png",
      image2: "images/Images2.png",
      image3: "images/Images3.png",
      image4: "images/lamp.png",
      sale: 50,
    },
    {
      id: 4,
      key: "hello",
      name: "Respira",
      price: 500,
      liked: false,
      des: "Outdoor bar table and stool",
      general: {
        salespackage: "1 Three Seater, 2 Single Seater",
        model: "TFCBLIGRBL6SRHS",
        secoundary: "Solid wood",
        configuration: "L-shaped",
        upholsterymaterial: "Fabric + Cotton",
        upholsterycolor: "bright grey & Lion",
      },
      myproduct: {
        filingmaterial: "foam",
        finishtype: "bright & gray lion",
        adjustheaderest: "yes",
        maxmumloadcapcity: "300 kg",
        originalofmanufacture: "india",
      },
      dimensions: {
        width: "265.23 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatheight: "41.52 cm",
        legheight: "5.46 cm",
      },
      warranty: {
        summry: "1 Year Manufacturing Warranty",
        servicetype:
          "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
        dominstic: "1 Year",
        covered: "Warranty Against Manufacturing Defect",
        notcovered:
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
      },
      image: "images/Images3.png",
      image1: "images/Images.png",
      image2: "images/Images2.png",
      image3: "images/Images3.png",
      image4: "images/lamp.png",
      sale: 50,
      new: "New",
    },
    {
      id: 5,
      key: "hello",
      name: "Grifo",
      price: 150,
      liked: false,
      des: "Night lamp",
      general: {
        salespackage: "1 section sofa",
        model: "DTUBLIGRBL568",
        secoundary: "Solid wood",
        configuration: "L-shaped",
        upholsterymaterial: "Fabric + Cotton",
        upholsterycolor: "bright grey & Lion",
      },
      myproduct: {
        filingmaterial: "matte",
        finishtype: "bright & gray lion",
        adjustheaderest: "no",
        maxmumloadcapcity: "280 kg",
        originalofmanufacture: "india",
      },
      dimensions: {
        width: "265.23 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatheight: "41.52 cm",
        legheight: "5.46 cm",
      },
      warranty: {
        summry: "1 Year Manufacturing Warranty",
        servicetype:
          "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
        dominstic: "1 Year",
        covered: "Warranty Against Manufacturing Defect",
        notcovered:
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
      },
      image: "images/lamp.png",
      image1: "images/Images.png",
      image2: "images/Images2.png",
      image3: "images/Images3.png",
      image4: "images/lamp.png",
    },
    {
      id: 6,
      key: "hello",
      name: "Muggo",
      price: 200,
      liked: false,
      des: "Small mug",
      general: {
        salespackage: "1 Three Seater, 2 Single Seater",
        model: "TFCBLIGRBL6SRHS",
        secoundary: "Solid wood",
        configuration: "L-shaped",
        upholsterymaterial: "Fabric + Cotton",
        upholsterycolor: "bright grey & Lion",
      },
      myproduct: {
        filingmaterial: "foam",
        finishtype: "bright & gray lion",
        adjustheaderest: "yes",
        maxmumloadcapcity: "300 kg",
        originalofmanufacture: "india",
      },
      dimensions: {
        width: "265.23 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatheight: "41.52 cm",
        legheight: "5.46 cm",
      },
      warranty: {
        summry: "1 Year Manufacturing Warranty",
        servicetype:
          "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
        dominstic: "1 Year",
        covered: "Warranty Against Manufacturing Defect",
        notcovered:
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
      },
      image: "images/image6.png",
      image1: "images/bedroom.png",
      image2: "images/image7.png",
      image3: "images/image8.png",
      image4: "images/image6.png",
      new: "New",
    },
    {
      id: 7,
      key: "hello",
      name: "Pingky",
      oldprice: 1400,
      price: 700,
      liked: false,
      des: "minimalist flower por",
      general: {
        salespackage: "1 section sofa",
        model: "DTUBLIGRBL568",
        secoundary: "Solid wood",
        configuration: "L-shaped",
        upholsterymaterial: "Fabric + Cotton",
        upholsterycolor: "bright grey & Lion",
      },
      myproduct: {
        filingmaterial: "matte",
        finishtype: "bright & gray lion",
        adjustheaderest: "no",
        maxmumloadcapcity: "280 kg",
        originalofmanufacture: "india",
      },
      dimensions: {
        width: "265.23 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatheight: "41.52 cm",
        legheight: "5.46 cm",
      },
      warranty: {
        summry: "1 Year Manufacturing Warranty",
        servicetype:
          "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
        dominstic: "1 Year",
        covered: "Warranty Against Manufacturing Defect",
        notcovered:
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
      },
      image: "images/image7.png",
      image1: "images/bedroom.png",
      image2: "images/image7.png",
      image3: "images/image8.png",
      image4: "images/image6.png",
      sale: 50,
    },
    {
      id: 8,
      key: "hello",
      name: "Potty",
      price: 700,
      liked: false,
      des: "Cute bed set",
      general: {
        salespackage: "1 Three Seater, 2 Single Seater",
        model: "TFCBLIGRBL6SRHS",
        secoundary: "Solid wood",
        configuration: "L-shaped",
        upholsterymaterial: "Fabric + Cotton",
        upholsterycolor: "bright grey & Lion",
      },
      myproduct: {
        filingmaterial: "foam",
        finishtype: "bright & gray lion",
        adjustheaderest: "yes",
        maxmumloadcapcity: "300 kg",
        originalofmanufacture: "india",
      },
      dimensions: {
        width: "265.23 cm",
        height: "76 cm",
        depth: "167.76 cm",
        weight: "45 KG",
        seatheight: "41.52 cm",
        legheight: "5.46 cm",
      },
      warranty: {
        summry: "1 Year Manufacturing Warranty",
        servicetype:
          "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com",
        dominstic: "1 Year",
        covered: "Warranty Against Manufacturing Defect",
        notcovered:
          "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
      },
      image: "images/image8.png",
      image1: "images/bedroom.png",
      image2: "images/image7.png",
      image3: "images/image8.png",
      image4: "images/image6.png",
      new: "New",
    },
  ];

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold">About Us</h1>
      {products.map((e) => (
        <div key={e.id} className="m-3 bg-white text-red-600">
          <Link href={`/about/articleid?id=${e.id}`}>{e.id}</Link>
          <br />
        </div>
      ))}

      <br />
      <Link href={`/about/article`}>Article</Link>
    </div>
  );
}
