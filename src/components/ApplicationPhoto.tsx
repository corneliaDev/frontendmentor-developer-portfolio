export default function ApplicationPhoto() {
  return (
    <div className="relative tablet:absolute -mt-16 -tablet:mt-0 tablet:top-0 tablet:right-0 desktop:right-[10.3125rem] desktop:w-[27.8125rem] h-[23,9375rem] w-[10.875rem] desktop:h-[45rem] tablet:w-[20.125rem] tablet:h-[37.5rem] object-cover">
      <picture>
        <source
          srcSet="./images/image-profile-tablet.webp"
          media="(min-width: 48rem)"
        />
        <source
          srcSet="./images/image-profile-desktop.webp"
          media="(min-width: 90rem)"
        />
        <source srcSet="./images/image-profile-mobile.webp" />
        <img
          src="./images/image-profile-mobile.webp"
          alt="portfolio developer photo"
        />
      </picture>
      <img
        src="/images/pattern-circle.svg"
        alt="image pattern circle"
        className="absolute bottom-0 -right-40 tablet:right-0 desktop:left-0 tablet:translate-x-1/2 desktop:-translate-x-1/2 z-10"
      />
    </div>
  );
}
