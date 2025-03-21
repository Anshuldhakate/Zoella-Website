import React, { useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";

import abrasive from "../images/home/abrasive.jpg";
import tapes from "../images/home/sealent.jpg";
import safety from "../images/home/sefety.webp";
import fasteners from "../images/home/fastnes.jpg";
import led from "../images/home/led.jpg";
import power from "../images/home/measurement.jpg";
import electrical from "../images/home/electricals.jpg"
import cutting from "../images/home/cutting.jpg"
import it from "../images/home/it.jpg"
import measurement from "../images/home/measurementnew.jpg"
import stationery from "../images/home/stationery.jpg"
import lubricants from "../images/home/oils.jpg"
import plumbing from "../images/home/plumbing.jpg"
import pneumatics from "../images/home/pneumatics.jpg"
import solar from "../images/home/solar.jpg"
import material from "../images/home/materialhandling.jpg"
import furniture from "../images/home/officeFurniture.jpg"
import interior from "../images/home/interior.jpg"


const serviceData = [
    {
        id: 1,
        img: abrasive,
        title: "Abrasives",
        frontText: "High-quality abrasives for industrial and personal use.",
        backText: (
          <>
            We provide a variety of abrasives for grinding, sanding, and polishing applications. <br/>
            <strong>Ex: Cloth Rolls • Abrasive Flap Disc • Abrasive Paper Rolls 
            Finish Sticks • Sand Paper Sheets • Slitting Saws
            Wood and Marble Cutting Wheels • Abrasive Tools • Abrasive Cloth Sheets 
            Abrasive Flap Wheels • Bench Wheels • Cut-Off Wheels • Flexible Grinding Discs 
            Saw Gumming • Taper Edge Wheels Etc.</strong>
          </>
        )
      },
  {
    id: 2,
    img: tapes,
    title: "Tapes, Adhesives & Sealants",
    frontText: "Strong adhesive solutions for every application.",
    backText: (
      <>
      Our collection includes industrial tapes, adhesives, and sealants for long-lasting bonding.
      <br/>
      <strong>
      Ex. Tapes • Plaster Boards & Plasters • Rubber &
      Contact Adhesives • Sealants •Adhesive Activators,
      Primers & Debonders • Glue spreader Roller • Sealant
      • Spray • Waterproofing • Adhesives & Glues •Paints
      • Chemical Fixing And Mortars • Packaging Tapes Etc
      </strong>

    </>
    )
  },
  {
    id: 3,
    img: safety,
    title: "Safety",
    frontText: "Ensuring workplace safety with protective gear.",
    backText: (
      <>
      We offer safety helmets, gloves, masks, and other PPE for all industries.
      <br/>
      <strong>
        Ex. Safety Gloves •Safety Goggles • Fire Extinguishers • Fire
        Protection • Safety Helmets • Safety Shoes • Respiratory
        Protection • Face Protection • Gas Detector • Safety
        Signage • Smoke Detector • Fire Alarm Systems •
        Reflective Jackets Etc
      </strong>
      </>
      )
  },
  {
    id: 4,
    img: fasteners,
    title: "Fasteners",
    frontText: "Durable fasteners for various industrial applications.",
    backText: (
      <>
      Our inventory includes bolts, screws, nuts, and more for secure assembly.
      <br/>
      <strong>
        Ex. Nuts • Clamps • Cylindrical Pins • Components
        • Rivets • Washers •Anchors • Nailer & Stapler
        Accessories • Dowel Pin • Set Screws •Screws
        • Pins • E-Clips • Setting Tools • Bolts
        • Assortments And Kits •Hex Wrench Sets • Taper Pins
        • Sockets • Circlip • Hexagon Wrenches •Threaded Rod
        • Industrial Fasteners
      </strong>
      </>
      )
  },
  {
    id: 5,
    img: led,
    title: "LED & Lighting",
    frontText: "Energy-efficient LED lighting solutions.",
    backText: (
      <>
      We provide LED bulbs, tube lights, and panel lights for residential and commercial use.
      <br/>
      <strong>
      Ex. Industrial Lights • LED Bulbs • LED Post Lamp
      • LED Ceiling Light • LED Flood &Outdoor Lights
      • LED Spike Light • LED Tube Light • Led Accessories
      • Led Wall Lights • Lamps • Lights • Led Indicator Bulb
      •Home Decor Lights • LED Exit Signage •LED Panel
      Light • LED Strip Lights • Rope Lights. Etc.
      </strong>
      </>
      )
  },
  {
    id: 6,
    img: power,
    title: "Power & Measurement Tools",
    frontText: "Reliable tools for precision measurement.",
    backText: (
      <>
      Our tools include power drills, calipers, and measuring tapes for accurate results.
      <br/>
      <strong>
        Ex. Electric Hammer • Cutters • Air Blower • Angle Grinder •
        • Impact Drill • Electrical Power Testing • Air Quality &
        Measuring • Flow Meters •Pressure & Vacuum Gauge
        •Scales And Systems • • Automotive Testing •
        Temperature & Humidity Measuring • Data Loggers
      </strong>
      </>
      )
  },

  {
    id: 7,
    img: electrical,
    title: "Electricals & Electronics",
    frontText: "High-quality electrical components for safe and efficient operations.",
    backText: (
      <>
        We provide a wide range of electrical and electronic components designed for reliability and durability in various industrial and residential applications.
        <br/>
        <strong>
          Ex. Switchgear & Protection • Wire Connector & Terminals •
          Air Conditioning Units • Conduit and Accessories • Cable
          Accessories & Power Strip • Industrial Plugs, Sockets, and
          Connectors • Insulation Tape • Stabilizer • Modules •
          Terminals and Terminal Connector Components •
          Displays • Motors • Relay & Accessories • Etc.
        </strong>
      </>
    )
  },
  
  {
    id: 8,
    img: cutting,
    title: "Cutting & Hand Tools",
    frontText: "Durable and precise tools for every cutting and shaping need.",
    backText: (
      <>
        Our collection includes high-performance cutting and hand tools designed for professionals and DIY enthusiasts, ensuring precision and efficiency in every task.
        <br/>
        <strong>
          Ex. Chucks • Cutting Blades • Reamers • Carbide Drills
          • Boring Heads And Sets • Standard Carbide Burrs • Taps
          • Hammer Drill Bits and Chisels • Carbide End Mills
          • Solid Carbide • Collets And Adaptors • End Mills •
          Drill Bit Sharpener • Milling Cutter • Drills • Screw
          Driver • Spanner • Etc.
        </strong>
      </>
    )
  },
  
  {
    id: 9,
    img: it,
    title: "IT Consumables",
    frontText: "Essential IT accessories for smooth and efficient operations.",
    backText: (
      <>
        Our IT consumables ensure seamless digital operations, offering reliable accessories and devices for businesses and personal use.
        <br/>
        <strong>
          Ex. Printer • Laptops • Scanner • Monitors • Pen Drive
          • Servers • UPS • Projectors And Accessories • Laptop
          Batteries • Mouse • Plug And Sockets • Solid State Drive
          • Network Accessories • Label Printers Accessories
          • Bags & Sleeves • Hard Disks • Laptop Power Adapter •
          Multimedia Player • Power Supply • Keyboard
        </strong>
      </>
    )
  },

  {
    id: 10,
    img: measurement,
    title: "Measurement & Testing",
    frontText: "Accurate measuring tools for precision testing and analysis.",
    backText: (
      <>
        Our advanced measurement and testing tools ensure precise readings, helping industries maintain quality and efficiency in their processes.
        <br/>
        <strong>
          Ex. Electrical Power Testing • Air Quality & Measuring
          • Flow Meters • Non-Electrical Properties Testing
          • Pressure & Vacuum Gauge • Electronic Testing
          • Weighing Scales and Systems • Process Monitoring
          • Automotive Testing • Temperature & Humidity
          Measuring • Data Loggers
        </strong>
      </>
    )
  },
  
  {
    id: 11,
    img: stationery,
    title: "Office Stationery",
    frontText: "Essential supplies for a well-organized and productive workspace.",
    backText: (
      <>
        Keep your office efficient and clutter-free with our high-quality stationery products, perfect for everyday business and personal use.
        <br/>
        <strong>
          Ex. Pens, Pencils & Markers • Corporate Gifts • Labels &
          Label Makers • Ink Cartridge & Toner • Files & Folders
          • Desk Accessories & Organization • Office Furniture •
          Envelopes • A4 Paper & Punches • Diaries & Calendar
          • Stylus Pen • Binding & Lamination • Tape & Adhesives
          • Boards • Notebooks & Pads • Stamp Pads & Ink • Etc.
        </strong>
      </>
    )
  },
  
  {
    id: 12,
    img: lubricants,
    title: "Oils & Lubricants",
    frontText: "High-performance oils and lubricants for smooth machinery operations.",
    backText: (
      <>
        Our premium oils and lubricants reduce friction, prevent wear and tear, and enhance the lifespan of industrial and automotive machinery.
        <br/>
        <strong>
          Ex. Lubrication Units • Lubricants • Shuttering Oil • Anti
          Corrosion • Metalworking Oils • Specialty Fluids •
          Greases • Multi-Cleaner • Hydraulic Oil • Etc.
        </strong>
      </>
    )
  },
  
  {
    id: 13,
    img: plumbing,
    title: "Plumbing",
    frontText: "Reliable plumbing solutions for leak-proof and efficient water systems.",
    backText: (
      <>
        Our high-quality plumbing products ensure smooth water flow and durable installations for residential, commercial, and industrial applications.
        <br/>
        <strong>
          Ex. CPVC Pipes & Fittings • Faucets • Flush Valve • Strainers
          • Valves • Plumbing Accessories • Gasket • Vent Cowl
          • Metal Fittings • Kitchen Accessories • Geyser Spares
          • W C Connector • PP Pipes And Fittings • Bathroom
          Accessories • Reducer • Hoses • Butterfly Valve •
          Showers • Etc.
        </strong>
      </>
    )
  },
  
  {
    id: 14,
    img: pneumatics,
    title: "Pneumatics",
    frontText: "High-performance pneumatic tools for precision and efficiency.",
    backText: (
      <>
        Our advanced pneumatic solutions deliver optimal performance in automation, manufacturing, and industrial applications.
        <br/>
        <strong>
          Ex. Pneumatic Control Valve • Pneumatic Fitting • Vacuum
          • Air Motor • Pneumatic Dispensers • Pneumatics Filter
          Regulator • Quick Release Coupling • Solenoid
          Valve • Pneumatic Cylinder • Spray Gun & Air Gun
          • Air Compressors • Impact Wrench • Pneumatic Angle
          Grinder • Pneumatic Press • Pressure Sensor • Spring
          Balancers • Air Treatment • Etc.
        </strong>
      </>
    )
  },
  
  {
    id: 15,
    img: solar,
    title: "Solar",
    frontText: "Sustainable solar solutions for renewable energy needs.",
    backText: (
      <>
        Harness the power of the sun with our efficient solar products, designed for homes, businesses, and outdoor applications.
        <br/>
        <strong>
          Ex. Solar Water Heaters • Post Lights • Solar Cells • Solar
          Garden Light • Solar Mobile Chargers • Solar Pumps
          • Solar Water Pumps • Emergency Lights • Solar
          Accessories • Solar Charge Controllers • Etc.
        </strong>
      </>
    )
  },
  
  {
    id: 16,
    img: material,
    title: "Material Handling",
    frontText: "Efficient material handling solutions for safe and smooth operations.",
    backText: (
      <>
        Our material handling equipment enhances workplace productivity, safety, and efficiency in warehouses, factories, and logistics operations.
        <br/>
        <strong>
          Ex. Hydraulic Trolley • Casters and Wheels Trolley • Dock
          Leveler • Pedal Driven Cycles • Racks, Drawers, and
          Trolleys • Chain Pulley • Snap Hook • Straps and
          Dispenser • Wooden Pallets • Plastic Pallets • Rope Pulley
          • Spring Balancers • Turn Buckles • Conveyors • Ladders
          • Cable Carrier Trolleys • Hand Trucks • Lifting Clamp • Etc.
        </strong>
      </>
    )
  },
  
  {
    id: 17,
    img: furniture,
    title: "Office Furniture",
    frontText: "Modern and ergonomic furniture for a comfortable workspace.",
    backText: (
      <>
        Upgrade your office with stylish and functional furniture, designed for comfort, efficiency, and a professional work environment.
        <br/>
        <strong>
          Ex. Tables • Chairs • Sofas • Center Tables • Workstations 
          • Cabinets • Conference Tables • Filing Systems • Storage Units • Etc.
        </strong>
      </>
    )
  },
  
  {
    id: 18,
    img: interior,
    title: "Interior Solutions",
    frontText: "Transforming spaces with innovative and stylish interior solutions.",
    backText: (
      <>
        Enhance the aesthetics and functionality of your space with our interior design solutions, tailored for homes, offices, and commercial environments.
        <br/>
        <strong>
          Ex. Wall Panels • Ceiling Designs • Modular Partitions • Flooring Solutions
          • Lighting Fixtures • Customized Furniture • Curtains & Blinds
          • Acoustic Panels • Decorative Elements • Home & Office Décor • Etc.
        </strong>
      </>
    )
  }
  
  

  
];

const Services = () => {
  const [flipped, setFlipped] = useState({});

  const handleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (

<>
<section id="services">
  <h3>Our Services</h3>
  <div className="service-list">
    {serviceData.map((service) => (
      <div key={service.id} className={`service ${flipped[service.id] ? "flipped" : ""}`}>
        <div className="service-front">
          <div className="service-img-wrapper">
            <img src={service.img} alt={service.title} />
          </div>
          <div className="service-title">
        <h4>{service.title}</h4>
      </div>
      <div className="service-title">
          <p>{service.frontText}</p>
          </div>
          <button onClick={() => handleFlip(service.id)}>Read More</button>
        </div>
        <div className="service-back">
          <h4>{service.title}</h4>
          <p>{service.backText}</p>
          <button onClick={() => handleFlip(service.id)}>Go Back</button>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Call-to-Action for Our Services */}
      <section className="services-cta">
        <h2>Looking for Reliable Industrial Solutions?</h2>
        <p>Partner with Zoella to get high-quality services tailored to your business needs.</p>
        <Link to="/contact" className="btn-services">Connect Now</Link>
      </section>


    </>



  );
};

export default Services;
