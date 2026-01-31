import svgPaths from "./svg-xjbfyta2ok";
import imgImage from "figma:asset/b8f78dd8dc270e5f9737537d99a3a5e1cf6ee83a.png";
import imgGalleryImage from "figma:asset/f8a15c9bbe2cd8cb14e753e8e4a59ff2fbafe0ef.png";
import imgGalleryImage1 from "figma:asset/1b7b9ed06e53fa11ed934b127bbe0f87cc647900.png";
import imgThumbnailImage from "figma:asset/c1e57017c54c3f6bc788abd25e0ed91bbe87351e.png";
import imgThumbnailImage1 from "figma:asset/d6dbe12a4a1ae670adbb682f9f3bb7e083e7f65e.png";
import imgThumbnailImage2 from "figma:asset/7d78fafec50ff790a2dda5404c27187528d40c17.png";
import imgSection from "figma:asset/6795e162202e3c0307963e5e15999946d0dee112.png";

function Links() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[15px] items-center leading-[0] not-italic right-0 text-[14px] top-1/2 whitespace-nowrap" data-name="links">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[19.2px]">home</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[19.2px]">about</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[19.2px]">services</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[19.2px]">blogs</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[19.2px]">media speaking</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[19.2px]">faqs</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[19.2px]">contact us</p>
      </div>
    </div>
  );
}

function ContainerNavbar() {
  return (
    <div className="h-[86px] relative shrink-0 text-white w-[1400px]" data-name="Container → Navbar">
      <p className="-translate-x-1/2 absolute font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold leading-none left-[200px] text-[39.78px] text-center top-[29px]">Welcome to Myles Yeo Tan</p>
      <Links />
    </div>
  );
}

function DesktopInvisible() {
  return (
    <div className="bg-[rgba(8,9,6,0.31)] content-stretch flex items-center justify-center opacity-31 overflow-clip relative shrink-0 w-[1440px]" data-name="Desktop Invisible">
      <ContainerNavbar />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold gap-[30px] items-center relative shrink-0 text-white w-full">
      <p className="leading-none relative shrink-0 text-[279.852px] text-center tracking-[-5.597px]">Myles Yeo Tan</p>
      <p className="leading-[1.1] min-w-full relative shrink-0 text-[24px] text-right w-[min-content] whitespace-pre-wrap">Crypto Trader | Christian Entrepreneur | Public Speaker | Financial Planner | Real Estate Broker</p>
    </div>
  );
}

function ButtonsColorChange() {
  return (
    <div className="bg-[#ed5128] content-stretch flex h-[48px] items-center justify-center overflow-clip px-[24px] py-[8px] relative shrink-0" data-name="Buttons (Color Change)">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[16px] text-center text-white uppercase">ABOUT ME</p>
    </div>
  );
}

function ButtonsColorChange1() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Buttons (Color Change)">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#ed5128] text-[16px] text-center uppercase">WORK WITH ME</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ed5128] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <ButtonsColorChange />
      <ButtonsColorChange1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-[508px]" data-name="Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[16px] text-center text-white w-[435px] whitespace-pre-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.</p>
      <Actions />
    </div>
  );
}

function HeroContentWrapper() {
  return (
    <div className="content-stretch flex flex-col h-[630px] items-center justify-between min-h-[630px] overflow-clip relative shrink-0 w-full" data-name="Hero Content Wrapper">
      <Frame />
      <Content />
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1600px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] px-[20px] relative w-full">
          <HeroContentWrapper />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[620px] relative shrink-0 w-full" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function SectionInner() {
  return (
    <div className="content-stretch flex flex-col gap-[82px] items-center relative shrink-0" data-name="Section Inner">
      <Container />
      <Image />
    </div>
  );
}

function SectionHeroSection() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[64px] relative shrink-0" data-name="Section - Hero Section">
      <SectionInner />
    </div>
  );
}

function NumberWrap() {
  return (
    <div className="content-stretch flex font-['Darker_Grotesque:Bold',sans-serif] font-bold gap-[10px] items-center justify-center leading-[0] relative shrink-0 text-[#ed5128] text-[20px] whitespace-nowrap" data-name="Number Wrap">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.1]"> //</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" id="node-3_224">
        <p className="leading-[1.1]">about</p>
      </div>
    </div>
  );
  //</p></div><div className="flex flex-col justify-center relative shrink-0" id="node-3_224"><p className="leading-[1.1]">about</p></div></div>);
  //</p></div><div className="flex flex-col justify-center relative shrink-0" id="node-3_224"><p className="leading-[1.1]">about</p></div></div>);
  //</p></div><div className="flex flex-col justify-center relative shrink-0"><p className="leading-[1.1]">about</p></div></div>);
  //</p></div><div className="flex flex-col justify-center relative shrink-0" id="node-3_224"><p className="leading-[1.1]">about</p></div></div>);
}

function TextBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[52px] items-start justify-center max-w-[1032px] relative shrink-0 w-[925px]" data-name="Text Block">
      <NumberWrap />
      <div className="flex flex-col font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold justify-center leading-none min-w-full relative shrink-0 text-[32px] text-black w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">Myles Tan is a speaker, mentor, and entrepreneur passionate about blending faith and finance to empower people in every area of life. With experience spanning crypto, trading, financial planning, real estate, and Christian entrepreneurship, he guides individuals to steward their resources wisely while keeping Christ at the centre.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Beyond business, Myles is deeply devoted to ministry — teaching, coaching, and speaking in ways that inspire growth, purpose, and transformation. His mission is simple: to help people live abundantly in both faith and finance.</p>
      </div>
    </div>
  );
}

function GalleryImage() {
  return (
    <div className="absolute inset-[0_0_0.33px_0]" data-name="Gallery Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[128.54%] left-[-80.17%] max-w-none top-0 w-[184.35%]" src={imgGalleryImage} />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[772px] relative shrink-0 w-[807px]" data-name="Image 03">
      <GalleryImage />
    </div>
  );
}

function GalleryImage1() {
  return (
    <div className="h-[372px] relative shrink-0 w-[568px]" data-name="Gallery Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGalleryImage1} />
    </div>
  );
}

function GalleryImage2() {
  return (
    <div className="h-[372px] relative shrink-0 w-[568px]" data-name="Gallery Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGalleryImage1} />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start justify-center relative shrink-0">
      <GalleryImage1 />
      <GalleryImage2 />
    </div>
  );
}

function ImageWrapper() {
  return (
    <div className="content-stretch flex gap-[25px] items-start relative shrink-0 w-full" data-name="Image Wrapper">
      <Image1 />
      <Frame16 />
    </div>
  );
}

function ContainerAboutContentWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Container → About Content Wrapper">
      <TextBlock />
      <ImageWrapper />
    </div>
  );
}

function SectionAboutSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center min-w-[1440px] px-[20px] py-[80px] relative shrink-0" data-name="Section - About Section">
      <ContainerAboutContentWrapper />
    </div>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex font-['Darker_Grotesque:Bold',sans-serif] font-bold gap-[10px] items-center leading-[0] opacity-80 relative shrink-0 text-[#ed5128] text-[20px] whitespace-nowrap" data-name="headline">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.1]"> //</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" id="node-3_236">
        <p className="leading-[1.1]">past achievements</p>
      </div>
    </div>
  );
  //</p></div><div className="flex flex-col justify-center relative shrink-0" id="node-3_236"><p className="leading-[1.1]">past achievements</p></div></div>);
  //</p></div><div className="flex flex-col justify-center relative shrink-0" id="node-3_236"><p className="leading-[1.1]">past achievements</p></div></div>);
  //</p></div><div className="flex flex-col justify-center relative shrink-0"><p className="leading-[1.1]">past achievements</p></div></div>);
  //</p></div><div className="flex flex-col justify-center relative shrink-0" id="node-3_236"><p className="leading-[1.1]">past achievements</p></div></div>);
}

function Underline() {
  return <div className="bg-[#282828] h-px opacity-30 shrink-0 w-[1396px]" data-name="Underline" />;
}

function TextBlock1() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] overflow-clip pb-[40px] pt-[28px] relative shrink-0 text-[#282828] w-[1396px]" data-name="Text Block">
      <div className="flex flex-col font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[48px] w-[826px]">
        <p className="leading-[0.9] whitespace-pre-wrap">2010</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[16px]">
        <p className="leading-[1.3] whitespace-pre-wrap">Founded the ministry with a mission to teach and demonstrate God’s Word through both online and in-person gatherings.</p>
      </div>
    </div>
  );
}

function Primary() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[20px] relative shrink-0 w-[1396px]" data-name="Primary">
      <Underline />
      <TextBlock1 />
    </div>
  );
}

function Underline1() {
  return <div className="bg-[#282828] h-px opacity-30 shrink-0 w-[1396px]" data-name="Underline" />;
}

function TextBlock2() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] overflow-clip pb-[40px] pt-[28px] relative shrink-0 text-[#282828] w-[1396px]" data-name="Text Block">
      <div className="flex flex-col font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[48px] w-[826px]">
        <p className="leading-[0.9] whitespace-pre-wrap">2011</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[16px]">
        <p className="leading-[1.3] whitespace-pre-wrap">Launched a YouTube channel and reached the first 10,000 subscribers within the year.</p>
      </div>
    </div>
  );
}

function Primary1() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[20px] relative shrink-0 w-[1396px]" data-name="Primary">
      <Underline1 />
      <TextBlock2 />
    </div>
  );
}

function Underline2() {
  return <div className="bg-[#282828] h-px opacity-30 shrink-0 w-[1396px]" data-name="Underline" />;
}

function TextBlock3() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] overflow-clip pb-[40px] pt-[28px] relative shrink-0 text-[#282828] w-[1396px]" data-name="Text Block">
      <div className="flex flex-col font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[48px] w-[826px]">
        <p className="leading-[0.9] whitespace-pre-wrap">2012</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[16px]">
        <p className="leading-[1.3] whitespace-pre-wrap">Expanded digital ministry during the pandemic, livestreaming weekly Bible studies, prayer nights, and deliverance sessions.</p>
      </div>
    </div>
  );
}

function Primary2() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[20px] relative shrink-0 w-[1396px]" data-name="Primary">
      <Underline2 />
      <TextBlock3 />
    </div>
  );
}

function Underline3() {
  return <div className="bg-[#282828] h-px opacity-30 shrink-0 w-[1396px]" data-name="Underline" />;
}

function TextBlock4() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] overflow-clip pb-[40px] pt-[28px] relative shrink-0 text-[#282828] w-[1396px]" data-name="Text Block">
      <div className="flex flex-col font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[48px] w-[826px]">
        <p className="leading-[0.9] whitespace-pre-wrap">2013</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[16px]">
        <p className="leading-[1.3] whitespace-pre-wrap">Introduced the Prophetic H.E.D.G.E. program, empowering hundreds of believers through healing, deliverance, and evangelism.</p>
      </div>
    </div>
  );
}

function Primary3() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[20px] relative shrink-0 w-[1396px]" data-name="Primary">
      <Underline3 />
      <TextBlock4 />
    </div>
  );
}

function Underline4() {
  return <div className="bg-[#282828] h-px opacity-30 shrink-0 w-[1396px]" data-name="Underline" />;
}

function TextBlock5() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] overflow-clip pb-[40px] pt-[28px] relative shrink-0 text-[#282828] w-[1396px]" data-name="Text Block">
      <div className="flex flex-col font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[48px] w-[826px]">
        <p className="leading-[0.9] whitespace-pre-wrap">2014</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[16px]">
        <p className="leading-[1.3] whitespace-pre-wrap">Partnered with local and international churches to conduct training and outreach events.</p>
      </div>
    </div>
  );
}

function Primary4() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[20px] relative shrink-0 w-[1396px]" data-name="Primary">
      <Underline4 />
      <TextBlock5 />
    </div>
  );
}

function Underline5() {
  return <div className="bg-[#282828] h-px opacity-30 shrink-0 w-[1396px]" data-name="Underline" />;
}

function TextBlock6() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] overflow-clip pb-[40px] pt-[28px] relative shrink-0 text-[#282828] w-[1396px]" data-name="Text Block">
      <div className="flex flex-col font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[48px] w-[826px]">
        <p className="leading-[0.9] whitespace-pre-wrap">2015</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[16px]">
        <p className="leading-[1.3] whitespace-pre-wrap">Surpassed 1 million video views and built an active global community engaging with teachings weekly.</p>
      </div>
    </div>
  );
}

function Primary5() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[20px] relative shrink-0 w-[1396px]" data-name="Primary">
      <Underline5 />
      <TextBlock6 />
    </div>
  );
}

function Underline6() {
  return <div className="bg-[#282828] h-px opacity-30 shrink-0 w-[1396px]" data-name="Underline" />;
}

function TextBlock7() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] overflow-clip pb-[40px] pt-[28px] relative shrink-0 text-[#282828] w-[1396px]" data-name="Text Block">
      <div className="flex flex-col font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[48px] w-[826px]">
        <p className="leading-[0.9] whitespace-pre-wrap">2024</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[16px]">
        <p className="leading-[1.3] whitespace-pre-wrap">Launched official website and prayer resources, making materials available to a wider audience</p>
      </div>
    </div>
  );
}

function Primary6() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[20px] relative shrink-0 w-[1396px]" data-name="Primary">
      <Underline6 />
      <TextBlock7 />
    </div>
  );
}

function Underline7() {
  return <div className="bg-[#282828] h-px opacity-30 shrink-0 w-[1396px]" data-name="Underline" />;
}

function TextBlock8() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] overflow-clip pb-[40px] pt-[28px] relative shrink-0 text-[#282828] w-[1396px]" data-name="Text Block">
      <div className="flex flex-col font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[48px] w-[826px]">
        <p className="leading-[0.9] whitespace-pre-wrap">2024</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px not-italic relative text-[16px]">
        <p className="leading-[1.3] whitespace-pre-wrap">Continuing to grow in reach, expanding mentoring, discipleship, and global evangelism initiatives.</p>
      </div>
    </div>
  );
}

function Primary7() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[20px] relative shrink-0 w-[1396px]" data-name="Primary">
      <Underline7 />
      <TextBlock8 />
    </div>
  );
}

function Underline8() {
  return <div className="bg-[#282828] h-px opacity-30 shrink-0 w-full" data-name="Underline" />;
}

function Primary8() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-name="Primary">
      <Underline8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Primary />
      <Primary1 />
      <Primary2 />
      <Primary3 />
      <Primary4 />
      <Primary5 />
      <Primary6 />
      <Primary7 />
      <Primary8 />
    </div>
  );
}

function Underline9() {
  return <div className="bg-[#282828] h-px opacity-30 shrink-0 w-full" data-name="Underline" />;
}

function MenuListBlock() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Menu List Block">
      <Container2 />
      <Underline9 />
    </div>
  );
}

function MenuContentWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Menu Content Wrapper">
      <Headline />
      <MenuListBlock />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white max-w-[1600px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center max-w-[inherit] px-[20px] py-[80px] relative w-full">
          <MenuContentWrapper />
        </div>
      </div>
    </div>
  );
}

function Headline1() {
  return (
    <div className="content-stretch flex font-['Darker_Grotesque:Bold',sans-serif] font-bold gap-[10px] items-center leading-[0] opacity-80 relative shrink-0 text-[20px] whitespace-nowrap" data-name="headline">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.1]"> //</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" id="node-3_256">
        <p className="leading-[1.1]">our services</p>
      </div>
    </div>
  );
  //</p></div><div className="flex flex-col justify-center relative shrink-0" id="node-3_256"><p className="leading-[1.1]">our services</p></div></div>);
  //</p></div><div className="flex flex-col justify-center relative shrink-0" id="node-3_256"><p className="leading-[1.1]">our services</p></div></div>);
  //</p></div><div className="flex flex-col justify-center relative shrink-0"><p className="leading-[1.1]">our services</p></div></div>);
  //</p></div><div className="flex flex-col justify-center relative shrink-0" id="node-3_256"><p className="leading-[1.1]">our services</p></div></div>);
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-white w-[654px]" data-name="text">
      <Headline1 />
      <p className="font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold leading-[0.9] relative shrink-0 text-[48px] text-center w-[654px] whitespace-pre-wrap">Guided by Faith. Grounded in Wisdom. Growing in Impact.</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[16px] text-center w-[min-content] whitespace-pre-wrap">Discover services that merge financial expertise with biblical principles—equipping you to thrive in business, life, and faith.</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Content">
      <p className="font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#282828] text-[32px] w-full">{`Crypto & Trading Insights`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-full">Stay ahead in the fast-moving digital economy with timely market analysis, trading strategies, and practical insights designed to help you invest wisely and confidently.</p>
    </div>
  );
}

function ContentTop() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content Top">
      <Content2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[40px] relative size-full">
        <ContentTop />
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Content">
      <p className="font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#282828] text-[32px] w-full">Financial Planning</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-full">Build a strong foundation for your future. From budgeting to long-term investments, we help you make informed financial decisions that align with your goals and values.</p>
    </div>
  );
}

function ContentTop1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content Top">
      <Content4 />
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[40px] relative size-full">
        <ContentTop1 />
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Content">
      <p className="font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#282828] text-[32px] w-full">Christian Entrepreneurship Coaching</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-full">Learn how to grow and manage a business with faith-driven principles. We mentor entrepreneurs to combine biblical wisdom with practical strategies for sustainable success.</p>
    </div>
  );
}

function ContentTop2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content Top">
      <Content6 />
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[40px] relative w-full">
        <ContentTop2 />
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Content">
      <p className="font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#282828] text-[32px] w-full">Speaking Engagements</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#3c3c3c] text-[16px] w-full">Book Myles Tan for conferences, seminars, and special events. Topics include faith, finance, entrepreneurship, and personal growth—delivered with passion and purpose.</p>
    </div>
  );
}

function ContentTop3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content Top">
      <Content8 />
    </div>
  );
}

function Content7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Content">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[40px] relative size-full">
        <ContentTop3 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[20px] items-start justify-center relative shrink-0 w-full">
      <Content1 />
      <Content3 />
      <Content5 />
      <Content7 />
    </div>
  );
}

function Sections() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full" data-name="Sections">
      <Text />
      <Frame1 />
    </div>
  );
}

function ButtonsColorChange2() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Buttons (Color Change)">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[16px] text-center text-white uppercase">LET’S CONNECT</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none" />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#ed5128] relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center px-[20px] py-[80px] relative w-full">
          <Sections />
          <ButtonsColorChange2 />
        </div>
      </div>
    </div>
  );
}

function Headline2() {
  return (
    <div className="content-stretch flex font-['Darker_Grotesque:Bold',sans-serif] font-bold gap-[10px] items-center leading-[0] opacity-80 relative shrink-0 text-[20px] text-white whitespace-nowrap" data-name="headline">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.1]"> //</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" id="node-3_270">
        <p className="leading-[1.1]">what’s happening</p>
      </div>
    </div>
  );
  //</p></div><div className="flex flex-col justify-center relative shrink-0" id="node-3_270"><p className="leading-[1.1]">what’s happening</p></div></div>);
  //</p></div><div className="flex flex-col justify-center relative shrink-0" id="node-3_270"><p className="leading-[1.1]">what’s happening</p></div></div>);
  //</p></div><div className="flex flex-col justify-center relative shrink-0"><p className="leading-[1.1]">what’s happening</p></div></div>);
  //</p></div><div className="flex flex-col justify-center relative shrink-0" id="node-3_270"><p className="leading-[1.1]">what’s happening</p></div></div>);
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative whitespace-pre-wrap">
      <p className="font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold leading-[0.9] relative shrink-0 text-[48px] text-white w-[654px]">Insights Beyond the Stage</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#9f9f9f] text-[16px] w-[572px]">Key lessons and reflections from the events I host and join — distilled into practical takeaways for your journey.</p>
    </div>
  );
}

function ButtonsColorChange3() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Buttons (Color Change)">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#ed5128] text-[16px] uppercase">SHOW ALL</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ed5128] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full">
      <Frame2 />
      <ButtonsColorChange3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 w-full" data-name="text">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[20px] relative w-full">
        <Headline2 />
        <Frame3 />
      </div>
    </div>
  );
}

function ThumbnailImage() {
  return (
    <div className="absolute inset-[0_-0.33px_0_0]" data-name="Thumbnail Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThumbnailImage} />
    </div>
  );
}

function WidgetImage() {
  return (
    <div className="h-[345.16px] overflow-clip relative shrink-0 w-[450.667px]" data-name="Widget Image">
      <ThumbnailImage />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white whitespace-nowrap">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[14px] tracking-[0.56px] uppercase">
        <p className="leading-[1.3]">{`EVENTS & RECAPS`}</p>
      </div>
      <div className="flex flex-col font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px]">
        <p className="leading-none">{`Faith & Business Summit 2025`}</p>
      </div>
    </div>
  );
}

function WidgetBody() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start justify-center leading-[0] overflow-clip relative shrink-0 w-full" data-name="Widget Body">
      <Frame4 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-w-full not-italic relative shrink-0 text-[#9f9f9f] text-[16px] w-[min-content]">
        <p className="leading-[1.3] whitespace-pre-wrap">My top 3 lessons on merging Kingdom values with practical strategies.</p>
      </div>
    </div>
  );
}

function ButtonsColorChange4() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Buttons (Color Change)">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#ed5128] text-[16px] uppercase">Read Full Recap</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ed5128] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function LinkLarge() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative" data-name="Link - Large">
      <WidgetImage />
      <WidgetBody />
      <ButtonsColorChange4 />
    </div>
  );
}

function ThumbnailImage1() {
  return (
    <div className="absolute inset-[0_-0.33px_0_0]" data-name="Thumbnail Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThumbnailImage1} />
    </div>
  );
}

function WidgetImage1() {
  return (
    <div className="h-[345.16px] overflow-clip relative shrink-0 w-full" data-name="Widget Image">
      <ThumbnailImage1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-white whitespace-nowrap">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[14px] tracking-[0.56px] uppercase">
        <p className="leading-[1.3]">{`EVENTS & RECAPS`}</p>
      </div>
      <div className="flex flex-col font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px]">
        <p className="leading-none">{`Crypto & Stewardship Webinar`}</p>
      </div>
    </div>
  );
}

function WidgetBody1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start justify-center leading-[0] overflow-clip relative shrink-0 w-full" data-name="Widget Body">
      <Frame5 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-w-full not-italic relative shrink-0 text-[#9f9f9f] text-[16px] w-[min-content]">
        <p className="leading-[1.3] whitespace-pre-wrap">Breaking down how believers can navigate digital investments responsibly.</p>
      </div>
    </div>
  );
}

function ButtonsColorChange5() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Buttons (Color Change)">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#ed5128] text-[16px] uppercase">Read Full Recap</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ed5128] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function LinkLarge1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative" data-name="Link - Large">
      <WidgetImage1 />
      <WidgetBody1 />
      <ButtonsColorChange5 />
    </div>
  );
}

function ThumbnailImage2() {
  return (
    <div className="absolute inset-[0_-0.33px_0_0]" data-name="Thumbnail Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgThumbnailImage2} />
    </div>
  );
}

function WidgetImage2() {
  return (
    <div className="h-[345.16px] overflow-clip relative shrink-0 w-full" data-name="Widget Image">
      <ThumbnailImage2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 text-white w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">
        <p className="leading-[1.3]">{`BLOGS & INSIGHTS`}</p>
      </div>
      <div className="flex flex-col font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[32px] w-[min-content]">
        <p className="leading-none whitespace-pre-wrap">Why Kingdom Entrepreneurs Think Differently About Wealth</p>
      </div>
    </div>
  );
}

function WidgetBody2() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Widget Body">
      <Frame6 />
    </div>
  );
}

function ButtonsColorChange6() {
  return (
    <div className="h-[48px] relative shrink-0" data-name="Buttons (Color Change)">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[#ed5128] text-[16px] uppercase">READ FULL BLOG</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ed5128] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function LinkLarge2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative" data-name="Link - Large">
      <WidgetImage2 />
      <WidgetBody2 />
      <ButtonsColorChange6 />
    </div>
  );
}

function BlogWrapper() {
  return (
    <div className="relative shrink-0 w-full" data-name="Blog Wrapper">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-start justify-center px-[20px] relative w-full">
          <LinkLarge />
          <LinkLarge1 />
          <LinkLarge2 />
        </div>
      </div>
    </div>
  );
}

function BlogContentWrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center overflow-clip py-[80px] relative shrink-0 w-full" data-name="Blog Content Wrapper">
      <Text1 />
      <BlogWrapper />
    </div>
  );
}

function Headline3() {
  return (
    <div className="content-stretch flex font-['Darker_Grotesque:Bold',sans-serif] font-bold gap-[10px] items-center leading-[0] opacity-80 relative shrink-0 text-[20px] whitespace-nowrap" data-name="headline">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.1]"> //</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0" id="node-3_311">
        <p className="leading-[1.1]">media speaking</p>
      </div>
    </div>
  );
  //</p></div><div className="flex flex-col justify-center relative shrink-0" id="node-3_311"><p className="leading-[1.1]">media speaking</p></div></div>);
  //</p></div><div className="flex flex-col justify-center relative shrink-0" id="node-3_311"><p className="leading-[1.1]">media speaking</p></div></div>);
  //</p></div><div className="flex flex-col justify-center relative shrink-0"><p className="leading-[1.1]">media speaking</p></div></div>);
  //</p></div><div className="flex flex-col justify-center relative shrink-0" id="node-3_311"><p className="leading-[1.1]">media speaking</p></div></div>);
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-white w-full">
      <Headline3 />
      <p className="font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold leading-[0.9] min-w-full relative shrink-0 text-[48px] w-[min-content] whitespace-pre-wrap">Sharing Faith and Finance With a Wider Audience</p>
    </div>
  );
}

function ButtonsColorChange7() {
  return (
    <div className="bg-[#ed5128] content-stretch flex h-[48px] items-center justify-center overflow-clip px-[24px] py-[8px] relative shrink-0" data-name="Buttons (Color Change)">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[16px] text-white uppercase">WATCH AND LISTEn</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#9f9f9f] text-[16px] w-[min-content] whitespace-pre-wrap">Myles Tan has been featured across conferences, panels, podcasts, and media platforms — delivering insights on faith, finance, entrepreneurship, and purposeful living. From local gatherings to international stages, each engagement is driven by the mission to inspire, equip, and empower people to live out their calling with wisdom and faith.</p>
      <ButtonsColorChange7 />
    </div>
  );
}

function Text2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[570px] items-start justify-between left-[137px] right-[819px] top-[calc(50%-0.16px)]" data-name="text">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[800px] relative shrink-0 w-[1440px]" data-name="Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[131.65%] left-[-7.67%] max-w-none top-[-5.32%] w-[151.83%]" src={imgSection} />
        </div>
        <div className="absolute bg-[rgba(24,20,14,0.42)] inset-0" />
      </div>
      <Text2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[32px] text-white w-full">Stay Equipped. Stay Inspired.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#9f9f9f] text-[16px] w-full">Get faith-driven insights on finance, entrepreneurship, and purposeful living delivered straight to your inbox.</p>
    </div>
  );
}

function Sections1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Sections">
      <Frame11 />
    </div>
  );
}

function ButtonsColorChange8() {
  return (
    <div className="bg-[rgba(255,255,255,0.42)] flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Buttons (Color Change)">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#bbc6c6] text-[16px] text-center">Enter your email</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
    </div>
  );
}

function ButtonsColorChange9() {
  return (
    <div className="bg-[#ed5128] content-stretch flex h-[48px] items-center justify-center overflow-clip px-[24px] py-[8px] relative shrink-0" data-name="Buttons (Color Change)">
      <p className="font-['Albert_Sans:Bold',sans-serif] font-bold leading-[1.3] relative shrink-0 text-[16px] text-center text-white uppercase">SUBSCRIBE</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <ButtonsColorChange8 />
      <ButtonsColorChange9 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Mail() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[545px]" data-name="Mail">
      <Sections1 />
      <Frame14 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[1.3] not-italic relative shrink-0 text-[#9f9f9f] text-[16px] w-full">
      <p className="relative shrink-0 w-full">Home</p>
      <p className="relative shrink-0 w-full">About Us</p>
      <p className="relative shrink-0 w-full">Our Services</p>
      <p className="relative shrink-0 w-full">Media Speaking</p>
      <p className="relative shrink-0 w-full">Blogs</p>
    </div>
  );
}

function FooterElement() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-[157px] whitespace-pre-wrap" data-name="Footer Element">
      <p className="font-['Darker_Grotesque:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[20px] text-white w-full">Quick Links</p>
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] items-start leading-[1.3] not-italic relative shrink-0 text-[#9f9f9f] text-[16px] w-full">
      <p className="relative shrink-0 w-full">Privacy Policy</p>
      <p className="relative shrink-0 w-full">Terms of Service</p>
      <p className="relative shrink-0 w-full">Contact Us</p>
    </div>
  );
}

function FooterElement1() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-[157px] whitespace-pre-wrap" data-name="Footer Element">
      <p className="font-['Darker_Grotesque:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[20px] text-white w-full">Need Help?</p>
      <Frame10 />
    </div>
  );
}

function CommunityIconSvg() {
  return (
    <div className="absolute inset-[12px]" data-name="community-icon → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="community-icon â SVG">
          <path d={svgPaths.p19926a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[42px] shrink-0 size-[42px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[42px]" />
      <CommunityIconSvg />
    </div>
  );
}

function CommunityIconSvg1() {
  return (
    <div className="absolute inset-[12px]" data-name="community-icon → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="community-icon â SVG">
          <path d={svgPaths.p3ef14800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[42px] shrink-0 size-[42px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[42px]" />
      <CommunityIconSvg1 />
    </div>
  );
}

function CommunityIconSvg2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[25px] left-1/2 top-1/2 w-[18px]" data-name="community-icon → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 25">
        <g id="community-icon â SVG">
          <path d={svgPaths.p4487a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="1.08" />
          <path d={svgPaths.p2d8a0772} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="1.08" />
          <path d="M13.2365 8.54H13.23" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.44" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[42px] shrink-0 size-[42px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[42px]" />
      <CommunityIconSvg2 />
    </div>
  );
}

function CommunityIconSvg3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 top-1/2 w-[17px]" data-name="community-icon → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g id="community-icon â SVG">
          <path d={svgPaths.p1e6c080} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1e778080} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[42px] shrink-0 size-[42px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[42px]" />
      <CommunityIconSvg3 />
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-[2px] relative shrink-0" data-name="social media">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function FooterElement2() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-[157px]" data-name="Footer Element">
      <p className="font-['Darker_Grotesque:Bold',sans-serif] font-bold leading-[1.1] min-w-full relative shrink-0 text-[20px] text-white w-[min-content] whitespace-pre-wrap">Follow Us</p>
      <SocialMedia />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[50px] items-start justify-center min-h-px min-w-px pt-[36px] relative self-stretch" data-name="Right">
      <FooterElement />
      <FooterElement1 />
      <FooterElement2 />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex gap-[80px] items-start justify-center relative shrink-0 w-full" data-name="Top">
      <Mail />
      <Right />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[16px] text-white w-[242.46px] whitespace-pre-wrap">©2025, Myles Tan</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-black relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[48px] items-start pb-[30px] pt-[60px] px-[20px] relative w-full">
        <Top />
        <p className="font-['Darker_Grotesque:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[279.852px] text-center text-white tracking-[-5.597px]">Myles Yeo Tan</p>
        <Frame13 />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#0f100a] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Background">
      <SectionHeroSection />
      <SectionAboutSection />
      <Container1 />
      <Section />
      <BlogContentWrapper />
      <Section1 />
      <Footer />
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="bg-[#0f100a] content-stretch flex flex-col items-start relative size-full" data-name="homepage">
      <DesktopInvisible />
      <Background />
    </div>
  );
}